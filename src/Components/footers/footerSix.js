import React from "react";
  
  const FooterSix = ({ logoSrc, description, socialMediaLinks, companyLinks, helpLinks, resourcesLinks, copyrightText }) => {
    return (
      <footer className="py-12 bg-gray-50 sm:pt-16 lg:pt-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-12 mt-12 sm:grid-cols-3 lg:grid-cols-4 sm:mt-16 lg:mt-20">
            <div className="col-span-1 sm:col-span-3 lg:col-span-1">
              <a href="#" title="" className="flex">
                <img className="w-auto h-8" src={logoSrc} alt="" />
              </a>
  
              <p className="mt-8 text-base font-normal text-gray-500">
                {description}
              </p>
  
              <ul className="flex items-center mt-8 space-x-3">
                {socialMediaLinks.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} title={item.icon} className="flex items-center justify-center text-black transition-all duration-200 rounded-full w-7 h-7 ">
                      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        {/* Include your social media icons here */}
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            <div className="lg:pl-12">
              <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
                Company
              </p>
  
              <ul className="mt-8 space-y-5">
                {companyLinks.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} title={item.title} className="text-base text-blue-600 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            <div>
              <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
                Help
              </p>
  
              <ul className="mt-8 space-y-5">
                {helpLinks.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} title={item.title} className="text-base text-blue-600 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            <div className="col-span-1 sm:col-span-1">
              <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
                Resources
              </p>
  
              <ul className="mt-8 space-y-5">
                {resourcesLinks.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} title={item.title} className="text-base text-blue-600 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          <div className="pt-12 mt-12 text-center border-t border-gray-200 sm:mt-16 lg:mt-20">
            <p className="text-sm font-normal text-gray-900">
              {copyrightText}
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default FooterSix;
  