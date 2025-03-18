const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateToken = (req, res, next) => {
  const authHeader = req.header("Authorization"); // Get token from headers

  if (!authHeader) {
    console.error("❌ No Authorization header found.");
    return res.status(401).json({ error: "Access Denied! No token provided." });
  }

  const token = authHeader.split(" ")[1]; // Extract token from "Bearer <TOKEN>"

  if (!token) {
    console.error("❌ Token is missing in Authorization header.");
    return res.status(401).json({ error: "Token missing in request!" });
  }

  try {
    console.log("✅ Received Token:", token); // Debugging

    const verified = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    req.user = verified; // Store user data in request object
    console.log("✅ Token verified successfully:", verified);
    next(); // Continue to next middleware
  } catch (err) {
    console.error("❌ Invalid or expired token:", err);
    res.status(403).json({ error: "Invalid or expired token!" });
  }
};

module.exports = { authenticateToken };
