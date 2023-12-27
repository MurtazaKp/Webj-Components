import React from 'react';
import FeatureOne from './featureOne';
import FeatureTwo from './featureTwo';



export default {
  title: 'Featuresdaf',
};

const FeatureOneTemplate = (args) => <FeatureOne {...args} />;

export const FeatureOneStory = FeatureOneTemplate.bind({});
FeatureOneStory.args = {
    features: [
        {
          id: 1,
          icon: "chart",
          title: 'Predictive Insights',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam consectetur placerat pellentesque ut massa volutpat at. Diam pretium orci dui sagittis.',
        },
        {
          id: 2,
          icon: "chip",
          title: 'Filtered Data',
          description: 'Eleifend nullam consectetur placerat pellentesque ut massa volutpat at. Diam pretium orci dui sagittis. Norem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          id: 3,
          icon: "box",
          title: 'Fastest Speed',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam consectetur placerat pellentesque ut massa volutpat at. Diam pretium orci dui sagittis. Eleifend nullam consectetur placerat pelle tesque ut massa volutpat bonur los.',
        },
        {
          id: 4,
          icon: "cloud",
          title: 'Everything in Cloud',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam consectetur placerat pellentesque ut massa volutpat at. Diam pretium orci dui sagittis.',
        },
    
      ]
};


const FeatureTwoTemplate = (args) => <FeatureTwo {...args} />;

export const FeatureTwoStory = FeatureTwoTemplate.bind({});
FeatureTwoStory.args = {
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
};
