import React, { useState } from 'react';
import { Share2 } from 'lucide-react';

const ProductGallery = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  const images = [
    "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-1.webp&w=640&q=100",
    "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-3.webp&w=128&q=20",
    "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-4.webp&w=128&q=20",
    "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-7.webp&w=128&q=20",
  ];

  return (
    <div className="relative">
      <div className="relative">
        <img 
          src={images[activeImage]} 
          alt="Junior Genius Pack" 
          className="w-full rounded-lg mb-3"
        />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex gap-2 overflow-x-auto py-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-16 h-16 rounded cursor-pointer object-cover ${
              activeImage === index ? 'border-2 border-purple-700' : 'border border-gray-200'
            }`}
            onClick={() => setActiveImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;