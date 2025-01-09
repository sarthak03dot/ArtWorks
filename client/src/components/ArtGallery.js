import React, { useState, useEffect } from "react";
import axios from "axios";

const ArtworkGallery = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      const response = await axios.get("http://localhost:9000/api/artworks");
      setArtworks(response.data);
    };
    fetchArtworks();
  }, []);

  const handleDelete = async(id) => {
    try {
      await axios.delete(`http://localhost:9000/api/artworks/${id}`);
      setArtworks((prevArtWork) =>
        prevArtWork.filter((artworks) => artworks._id !== id)
      );
    } catch (err) {
      console.error("Error deleting artwork:", err);
    }
  };

  return (
    <>
      {" "}
      <div>
        <h1>Gallery</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {artworks.map((artwork) => (
            <div key={artwork._id} style={{ margin: 10 }}>
              <h3>{artwork.title}</h3>
              <img
                src={artwork.image}
                alt={artwork.title}
                style={{ width: 200, border: "2px solid black" }}
              />
              <div>
                <button onClick={()=> handleDelete(artwork._id)}
                  style={{ width: "100px", backgroundColor: "#092902" }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <a
          href="http://localhost:3000"
          target="_parent"
          rel="noopener noreferrer"
        >
          <button>Make More Gallery</button>
        </a>
      </div>
    </>
  );
};

export default ArtworkGallery;
