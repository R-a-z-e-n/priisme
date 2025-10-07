import React from 'react';
import type { Page } from '../App';
import { ProfileIcon, SearchIcon } from './IconComponents';

interface HeaderProps {
  setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ setCurrentPage }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-sm z-50 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold tracking-wider cursor-pointer bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text" onClick={() => setCurrentPage('home')}>Priisme</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search products, salons..." 
                className="w-40 md:w-64 pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            {/* Fix: Wrapped ProfileIcon in a button to make it clickable, as the component does not accept an onClick prop. */}
            <button type="button" onClick={() => setCurrentPage('profile')}>
              <ProfileIcon className="h-8 w-8 text-gray-600" />
            </button>
          </div>
        </div>
        <nav className="flex justify-center space-x-4 md:space-x-8 text-sm font-medium text-gray-500">
          <button onClick={() => setCurrentPage('streetwear')} className="hover:text-purple-600 transition-colors">Streetwear</button>
          <button onClick={() => setCurrentPage('trending')} className="hover:text-purple-600 transition-colors">Trending Now</button>
          <button onClick={() => setCurrentPage('top-salons')} className="hover:text-purple-600 transition-colors">Top Salons</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;