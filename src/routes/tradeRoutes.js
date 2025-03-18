const express = require("express");
const { createTrade, getTrades } = require("../controllers/tradeController");
const { authenticateToken } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authenticateToken, createTrade);
router.get("/a", authenticateToken, getTrades);

module.exports = router;
