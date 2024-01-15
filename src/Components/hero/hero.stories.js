import React from 'react';

import HeroOne from './heroOne';
import HeroTwo from './heroTwo';
import HeroThree from './heroThree';

export default {
  title: 'Hero',
};

const Template = (args) => <HeroOne {...args} />;

export const HeroOneStory = Template.bind({});
HeroOneStory.args = {
  heading: "Smart email campaign builder, made for Developers",
  subheading: "Turn your visitors into profitable business",
  demoButton: { title: 'Watch free demo', url: '#' },
  ctaButton: { title: 'Watch free demo', url: '#' },
  trialText: '60 Days free trial · No credit card required',
  illustrationSrc: {
      src:'https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png',
      alt:"bannerImage"
  }
};


const HeroTwoTemplate = (args) => <HeroTwo {...args} />;

export const HeroTwoStory = HeroTwoTemplate.bind({});
HeroTwoStory.args = {
    title: 'A social media for learners',
  subtitle: 'Connect & learn from the experts',
  description: 'Grow your career fast with the right mentor.',
  joinButton: { title: 'Join for free', url: '#' },
  imageSrc: 'https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png',

};

const HeroThreeTemplate = (args) => <HeroThree {...args} />;

export const HeroThreeStory = HeroThreeTemplate.bind({});
HeroThreeStory.args = {
    bannerImage:{
        src:"https://d33wubrfki0l68.cloudfront.net/d6f1462500f7670e0db6b76b35054a081679a5a0/0ce15/images/hero/5.1/illustration.png",
        alt:"banner Image"
    },
    title: 'A special credit card made for Developers.',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.',
    
    stats: [
      { label: 'Cards Delivered', value: '2943' },
      { label: 'Transaction Completed', value: '$1M+' },
    ],

};
