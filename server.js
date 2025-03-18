const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { syncDatabase } = require("./src/models");
const { Trade, Lot } = require("./src/models/associations");


const tradeRoutes = require("./src/routes/tradeRoutes");
const lotRoutes = require("./src/routes/lotRoutes");
const bulkRoutes = require("./src/routes/bulkRoutes");
const authRoutes = require("./src/routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/trades", tradeRoutes);
app.use("/api/lots", lotRoutes);
app.use("/api/bulk", bulkRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Stock Trading Web Portal API is Running!");
});

const PORT = process.env.PORT || 5000;
syncDatabase().then(() => {
  app.listen(PORT, () =>
    console.log(`🚀 Server running on http://localhost:${PORT}`)
  );
});
