require("dotenv").config({ path: "../.env" });

global.ReadableStream = require("stream/web").ReadableStream;
global.Blob = require("buffer").Blob;
global.DOMException = require("node-domexception");

const db = require("../db/db.js");
const { fetch, Headers } = require("undici");

globalThis.fetch = fetch;
globalThis.Headers = Headers;


//////////////////////////////////////////////////////////////////////////////
////Function dataExtraction
/////////////////////////////////////////////////////////////////////////////

async function dataExtraction(field) {
  try {
    // Dynamic import of ESM-only modules
    const { GoogleGenerativeAI } = await import("@google/generative-ai");
    const { fileTypeFromBuffer } = await import("file-type");

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);

    const mimeTypes = [
      "application/pdf",
      "image/png",
      "image/jpeg",
      "image/tiff",
      "image/gtiff",
    ];
    ///////////////////////////////////////////////////////////////////////////////
    //chose which document to extract
    ////////////////////////////////////////////////////////////////////////////////
    let table;
    if (field === "id") {
      table = "id";
    } else if (field === "bank") {
      table = "bank";
    } else if (field === "income") {
      table = "income";
    } else {
      throw new Error(`Invalid field name: ${field}`);
    }
    // Query to get PDF binary data from a table (update table/column names accordingly)
    const res = await db.query(
      `SELECT file_data FROM ${table}_doc ORDER BY id DESC LIMIT 1`
    );

    //File id to used as a reference for foriegn key in database table

    const file_id = await db.query(
      `SELECT id FROM ${table}_doc ORDER BY id DESC LIMIT 1;`
    );

    const doc_id = file_id.rows[0].id;

    if (res.rows.length === 0) {
      throw new Error("No PDF found in database.");
    }

    const pdfBuffer = res.rows[0].file_data;
    const base64Data = Buffer.from(pdfBuffer).toString("base64");

    const fileType = await fileTypeFromBuffer(pdfBuffer);
    if (!fileType || !mimeTypes.includes(fileType.mime)) {
      throw new Error(`Unsupported MIME type: ${fileType?.mime || "unknown"}`);
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////differntiate AI query statments
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    let Query;

    if (table === "id") {
      Query = `Reply ONLY in this strict JSON format (use underscores in keys, no spaces):Extract this fields only from the driving license page,ignore No explanation, no extra text. first name, last name, date of birth, address, license number; `;
    } else if (table === "bank") {
      Query = `Reply ONLY in this strict JSON format (use underscores in keys, no spaces):check the pdf file if it is a valid bank statment, if valid return true if not return false; `;
    } else if (table === "income") {
      Query = `Reply ONLY in this strict JSON format (use underscores in keys, no spaces):Extract this fields only from the driving license page,ignore No explanation, no extra text. employee first name, employee last name, employee ssn, employee address, employer name, employer id number, employer address; `;
    } else {
      throw new Error(`Invalid field name: ${table}`);
    }

    const result = await genAI
      .getGenerativeModel({ model: "models/gemini-1.5-flash" })
      .generateContent([
        {
          inlineData: {
            data: base64Data,
            mimeType: fileType.mime,
          },
        },
        Query,
      ]);

    const genResultText = await result.response.text();
    console.log("RAW RESPONSE:", genResultText);

    const match = genResultText.match(/{[\s\S]*}/); // Find first {......}block
    if (!match) {
      console.error("No valid JSON object found in response.");
      return;
    }

    try {
      const jsonData = JSON.parse(match[0]);

      let insertData;
      let value;

      if (table === "id") {
        const {
          first_name,
          last_name,
          date_of_birth,
          address,
          license_number,
        } = jsonData;

        insertData =
          "INSERT INTO drivers_license (first_name, last_name, date_of_birth, address, license_number, doc_id)VALUES ($1,$2,$3,$4,$5,$6)";
        value = [
          first_name,
          last_name,
          date_of_birth,
          address,
          license_number,
          doc_id,
        ];
      } else if (table === "bank") {
        const { is_valid_bank_statement } = jsonData;

        value = [is_valid_bank_statement, doc_id];
        insertData =
          "INSERT INTO bank_statment_records (is_valid_bank_statement, doc_id)VALUES ($1,$2)";
      } else if (table === "income") {
        const {
          employee_first_name,
          employee_last_name,
          employee_ssn,
          employee_address,
          employer_name,
          employer_id_number,
          employer_address,
        } = jsonData;

        insertData =
          "INSERT INTO w2_records (employee_first_name, employee_last_name, employee_ssn, employee_address, employer_name, employer_id_number,employer_address,doc_id)VALUES ($1,$2,$3,$4,$5,$6,$7,$8)";
        value = [
          employee_first_name,
          employee_last_name,
          employee_ssn,
          employee_address,
          employer_name,
          employer_id_number,
          employer_address,
          doc_id,
        ];
      } else {
        throw new Error(`Invalid field name: `);
      }

      db.query(insertData, value);
      console.log("Data populated into tables");
    } catch (e) {
      console.error("Failed to parse JSON:", e.message);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

module.exports = dataExtraction;
