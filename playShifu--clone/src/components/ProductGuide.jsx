import React from 'react';
import { FileDown } from 'lucide-react';

const ProductGuide = () => {
  return (
    <div className="container mx-auto px-4 my-12">
      <div className="bg-purple-700 text-white rounded-lg p-8 relative overflow-hidden">
        <div className="max-w-md">
          <h3 className="text-2xl font-bold mb-2">Product Guide</h3>
          <p className="mb-4">Discover how to set up and play with your Junior Genius Pack</p>
          <button className="bg-yellow-400 text-purple-900 px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-yellow-300 transition-colors">
            <FileDown className="w-5 h-5" />
            Download Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductGuide;