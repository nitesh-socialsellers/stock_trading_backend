const express = require("express");
const { createTrade, getTrades } = require("../controllers/tradeController");
const { authenticateToken } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authenticateToken, createTrade);
router.get("/", authenticateToken, getTrades);

module.exports = router;
