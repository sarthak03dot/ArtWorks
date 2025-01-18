import React, { useRef } from "react";
import axios from "axios";
// const apiUrl = 'http://localhost:9000';
const apiUrl ="https://artworks-1.onrender.com"

const ArtworkGenerator = () => {
  const canvasRef = useRef(null);

  const generateArt = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < 100; i++) {
      ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
      ctx.fillRect(Math.random() * width, Math.random() * height, 25, 55);
    }
  };

  const saveArt = async () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL();
    const title = prompt("Enter a title for your artwork:");
    if (title) {
      await axios.post(`${apiUrl}/api/artworks`, {
        title,
        image: dataURL,
      });
      alert("Artwork saved!");
    }
  };

  return (
    <>
      <div className="container">
        <h2>It's Too Funny Try Once!</h2>
        <canvas
          ref={canvasRef}
          width={500}
          height={500}
          style={{ border: "4px solid black" }}
        ></canvas>
        <button onClick={generateArt}>Generate Art</button>
        <button onClick={saveArt}>Save Art</button>
        <a
          href="http://localhost:3000/gallery"
          target="_self"
          rel="noopener noreferrer"
        >
          <button>See Gallery</button>
        </a>
      </div>
    </>
  );
};

export default ArtworkGenerator;
