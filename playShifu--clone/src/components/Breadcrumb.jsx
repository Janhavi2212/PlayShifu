import React from 'react';

const Breadcrumb = () => {
  return (
    <div className="container mx-auto mt-4">
      <nav aria-label="breadcrumb">
        <ol className="flex space-x-2 text-sm">
          <li>
            <a href="#" className="text-gray-600 hover:text-purple-700">Home</a>
            <span className="mx-2 text-gray-400">/</span>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-purple-700">Shop</a>
            <span className="mx-2 text-gray-400">/</span>
          </li>
          <li className="text-gray-800" aria-current="page">
            Junior Genius Pack
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;