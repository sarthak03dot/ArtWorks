const express = require("express");
const router = express.Router();
const ArtWork = require("../models/Artwork");

// create arework
router.post("/", async (req, res) => {
  try {
    const artwork = new ArtWork(req.body);
    await artwork.save();
    res.status(201).json(artwork);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// get all art work

router.get("/", async (req, res) => {
  try {
    const artworks = await ArtWork.find();
    res.json(artworks);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

// delete art
router.delete("/:id", async (req, res) => {
  try {
    const ArtId = req.params.id;
    await ArtWork.findByIdAndDelete(ArtId);
    res.status(200).json({ Message: "Artwork Deleted Successfully!." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: error.message });
  }
});

module.exports = router;
