const router = require("express").Router();
const {OAuth2Client} = require('google-auth-library');
const jwtGenerator = require("../utils/jwtGenerator");
const db = require("../db/db");
const bcrypt =require("bcrypt");



const client = new OAuth2Client('445644859415-0ek2a6s4n67ml9dh9uc0ap8bfk1fi17k.apps.googleusercontent.com');  // Replace with your Google Client ID

// Google Login Route
router.post("/", async (req, res) => {


  const { credential, clientId } = req.body;

  try {
    // Verify the token with Google
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: clientId, // Replace with your Google Client ID
    });

    const payload = ticket.getPayload();
    const email = payload["email"];
    const first_name = payload["given_name"];
    const last_name = payload["family_name"];
    const password = ""

    // Check if user exists in DB
    const user = await db.query("SELECT * FROM users WHERE email = $1;", [email]);

    //bcrypt password 
    const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);

      const bcryptPassword = await bcrypt.hash(password, salt);

    if (user.rows.length === 0) {
      // If user doesn't exist, create a new one
      const newUser = await db.query(
        "INSERT INTO users (first_name,last_name, email, password) VALUES ($1,$2,$3,$4) RETURNING *;",
        [first_name,last_name, email,bcryptPassword]
      );
      const token = jwtGenerator(newUser.rows[0].id);
      return res.json({ token });
    }

    // If user exists, generate a token
    const token = jwtGenerator(user.rows[0].id);
    res.json({ token });

  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
});

module.exports = router;