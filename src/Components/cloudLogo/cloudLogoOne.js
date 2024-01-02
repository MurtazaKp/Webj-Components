import React from 'react';

const cloudLogos = {
title:"Trusted by world class creators",
logos:[
  'https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-1.png',
  'https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-2.png',
  'https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-3.png',
  'https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-4.png',
]
}

const LogoCloudOne = ({title,logos}) => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-medium text-gray-900">{title}</h2>
        </div>

        <div className="grid items-center grid-cols-2 gap-10 mt-12 md:grid-cols-4 sm:gap-y-16">
          {logos.map((logo, index) => (
            <div key={index}>
              <img className="object-contain w-auto mx-auto h-14" src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloudOne;
