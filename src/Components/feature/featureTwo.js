import React from 'react';
import { featureFive, featureFour, featureOne, featureSix, featureThree, featureTwo } from './icon';

const FeatureIcons={
    featureOne:featureOne,
    featureTwo:featureTwo,
    featureThree:featureThree,
    featureFour:featureFour,
    featureFive:featureFive,
    featureSix:featureSix

}

const FeatureTwo = ({heading,features}) => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className='text-3xl font-bold leading-tight text-center mb-14 text-gray-900 sm:text-4xl xl:text-5xl font-pj'>{heading}</h2>
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
          {features.map((feature, index) => {
            const IconComponent=FeatureIcons[feature.icon]
         return (
            <div key={index}>
             <IconComponent/>
              <h3 className="mt-8 text-lg font-semibold text-black">{feature.title}</h3>
              <p className="mt-4 text-base text-gray-600">{feature.description}</p>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
};

const features = {
    heading:"Top Features",
features:[
  {
    title: "Secured Payments",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    icon: "featureOne",
  },
  {
    title: "Fast & Easy to Load",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    icon: "featureTwo",

  },
  {
    title: "Light & Dark Version",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    icon: "featureThree",
  },
  {
    title: "Secured Payments",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    icon: "featureFour",
  },
  {
    title: "Fast & Easy to Load",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    icon: "featureFive",

  },
  {
    title: "Light & Dark Version",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    icon: "featureSix",
  },
  // Add more features as needed
]
}
export default FeatureTwo;
