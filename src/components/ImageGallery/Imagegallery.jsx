import React , { useState } from 'react'

export const Imagegallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

    const images=[
        "https://in.pinterest.com/pin/6473993211461403/",
        "https://www.pexels.com/photo/red-dahlia-flower-60597/",
        "https://www.pexels.com/photo/multicolored-abstract-painting-1266808/",
        "https://www.pexels.com/photo/red-and-blue-hot-air-balloon-floating-on-air-on-body-of-water-during-night-time-36487/",
        "https://www.pexels.com/photo/red-and-blue-hot-air-balloon-floating-on-air-on-body-of-water-during-night-time-36487/"
    ]
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Image Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`img-${idx}`}
            className="w-full rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full rounded-xl"
            />
            <button
              className="absolute top-2 right-2 text-white bg-white/20 hover:bg-white/40 rounded-full p-2 text-lg"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Imagegallery;