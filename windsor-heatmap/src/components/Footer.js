import React from 'react';

//footer that grabs current year
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center p-4 bg-gray-800 text-white fixed bottom-0 left-0 w-full">
      © {currentYear} SR Dashboard
    </footer>
  );
};

export default Footer;
