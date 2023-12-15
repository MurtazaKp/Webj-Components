// Header.js
import React, { useState } from 'react';

const HeaderThree = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="py-4 bg-white sm:py-5 ">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <nav className="flex items-center justify-between">
          <div className="hidden lg:flex lg:items-center lg:justify-start lg:space-x-10">
            {data.navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                title={item.title}
                className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className="flex shrink-0">
            <a href="#" title="" className="flex">
              <img className="w-auto h-8" src={data.logoSrc} alt="" />
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-900"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              <span style={{ display: !expanded ? 'block' : 'none' }} aria-hidden="true">
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </span>

              <span style={{ display: expanded ? 'block' : 'none' }} aria-hidden="true">
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            </button>
          </div>

          <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-10">
            {data.secondaryNavItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                title={item.title}
                className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <nav style={{ display: expanded ? 'block' : 'none' }}>
          <div className="px-1 pt-8 pb-4">
            <div className="grid gap-y-6">
              {data.additionalNavItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  title={item.title}
                  className="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderThree;
