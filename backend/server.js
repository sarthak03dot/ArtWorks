const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const ArtworkRoute = require("./route/ArtworkRoute");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/artworks", ArtworkRoute);

const PORT = process.env.PORT || 5000;

app.get("/he",(req, res)=>{
  res.send("Hello");
})

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(9000, () => {
      console.log(`Server is listening on port 9000`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

