import React from 'react';

const BoxContents = () => {
  const items = [
    {
      image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fcount-spike.webp&w=1080&q=75",
      text: "Count Spike"
    },
    {
      image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fnumerals-and-arithmetic-operators.webp&w=1080&q=75",
      text: "2 Sets Of 0-9 Numerals"
    },
    {
      image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fgamepad.webp&w=1080&q=75",
      text: "Gamepad"
    },
    {
      image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fquick-start-guide.webp&w=1080&q=75",
      text: "Quick Start Guide"
    },
    {
      image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fout-of-the-box%2F48-letter-tiles.webp&w=1080&q=75",
      text: "48 Letter Tiles"
    },
    {
      image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fout-of-the-box%2Fletters-trunk.webp&w=1080&q=75",
      text: "Letters Trunk"
    }
  ];

  return (
    <div className="container mx-auto px-4 my-12">
      <h2 className="text-3xl font-bold text-center mb-8">In The Box</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <img src={item.image} alt={item.text} className="w-full h-32 object-contain mb-4" />
            <p className="text-center font-medium text-gray-800">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxContents;