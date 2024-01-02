import React from 'react';

const cloudData = {
title:" Join over 200+ tech companies already using Landingfolio",
logos:[
  {
    heading: 'Waverio',
    imgUrl: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/waverio.svg',
  },
  {
    heading: 'Logo Ipsum',
    imgUrl: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/logoipsum.svg',
  },
  {
    heading: 'Alterbone',
    imgUrl: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/alterbone.svg',
  },
  {
    heading: 'Carbonia',
    imgUrl: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/carbonia.svg',
  },
  {
    heading: 'Tinygone',
    imgUrl: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/tinygone.svg',
  },
  {
    heading: 'Preso',
    imgUrl: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/preso.svg',
  },
  {
    heading: 'Ridoria',
    imgUrl: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/ridoria.svg',
  },
  {
    heading: 'Incanto',
    imgUrl: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/incanto.svg',
  },
]
}

const LogoCloudTwo = ({title,logos}) => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center bg-gray-900 rounded-2xl">
          <div className="px-6 py-12 md:py-16 lg:p-20">
            <h2 className="text-sm font-normal tracking-widest text-gray-300 uppercase">
                {title}
            </h2>

            <div
              className="flex flex-wrap items-center justify-center max-w-5xl gap-8 mx-auto mt-12 sm:mt-16 sm:gap-y-12 md:gap-16">
              {logos.map((item, index) => (
                <img
                  key={index}
                  className="object-contain w-32 max-w-full sm:h-8 md:h-10 sm:w-40"
                  src={item.imgUrl}
                  alt={`${item.heading} Logo`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloudTwo;
