import React, { useState } from 'react';

const HeroThree = ({title,subtitle,buttonText,transactionCompleted,stats,bannerImage}) => {
  const componentData = {
    title: 'A special credit card made for Developers.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.',
    buttonText: 'Get Free Card',
    cardsDelivered: '2943',
    transactionCompleted: '$1M+',
    stats: [
      { label: 'Cards Delivered', value: '2943' },
      { label: 'Transaction Completed', value: '$1M+' },
    ],
  };

  return (
    <div className="bg-gray-50">
      <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            <div>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">{componentData.title}</h1>
                <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">{componentData.subtitle}</p>

              
              </div>

              <div className="flex items-center flex-col sm:flex-row gap-3 justify-center mt-10  lg:justify-start sm:space-x-8">
                {componentData.stats.map((stat, index) => (
                  <div key={index} className="flex justify-center items-center w-full">
                    <p className="text-3xl font-medium text-gray-900 w-6/12 sm:text-4xl font-pj">{stat.value}</p>
                    <p className="ml-3 text-sm text-gray-900 font-pj w-6/12">{stat.label}<br /></p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img className="w-full" src={bannerImage.src} alt={bannerImage.alt} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroThree;
