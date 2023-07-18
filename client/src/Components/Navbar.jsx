import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-blue-400 shadow-2xl">
      <div className="flex items-center">
        <h1 className="text-white text-5xl ml-8 py-4">Pive</h1>
      </div>
      <div className="relative flex items-center">
        <input
          type="text"
          className="w-96 pl-10 pr-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Search beers, wine, liquors..."
        />
        <MagnifyingGlassIcon className="absolute w-5 h-5 text-gray-400 left-3" />
        <button className="ml-4 px-4 py-2 rounded-lg bg-blue-800 text-white">
          Account
        </button>
      </div>
    </nav>
  );
};

export default Navbar;