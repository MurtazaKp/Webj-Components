// HeaderFour.jsx

import React, { useState } from 'react';

const HeaderFour = ({data}) => {
  const [expanded, setExpanded] = useState(false);

  console.log(data,'sdasfsdgfghdgfjgh');

  return (
    <section className="py-4 bg-white sm:py-5">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <a href="#" title="" className="">
              <img className="w-auto h-8" src={data.logoSrc} alt="" />
            </a>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-4 lg:justify-end lg:ml-auto">
            {data.navigationLinks && data.navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.target || "_blank"}
                title={link.title}
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden sm:flex sm:ml-auto lg:ml-4">
            <a
              href={data.startTrialText.href}
              title=""
              className="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
              role="button"
            >
              {data.startTrialText.label}
            </a>
          </div>

          <div className="flex ml-4 lg:hidden">
            <button
              type="button"
              className="inline-flex items-center p-2.5 text-white duration-200 bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 transiton-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              <span style={{ display: !expanded ? 'block' : 'none' }} aria-hidden="true">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
              </span>

              <span style={{ display: expanded ? 'block' : 'none' }} aria-hidden="true">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default HeaderFour;
