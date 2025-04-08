import React from 'react';
import { Search, ShoppingCart, UserCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-yellow-400 py-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex md:hidden justify-start">
            <button className="btn" type="button">
              <Search className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex justify-start md:justify-center">
            <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" id="countryDropdown">
                <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India" className="w-8" />
              </button>
            </div>
          </div>
          
          <div className="text-center flex-grow">
            <a href="#" className="navbar-brand">
              <img 
                src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fbrand%2Fplayshifu-logo.webp&w=1080&q=75" 
                alt="PlayShifu Logo" 
                className="h-10 mx-auto"
              />
            </a>
          </div>
          
          <div className="flex justify-end items-center gap-2">
            <button className="btn relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="btn">
              <UserCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;