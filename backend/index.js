const express = require("express");
const mongoose = require("mongoose");
const customerRoutes = require("./routes/customerRoutes/customerRoutes");

// Load environment variables (e.g., for MongoDB URI)
require("dotenv").config();

const app = express();

app.use(express.json());

const db = process.env.MONGO_URI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/customers", customerRoutes);

app.get("/", (req, res) => {
  res.send("Server is running and connected successfully!");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(
    `Application is running on port ${PORT} or http://localhost:${PORT}`
  );
});
