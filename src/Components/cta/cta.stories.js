import React from "react";
import CtaOne from "./ctaOne";
import CtaTwo from "./ctaTwo";

export default {
    title: 'Cta',
  };


  const CtaOneTemplate = (args) => <CtaOne {...args} />;

export const CtaOneStory = CtaOneTemplate.bind({});
CtaOneStory.args = {
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


const CtaTwoTemplate = (args) => <CtaTwo {...args} />;

export const CtaTwoStory = CtaTwoTemplate.bind({});
CtaTwoStory.args = {
  quote: '“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.”',
  author: 'Jenny Wilson',
  position: 'Project Manager at Microsoft',
  buttonText: {label:'Create your first website',href:'/',target:'#'},
  ctaImage:{
      src:"https://cdn.rareblocks.xyz/collection/celebration/images/cta/11/smiling-man.png",
      alt:"cta image"
  },
};