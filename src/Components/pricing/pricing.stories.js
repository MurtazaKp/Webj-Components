import React from 'react';
import PricingOne from './pricingOne';
import PricingTwo from './pricingTwo';


export default {
  title: 'Pricing',
};

const PricingOneTemplate = (args) => <PricingOne {...args} />;

export const PricingOneStory = PricingOneTemplate.bind({});
PricingOneStory.args = {}



const PricingTwoTemplate = (args) => <PricingTwo {...args} />;

export const PricingTwoStory = PricingTwoTemplate.bind({});
PricingTwoStory.args = {}