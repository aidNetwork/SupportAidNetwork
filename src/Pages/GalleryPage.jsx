import React, { useState } from "react";
import img1 from "../assets/education.jpg";
import img2 from "../assets/foundation.jpg";
import img3 from "../assets/water.jpg";
import img4 from "../assets/benefit.jpg";
import img5 from "../assets/box.jpg";
import img6 from "../assets/box2.jpg";
import img7 from "../assets/box3.jpg";
import img8 from "../assets/box4.jpg";

// Simulated "has background" flag
const images = [
  { id: 1, src: img1, hasBackground: true },
  { id: 2, src: img2, hasBackground: false},
  { id: 3, src: img3, hasBackground: false },
  { id: 4, src: img4, hasBackground: false},
  { id: 5, src: img5, hasBackground: false},
  { id: 6, src: img6, hasBackground: false},
  { id: 7, src: img7, hasBackground: false},
  { id: 8, src: img8, hasBackground: false},

];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img) => (
          <div
            key={img.id}
            onClick={() => setSelectedImage(img.src)}
            className={`relative cursor-pointer rounded overflow-hidden ${
              !img.hasBackground ? "bg-gray-200" : ""
            }`}
          >
            <img
              src={img.src}
              alt={`Image ${img.id}`}
              className="object-cover w-full h-full max-h-64 transition-transform duration-200 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded shadow-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
