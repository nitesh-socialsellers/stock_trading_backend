const { Lot } = require("../models");

exports.processSaleFIFO = async (
  stock_name,
  sellQuantity,
  sellTradeId,
  transaction
) => {
  const lots = await Lot.findAll({
    where: { stock_name, lot_status: "OPEN" },
    order: [["createdAt", "ASC"]],
    transaction,
  });

  let remainingQuantity = sellQuantity;

  for (const lot of lots) {
    if (remainingQuantity <= 0) break;
    const available = lot.lot_quantity - lot.realized_quantity;
    const toSell = Math.min(available, remainingQuantity);

    lot.realized_quantity += toSell;
    lot.realized_trade_id = sellTradeId;
    lot.lot_status =
      lot.realized_quantity === lot.lot_quantity
        ? "FULLY REALIZED"
        : "PARTIALLY REALIZED";

    await lot.save({ transaction });
    remainingQuantity -= toSell;
  }

  if (remainingQuantity > 0)
    throw new Error("Not enough stocks to sell using FIFO!");
};



exports.processSaleFIFO = async (
  stock_name,
  sellQuantity,
  sellTradeId,
  transaction
) => {
  const lots = await Lot.findAll({
    where: { stock_name, lot_status: "OPEN" },
    order: [["createdAt", "ASC"]],
    transaction,
  });

  let remainingQuantity = sellQuantity;

  for (const lot of lots) {
    if (remainingQuantity <= 0) break;
    const available = lot.lot_quantity - lot.realized_quantity;
    const toSell = Math.min(available, remainingQuantity);

    lot.realized_quantity += toSell;
    lot.realized_trade_id = sellTradeId;
    lot.lot_status =
      lot.realized_quantity === lot.lot_quantity
        ? "FULLY REALIZED"
        : "PARTIALLY REALIZED";

    await lot.save({ transaction });
    remainingQuantity -= toSell;
  }

  if (remainingQuantity > 0)
    throw new Error("Not enough stocks to sell using FIFO!");
};


