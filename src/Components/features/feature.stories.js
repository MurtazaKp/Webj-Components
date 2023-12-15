import React from 'react';
import FeatureOne from './featureOne';
import FeatureTwo from './featureTwo';


export default {
  title: 'Features',
};

const FeatureOneTemplate = (args) => <FeatureOne {...args} />;

export const FeatureOneStory = FeatureOneTemplate.bind({});
FeatureOneStory.args = {
    title: 'Numbers tell our story',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.',
    stats: [
      {
        value: '6+',
        label: 'Years in business',
        description: 'Creating the successful path',
      },
      {
        value: '4821',
        label: 'Projects delivered',
        description: 'In the last 6 years',
      },
      {
        value: '37+',
        label: 'Team members',
        description: 'Working for your success',
      },
    ],
};


const FeatureTwoTemplate = (args) => <FeatureTwo {...args} />;

export const FeatureTwoStory = FeatureTwoTemplate.bind({});
FeatureTwoStory.args = {
    title: 'The only platform that creates unique & rare UI Kits with TailwindCSS',
    stats: [
      {
        value: '110+',
        label: 'Blocks',
      },
      {
        value: '29',
        label: 'Templates',
      },
      {
        value: '3400+',
        label: 'Customers',
      },
      {
        value: '2844',
        label: 'Support Tickets',
      },
    ],
};