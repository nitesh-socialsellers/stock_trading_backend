const sequelize = require("../config/database");
const Trade = require("./trade");
const Lot = require("./lot");

// ✅ Define Associations
Trade.hasMany(Lot, { foreignKey: "trade_id", as: "lots", onDelete: "CASCADE" });
Lot.belongsTo(Trade, { foreignKey: "trade_id", as: "trade" });

Trade.hasMany(Lot, { foreignKey: "realized_trade_id", as: "realized_lots" });
Lot.belongsTo(Trade, { foreignKey: "realized_trade_id", as: "realized_trade" });

module.exports = { Trade, Lot };
