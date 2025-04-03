const router = require("express").Router();
const {OAuth2Client} = require('google-auth-library');
const jwtGenerator = require("../utils/jwtGenerator");

const client = new OAuth2Client('YOUR_GOOGLE_CLIENT_ID');  // Replace with your Google Client ID

// Google Login Route
router.post("/", async (req, res) => {
  const { tokenId } = req.body;

  try {
    // Verify the token with Google
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your Google Client ID
    });

    const payload = ticket.getPayload();
    const email = payload.email;
    const name = payload.name;

    // Check if user exists in DB
    const user = await db.query("SELECT * FROM users WHERE email = $1;", [email]);

    if (user.rows.length === 0) {
      // If user doesn't exist, create a new one
      const newUser = await db.query(
        "INSERT INTO users (name, email) VALUES ($1,$2) RETURNING *;",
        [email, name]
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