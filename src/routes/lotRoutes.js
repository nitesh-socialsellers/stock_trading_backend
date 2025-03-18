const express = require("express");
const { getLotsFIFO, getLotsLIFO } = require("../controllers/lotController");
const { authenticateToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/fifo/:stock_name", authenticateToken, getLotsFIFO);
router.get("/lifo/:stock_name", authenticateToken, getLotsLIFO);

module.exports = router;
