const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Lot = sequelize.define("Lot", {
  lot_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  trade_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  stock_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lot_quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  realized_quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  realized_trade_id: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  lot_status: {
    type: DataTypes.ENUM("OPEN", "PARTIALLY REALIZED", "FULLY REALIZED"),
    defaultValue: "OPEN",
  },
});

module.exports = Lot;
