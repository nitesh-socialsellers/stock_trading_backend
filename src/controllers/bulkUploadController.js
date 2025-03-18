const csv = require("csv-parser");
const fs = require("fs");
const { Trade } = require("../models");

exports.bulkUploadTrades = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Please upload a file" });
  }

  const trades = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (row) => {
      trades.push({
        stock_name: row.stock_name,
        quantity: parseInt(row.quantity),
        broker_name: row.broker_name,
        price: parseFloat(row.price),
        amount: parseFloat(row.quantity) * parseFloat(row.price),
      });
    })
    .on("end", async () => {
      await Trade.bulkCreate(trades);
      res.status(201).json({ message: "Trades uploaded successfully!" });
    });
};
