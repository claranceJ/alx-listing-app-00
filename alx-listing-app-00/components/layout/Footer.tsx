// components/layout/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 ListingApp. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-white mx-2">Privacy Policy</a>
          <a href="#" className="text-white mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
