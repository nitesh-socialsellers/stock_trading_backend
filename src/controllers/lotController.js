const { Lot } = require("../models");

// 📌 Get FIFO Lots for a Stock
exports.getLotsFIFO = async (req, res) => {
  try {
    const { stock_name } = req.params;
    const lots = await Lot.findAll({
      where: { stock_name },
      order: [["createdAt", "ASC"]], // FIFO (oldest first)
    });
    res.json(lots);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📌 Get LIFO Lots for a Stock
exports.getLotsLIFO = async (req, res) => {
  try {
    const { stock_name } = req.params;
    const lots = await Lot.findAll({
      where: { stock_name },
      order: [["createdAt", "DESC"]], // LIFO (newest first)
    });
    res.json(lots);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

