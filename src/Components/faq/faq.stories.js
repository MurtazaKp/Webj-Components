import React from 'react';
import FaqOne from './faqOne';
import FaqTwo from './faqTwo';




export default {
  title: 'Faq',
};

const FaqOneTemplate = (args) => <FaqOne {...args} />;

export const FaqOneStory = FaqOneTemplate.bind({});


const FaqTwoTemplate = (args) => <FaqTwo {...args} />;

export const FaqTwoStory = FaqTwoTemplate.bind({});