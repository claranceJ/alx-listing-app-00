// components/layout/Header.tsx

import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">ListingApp</div>

        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search for properties"
            className="px-4 py-2 rounded-lg border border-gray-300"
          />
        </div>

        {/* Sign In/Sign Up Buttons */}
        <div className="space-x-4">
          <button className="px-4 py-2 bg-white text-blue-600 rounded-lg">Sign In</button>
          <button className="px-4 py-2 bg-transparent border-2 border-white text-white rounded-lg">Sign Up</button>
        </div>
      </div>

      {/* Accommodation Types */}
      <div className="container mx-auto mt-4 flex space-x-6">
        <div className="cursor-pointer">Rooms</div>
        <div className="cursor-pointer">Mansions</div>
        <div className="cursor-pointer">Countryside</div>
        <div className="cursor-pointer">Villas</div>
      </div>
    </header>
  );
};

export default Header;
