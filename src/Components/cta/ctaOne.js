import React, { useState } from 'react';
import { ctaOneIcon, ctaOneIconTwo } from './icon';

const SocialIcons = {
 iconOne:ctaOneIcon,
 iconTwo:ctaOneIconTwo
 
};

const CtaOne = ({subtitle,title,joinButton,learnButton,card}) => {
  
  const featuresData = {
      subtitle:'Ready to get started?',
      title:'Create custom landing pages with Rareblocks that converts more visitors than any website. With lots of unique blocks, you can easily build a page.',
      joinButton:{
          label:"Join Now",
          href:"#",
          target:"_blank"
      },
      learnButton:{
        label:"Learn More",
        href:"#",
        target:"_blank"
    },
      card:[
      {
      icon:"iconOne",
      title: 'Store data on cloud',
      description: 'Create beautiful landing pages with Rareblocks that converts.',
      },
    {
      icon:'iconTwo',
      title: 'Connect dots smartly',
      description: 'Create beautiful landing pages with Rareblocks that converts.',
    },
  ]
  };



  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 text-center lg:text-left gap-y-10 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:pr-8 xl:pr-24">
            <h2 className="text-2xl font-bold text-gray-900 font-pj">{featuresData.subtitle}</h2>
            <p className="mt-5 text-base font-normal leading-7 text-gray-600 font-pj">
{featuresData.title}            </p>

            <div className="flex items-center justify-center mt-8 space-x-5 lg:justify-start">
              <div className="relative inline-flex group">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>

                <a
                  href={featuresData.joinButton.href}
                  title=""
                  className=" relative inline-flex items-center justify-center px-5 py-2 text-base font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600 rounded-xl"
                  role="button"
                  target={featuresData.joinButton.target}
                >
                  {featuresData.joinButton.label}
                </a>
              </div>

              <a
                href={featuresData.learnButton.href}
                title=""
                className=" inline-flex items-center justify-center px-5 py-2 text-base font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                role="button"
                target={featuresData.learnButton.target}
              >
                 {featuresData.learnButton.label}
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 lg:pl-8 xl:pl-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6">
              {featuresData.card.map((feature, index) => {
                const IconComponent= SocialIcons[feature.icon]
                return(
                <div key={index} className="bg-white border border-gray-200 shadow-md rounded-2xl">
                  <div className="px-8 py-6">
                    <IconComponent/>
                    <h3 className="mt-8 text-lg font-bold text-gray-900 lg:mt-12 font-pj">{feature.title}</h3>
                    <p className="mt-4 text-base font-normal leading-7 text-gray-700 font-pj">{feature.description}</p>
                  </div>
                </div>
)})}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaOne;
