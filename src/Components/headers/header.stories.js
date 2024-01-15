import React from 'react';
import HeaderOne from './headerOne';
import HeaderTwo from './headerTwo';
import HeaderThree from './headerThree';
import HeaderFour from './headerFour';
import HeaderFive from './headerFive';

export default {
  title: 'Headers',
};

const Template = (args) => <HeaderOne {...args} />;

export const HeaderOneStory = Template.bind({});
HeaderOneStory.args = {
  logoSrc: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/logo.svg',
  navItems: [
    { title: 'Services', href: '#' },
    { title: 'Latest Collections', href: '#' },
    { title: 'Blog', href: '#' },
  ],
  joinEmailBtn: {
    href: '#',
    text: 'Join Email List',
  },
};

const HeaderTwoTemplate = (args) => <HeaderTwo {...args} />;

export const HeaderTwoStory = HeaderTwoTemplate.bind({});
HeaderTwoStory.args = {
  logoSrc: 'https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg',
  navItems: [
    { title: 'Products', href: '#' },
    { title: 'Features', href: '#' },
    { title: 'Pricing', href: '#' },
    { title: 'Support', href: '#' },
  ],
  joinEmailBtn: {
    href: '#',
    text: 'Start free trial',
  },
};

const HeaderThreeTemplate = (args) => <HeaderThree {...args} />;

export const HeaderThreeStory = HeaderThreeTemplate.bind({});
HeaderThreeStory.args = {
    data: {
        logo: {src:'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/logo.svg',alt:'logo'},
        navItems: [
          { title: 'Tour', href: '#' },
          { title: 'Products', href: '#' },
          { title: 'Customers', href: '#' },
        ],
        secondaryNavItems: [
          { title: 'Sign in', href: '#' },
          { title: 'Sign up', href: '#' },
        ],
        additionalNavItems: [
          { title: 'Articles', href: '#' },
          { title: 'Contact', href: '#' },
        ],
      },
    
}

const HeaderFourTemplate = (args) => <HeaderFour {...args} />;

export const HeaderFourStory = HeaderFourTemplate.bind({});

HeaderFourStory.args = {

        logo: {src:'https://landingfoliocom.imgix.net/store/collection/saasui/images/logo.svg',alt:"logo"},
            navigationLinks: [
              { label: 'Products', url: '#',target:"_blank" },
              { label: 'Features', url: '#',target:"_blank" },
              { label: 'Pricing', url: '#', target:"_blank"},
              { label: 'Support', url: '#' ,target:"_blank"},
            ],
            startTrialText: {
                label:"Start Free Trail",
                href:"/",
                target:"_blank"
            },

    
}

const HeaderFiveTemplate = (args) => <HeaderFive {...args} />;

export const HeaderFiveStory =  HeaderFiveTemplate.bind({});
HeaderFiveStory.args = {
  coverImage:'https://cdn.rareblocks.xyz/collection/celebration/images/headers/3/coworking-space.jpg',
  logoSrc: 'https://cdn.rareblocks.xyz/collection/celebration/images/logo-alt.svg',
  navigationLinks: [
    { label: 'Features', url: '#' },
    { label: 'Solutions', url: '#' },
    { label: 'Resources', url: '#' },
    { label: 'Pricing', url: '#' },
  ],
  ctaText: 'Join Now',
};
// const HeaderFourTemplate = (args) => <HeaderFour {...args} />;

// export const HeaderFourStory = HeaderFourTemplate.bind({});

// HeaderFourTemplate.args = {
//     logoSrc: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/logo.svg',
//     navigationLinks: [
//       { label: 'Products', url: '#' },
//       { label: 'Features', url: '#' },
//       { label: 'Pricing', url: '#' },
//       { label: 'Support', url: '#' },
//     ],
//     startTrialText: {
//         label:"Start Free Trail",
//         href:"/",
//         target:"_blank"
//     },

//   };