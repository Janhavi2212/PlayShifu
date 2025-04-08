import React from 'react';
import { Star, StarHalf } from 'lucide-react';

const ProductInfo = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Junior Genius Pack</h1>
      
      <p className="mb-3">
        <a href="#" className="text-blue-600">Plugo Count</a> &amp;
        <a href="#" className="text-blue-600"> Plugo Letters</a> &amp;
        <a href="#" className="text-blue-600"> Plugo Link</a>
      </p>

      <div className="flex text-yellow-400 mb-3">
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <StarHalf className="w-5 h-5 fill-current" />
      </div>

      <div className="flex gap-2 mb-4 flex-wrap">
        <span className="px-3 py-1 border border-purple-600 text-purple-600 rounded-md text-sm">
          High Educational Value
        </span>
        <span className="px-3 py-1 bg-red-500 text-white rounded-md text-sm">
          Flat 25% off
        </span>
        <span className="px-3 py-1 border border-red-500 text-red-500 rounded-md text-sm">
          Super Saver Deals
        </span>
      </div>

      <div className="mb-4">
        <span className="text-3xl font-bold">₹3749</span>
        <span className="ml-2 text-xl text-gray-500 line-through">₹4999</span>
      </div>

      <ul className="space-y-3 mb-4">
        <li className="flex items-start gap-2">
          <span className="text-[8px] mt-2">●</span>
          <span>
            <strong>Plugo Count</strong> - An interactive math learning kit to master essential math skills, including addition, subtraction, multiplication, and division.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-[8px] mt-2">●</span>
          <span>
            <strong>Plugo Letters</strong> - A letter toy that encourages children to spell using the toy to solve word puzzles on the screen.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-[8px] mt-2">●</span>
          <span>
            <strong>Plugo Link</strong> - Build structures using magnetic tiles for imaginative play.
          </span>
        </li>
      </ul>

      <button className="w-full bg-purple-700 text-white py-3 rounded-md font-bold hover:bg-purple-800 transition-colors">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductInfo;