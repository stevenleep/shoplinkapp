import React from 'react';
import { Link } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative z-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center">
              <Link className="w-6 h-6 text-white" />
            </div>
            <span className="text-3xl font-extralight text-gray-900 tracking-wide">
              Shop<span className="font-normal">Link</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-12">
            <a href="#vision" className="text-gray-500 hover:text-gray-900 transition-colors duration-500 font-light tracking-wide">
              愿景
            </a>
            <a href="#solution" className="text-gray-500 hover:text-gray-900 transition-colors duration-500 font-light tracking-wide">
              解决方案
            </a>
            <a href="#story" className="text-gray-500 hover:text-gray-900 transition-colors duration-500 font-light tracking-wide">
              我们的故事
            </a>
          </nav>
          
          <a href="#booking" className="hidden md:inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-full font-light tracking-wide transition-all duration-500 hover:bg-black hover:scale-105 hover:shadow-lg">
            <button  className="group relative overflow-hidden bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-full font-light tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10">开启旅程</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;