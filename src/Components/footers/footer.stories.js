// FooterOne.stories.js
import React from 'react';
import FooterOne from './footerOne';// Make sure to adjust the import path
import FooterTwo from './footerTwo';
import FooterThree from './footerThree';
import FooterFour from './footerFour';
import FooterFive from './footerFive';
import FooterSix from './footerSix';

export default {
  title: 'Footer',
  
};

const HeaderOneTemplate = (args) => <FooterOne {...args} />;

export const FooterOneStory = HeaderOneTemplate.bind({});
FooterOneStory.args = {
  
  textLogo: 'Your Text Logo',
  paragraph: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  logoSrc: 'https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg',
  socialLinks: [
    { icon:"twitter", url: 'https://twitter.com/' }, // Replace with actual TwitterIcon component
    { icon: "facebook", url: 'https://www.facebook.com/' }, // Replace with actual FacebookIcon component
    { icon: "instagram", url: 'https://www.instagram.com/' }, // Replace with actual InstagramIcon component
    { icon: "linkedin", url: 'https://www.linkedin.com/' }, // Replace with actual LinkedInIcon component
  ],
  companyLinks: {
  heading:"company",
  links: [
    { title: 'About', url: '#' },
    { title: 'Features', url: '#' },
    { title: 'Works', url: '#' },
    { title: 'Career', url: '#' },
  ],
},
  helpLinks: {
heading:"HELP",
  link:[
    { title: 'Customer Support', url: '#' },
    { title: 'Delivery Details', url: '#' },
    { title: 'Terms & Conditions', url: '#' },
    { title: 'Privacy Policy', url: '#' },
  ],
},
  newsletter: {
    label: 'Subscribe to newsletter',
    inputTitle:"Email",
    placeholder: 'Enter your email',
    buttonText: 'Subscribe',
  },
}

const FooterTwoTemplate = (args) => <FooterTwo {...args} />;

export const FooterTwoStory = FooterTwoTemplate.bind({});
FooterTwoStory.args = {
  companyLinks: {
    heading: 'Company',
    links: [
      { title: 'About', url: '#' },
      { title: 'Features', url: '#' },
      { title: 'Works', url: '#' },
      { title: 'Career', url: '#' },
    ],
  },
  helpLinks: {
    heading: 'Help',
    link: [
      { title: 'Customer Support', url: '#' },
      { title: 'Delivery Details', url: '#' },
      { title: 'Terms & Conditions', url: '#' },
      { title: 'Privacy Policy', url: '#' },
    ],
  },
  resourcesLinks: {
    heading: 'Resources',
    links: [
      { title: 'Free eBooks', url: '#' },
      { title: 'Development Tutorial', url: '#' },
      { title: 'How to - Blog', url: '#' },
      { title: 'Youtube Playlist', url: '#' },
    ],
  },
  newsletter: {
    label: 'Subscribe to newsletter',
    inputTitle: 'Email',
    placeholder: 'Enter your email',
    buttonText: 'Subscribe',
  },
  contactDetails: {
    callUs: {
      heading: 'Call us',
      value: '(239) 555-0108',
    },
    emailUs: {
      heading: 'Email us',
      value: 'info@rareblocks.xyz',
    },
  },
  socialLinks: [
    { icon: 'twitter', url: 'https://twitter.com/' },
    { icon: 'facebook', url: 'https://www.facebook.com/' },
    { icon: 'instagram', url: 'https://www.instagram.com/' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/' },
  ],
};


const FooterThreeTemplate = (args) => <FooterThree {...args} />;

export const FooterThreeStory = FooterThreeTemplate.bind({});
FooterThreeStory.args = {
  logo: {
    src: 'https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg',
    alt: 'Logo',
  },
  socialMediaLinks: [
    { icon: 'facebook', url: 'https://www.facebook.com/' },
    { icon: 'twitter', url: 'https://twitter.com/' },
    { icon: 'instagram', url: 'https://www.instagram.com/' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/' },
  ],
  navigationLinks: [
    { title: 'About', url: '#' },
    { title: 'Features', url: '#' },
    { title: 'Works', url: '#' },
    { title: 'Support', url: '#' },
    { title: 'Help', url: '#' },
  ],
  copyrightText: '© Copyright 2021, All Rights Reserved',
};


const FooterFourTemplate = (args) => <FooterFour {...args} />;

export const FooterFourStory = FooterFourTemplate.bind({});
FooterFourStory.args = {
  heading:" Build beautiful landing pages fast using Rareblocks Kit.",
  logo: {
    src: 'https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg',
    alt: 'Logo',
  },
  socialMediaLinks: [
    { icon: 'facebook', url: 'https://www.facebook.com/' },
    { icon: 'twitter', url: 'https://twitter.com/' },
    { icon: 'instagram', url: 'https://www.instagram.com/' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/' },
  ],
  navigationLinks: [
    { title: 'About', url: '#' },
    { title: 'Features', url: '#' },
    { title: 'Works', url: '#' },
    { title: 'Support', url: '#' },
    { title: 'Help', url: '#' },
  ],
  contactInfo: {
    address: '8502 Preston Rd. Inglewood, Maine 98380, USA',
    email: 'support@rareblocks.xyz',
  },
  copyrightText: '© Copyright 2021, All Rights Reserved',
};


const FooterFiveTemplate = (args) => <FooterFive {...args} />;

export const FooterFiveStory = FooterFiveTemplate.bind({});
FooterFiveStory.args = {
  company:{
    title:"company",
    links: [
        { title: 'About', url: '#' },
        { title: 'Features', url: '#' },
        { title: 'Works', url: '#' },
        { title: 'Career', url: '#' },
      ]
},
help:{
title:"help",
links: [
    { title: 'Customer Support', url: '#' },
    { title: 'Delivery Details', url: '#' },
    { title: 'Terms & Conditions', url: '#' },
    { title: 'Privacy Policy', url: '#' },
  ]
},
resources:{
title:"resources",
links: [
{ title: 'Free eBooks', url: '#' },
{ title: 'Development Tutorial', url: '#' },
{ title: 'How to - Blog', url: '#' },
{ title: 'YouTube Playlist', url: '#' },
]
},
extraLinks:{
title:"Extra Links",
links: [

    { title: 'Customer Support', url: '#' },
    { title: 'Delivery Details', url: '#' },
    { title: 'Terms & Conditions', url: '#' },
    { title: 'Privacy Policy', url: '#' },
  ]
},

socialMediaLinks: [
{ icon: 'facebook', url: '#' },
{ icon: 'twitter', url: '#' },
{ icon: 'instagram', url: '#' },
{ icon: 'linkedin', url: '#' },
],
logoSrc: 'https://cdn.rareblocks.xyz/collection/celebration/images/logo-alt.svg',
copyrightText: '© Copyright 2021, All Rights Reserved by Postcraft',
};


const FooterSixTemplate = (args) => <FooterSix {...args} />;

export const FooterSixStory = FooterSixTemplate.bind({});
FooterSixStory.args = {
  logoSrc: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/logo.svg',
  description: 'Clarity gives you the blocks and components you need to create a truly professional website.',
  socialMediaLinks: [
    { icon: 'facebook', url: '#' },
    { icon: 'twitter', url: '#' },
    { icon: 'instagram', url: '#' },
    { icon: 'linkedin', url: '#' },
    // Add more social media links as needed
  ],
  companyLinks: [
    { title: 'About', url: '#' },
    { title: 'Features', url: '#' },
    { title: 'Works', url: '#' },
    { title: 'Career', url: '#' },
    // Add more company links as needed
  ],
  helpLinks: [
    { title: 'Customer Support', url: '#' },
    { title: 'Delivery Details', url: '#' },
    { title: 'Terms & Conditions', url: '#' },
    { title: 'Privacy Policy', url: '#' },
    // Add more help links as needed
  ],
  resourcesLinks: [
    { title: 'Free eBooks', url: '#' },
    { title: 'Development Tutorial', url: '#' },
    { title: 'How to - Blog', url: '#' },
    { title: 'YouTube Playlist', url: '#' },
    // Add more resources links as needed
  ],
  copyrightText: '© Copyright 2022, All Rights Reserved by ClarityUI',
};
