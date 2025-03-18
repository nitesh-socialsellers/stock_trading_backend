const sequelize = require("../config/database");

// const { Trade } = require("../models");
const { processSaleFIFO, processSaleLIFO } = require("../services/lotService");

const { Trade, Lot } = require("../models/associations"); // Import models

// exports.createTrade = async (req, res) => {
//   const transaction = await sequelize.transaction(); // ✅ Ensure sequelize is defined

//   try {
//     const {
//       stock_name,
//       quantity,
//       broker_name,
//       price,
//       method = "FIFO",
//     } = req.body;
//     const amount = price * quantity;

//     // ✅ Insert into `Trade` table
//     const trade = await Trade.create(
//       {
//         stock_name,
//         quantity,
//         broker_name,
//         price,
//         amount,
//       },
//       { transaction }
//     );

//     // ✅ Insert into `Lots` table for buy trades
//     if (quantity > 0) {
//       await Lot.create(
//         {
//           trade_id: trade.trade_id,
//           stock_name,
//           lot_quantity: quantity,
//           realized_quantity: 0,
//           lot_status: "OPEN",
//         },
//         { transaction }
//       );
//     }

//     // ✅ Handle sell trades (FIFO/LIFO)
//     if (quantity < 0) {
//       const sellQuantity = Math.abs(quantity);
//       if (method === "FIFO") {
//         await processSaleFIFO(stock_name, sellQuantity, trade.trade_id);
//       } else if (method === "LIFO") {
//         await processSaleLIFO(stock_name, sellQuantity, trade.trade_id);
//       } else {
//         throw new Error("Invalid method! Use 'FIFO' or 'LIFO'.");
//       }
//     }

//     await transaction.commit(); // ✅ Commit the transaction
//     res.status(201).json(trade);
//   } catch (err) {
//     await transaction.rollback(); // ✅ Rollback in case of error
//     res.status(400).json({ error: err.message });
//   }
// };

exports.createTrade = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const {
      stock_name,
      quantity,
      broker_name,
      price,
      method = "FIFO",
    } = req.body;
    const amount = price * quantity;

    // Insert trade
    const trade = await Trade.create(
      {
        stock_name,
        quantity,
        broker_name,
        price,
        amount,
      },
      { transaction }
    );

    // If Buy, create a new lot
    if (quantity > 0) {
      await Lot.create(
        {
          trade_id: trade.trade_id,
          stock_name,
          lot_quantity: quantity,
          realized_quantity: 0,
          lot_status: "OPEN",
        },
        { transaction }
      );
    }

    // If Sell, process FIFO/LIFO
    if (quantity < 0) {
      const sellQuantity = Math.abs(quantity);
      if (method === "FIFO") {
        await processSaleFIFO(
          stock_name,
          sellQuantity,
          trade.trade_id,
          transaction
        );
      } else if (method === "LIFO") {
        await processSaleLIFO(
          stock_name,
          sellQuantity,
          trade.trade_id,
          transaction
        );
      } else {
        throw new Error("Invalid method! Use 'FIFO' or 'LIFO'.");
      }
    }

    await transaction.commit();
    res.status(201).json(trade);
  } catch (err) {
    await transaction.rollback();
    res.status(400).json({ error: err.message });
  }
};

exports.getTrades = async (req, res) => {
  try {
    console.log("✅ Request received in getTrades API, user:", req.user); // Debug

    const trades = await Trade.findAll();
    res.json(trades);
  } catch (err) {
    console.error("❌ Error fetching trades:", err);
    res.status(500).json({ error: err.message });
  }
};

