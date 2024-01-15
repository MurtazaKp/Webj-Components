import React from 'react';
import PricingOne from './pricingOne';
import PricingTwo from './pricingTwo';


export default {
  title: 'Pricing',
};

const PricingOneTemplate = (args) => <PricingOne {...args} />;

export const PricingOneStory = PricingOneTemplate.bind({});
PricingOneStory.args = {
  packageHeading:"Make the wise decision for your business",
    packageDescription:"Choose from our affordable 3 packages",
    packages:[
    {
      name: 'Basic',
      price: '$99',
      description: 'Best for small business owners, startups who need a landing page for their business.',
    },
    {
      name: 'Premium',
      price: '$199',
      description: 'Best for medium business owners, startups who need a landing page for their business. Premium Support and Future Updates included.',
    },
    {
      name: 'Enterprise',
      price: '$399',
      description: 'Best for large companies, business owners who need a landing page for their business. Premium Support and Future Updates included.',
    },
  ]
}



const PricingTwoTemplate = (args) => <PricingTwo {...args} />;

export const PricingTwoStory = PricingTwoTemplate.bind({});
PricingTwoStory.args = {
     planHeading:"Plans that scale with business",
    planDescription:" Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS",
    plans: [
     {
      title: 'Basic',
      shortDesc:"Lorem ipsum dolor sit amet, consec tetur adipis elit",
      icon: '👋',
      price: 0,
      savings: 0,
      planButton:{
        buttonText:"Get 14 Days free trial",
        href:"#",
        target:"_blank"

      },
      features: [
        'Full Access to Landingfolio',
        '5 GB Free Storage',
        'Unlimited Visitors',
        '1 Agents',
        'Live Chat Support',
      ],
    },
     {
      title: 'Pro',
      shortDesc:"Lorem ipsum dolor sit amet, consec tetur adipis elit",
      icon: '💪',
      price: 49,
      savings: 20,
      planButton:{
        buttonText:"Get 14 Days free trial",
        href:"#",
        target:"_blank"

      },
      features: [
        'Full Access to Landingfolio',
        '20 GB Free Storage',
        'Unlimited Visitors',
        '5 Agents',
        'Live Chat Support',
      ],
    }, {
      title: 'Exclusive',
      shortDesc:"Lorem ipsum dolor sit amet, consec tetur adipis elit",
      icon: '🚀',
      price: 99,
      savings: 0,
      planButton:{
        buttonText:"Get 14 Days free trial",
        href:"#",
        target:"_blank"

      },
      features: [
        'Full Access to Landingfolio',
        '100 GB Free Storage',
        'Unlimited Visitors',
        '10 Agents',
        'Live Chat Support',
      ],
    }
  
]
}