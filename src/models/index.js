const sequelize = require("../config/database");
const { Trade, Lot } = require("../models/associations");
const User = require("./user");

const syncDatabase = async () => {
  await sequelize.sync({ alter: true });
  console.log("✅ Database synced successfully!");
};

module.exports = { Trade, Lot, User, syncDatabase };
