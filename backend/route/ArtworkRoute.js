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

router.get("/", async(req, res) => {
    try{
        const artworks = await ArtWork.find();
        res.json(artworks);
    }catch(err){
        res.status(500).json({Error: err.message});
    }
});

module.exports = router;
