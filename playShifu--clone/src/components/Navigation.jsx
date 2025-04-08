import React from 'react';

const Navigation = () => {
  return (
    <nav className="border-b border-gray-200 py-3">
      <div className="container mx-auto">
        <div className="grid grid-cols-6 text-center gap-4">
          <div className="relative group">
            <button className="text-sm font-medium hover:text-purple-700">
              Shop By Category
            </button>
          </div>
          <div className="relative group">
            <button className="text-sm font-medium hover:text-purple-700">
              Shop By Age
            </button>
          </div>
          <div className="relative">
            <a href="#" className="text-sm font-medium hover:text-purple-700 relative">
              Super Saver Deals
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-2 hidden md:inline">
                25% Off
              </span>
            </a>
          </div>
          <div className="relative">
            <a href="#" className="text-sm font-medium hover:text-purple-700 relative">
              Birthday Gifts
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-2 hidden md:inline">
                25% Off
              </span>
            </a>
          </div>
          <div>
            <a href="#" className="text-sm font-medium hover:text-purple-700">Shop All</a>
          </div>
          <div className="relative group">
            <button className="text-sm font-medium hover:text-purple-700">
              More
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;