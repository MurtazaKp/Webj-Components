// Header.js

import React, { useState } from 'react';

const HeaderFive = ({ logoSrc, navigationLinks, ctaText ,coverImage}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Large screens (lg+) */}
      <div className="relative bg-black">
        <div className="absolute inset-0">
          <img className="object-cover w-full h-full" src={coverImage || "https://cdn.rareblocks.xyz/collection/celebration/images/headers/3/coworking-space.jpg"} alt="" />
        </div>

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
                <img className="w-auto h-8 lg:h-10" src={logoSrc} alt="" />
              </a>
            </div>
            <div className="flex md:hidden">
            <button type="button" className="text-white " onClick={() => setMenuOpen(!menuOpen)} aria-menuOpen={menuOpen}>
              <span  aria-hidden="true">
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </span>
              

            
            </button>
            </div>

            <div className={`hidden lg:flex lg:items-center lg:space-x-10 ${menuOpen ? 'hidden' : ''}`}>
              {navigationLinks.map((link, index) => (
                <a key={index} href={link.url} title="" className="text-base font-medium text-white">
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="#"
              title=""
              className="items-center justify-center hidden px-6 py-3 text-base font-semibold text-black transition-all duration-200 bg-yellow-400 border border-transparent rounded-full lg:inline-flex hover:bg-yellow-500 focus:bg-yellow-500"
              role="button"
            >
              {ctaText}
            </a>
          </nav>
        </div>
      </div>

      {/* Extra small to large screens (xs to lg) */}
      <nav className={`fixed top-0 left-0 flex flex-col w-full p-10 min-h-screen bg-black sm:w-full lg:hidden transition-all duration-300 transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
  
  <button type="button" onClick={() => setMenuOpen(!menuOpen)} class="inline-flex p-2 absolute top-10 right-10 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <div className="flex flex-col flex-grow h-full">
          <nav className="flex flex-col flex-1 mt-10 space-y-2">
            {navigationLinks.map((link, index) => (
              <a key={index} href={link.url} title="" className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-start">
            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center w-auto px-6 py-3 mt-auto text-base font-semibold text-black transition-all duration-200 bg-yellow-400 border border-transparent rounded-full hover:bg-yellow-500 focus:bg-yellow-500"
              role="button"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderFive;
