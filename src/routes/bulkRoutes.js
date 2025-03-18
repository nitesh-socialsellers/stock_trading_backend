const express = require("express");
const multer = require("multer");
const { bulkUploadTrades } = require("../controllers/bulkUploadController");

const upload = multer({ dest: "uploads/" });
const router = express.Router();

router.post("/upload", upload.single("file"), bulkUploadTrades);

module.exports = router;

