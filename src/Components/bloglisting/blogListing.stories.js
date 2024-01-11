import React from 'react';
import BlogListingOne from './bloglistingOne';

import BlogListingTwo from './bloglistingTwo';




export default {
  title: 'BlogListing',
};


const BlogListingOneTemplate = (args) => <BlogListingOne {...args} />;

export const BlogListingOneStory = BlogListingOneTemplate.bind({});
BlogListingOneStory.args = {
    heading: 'Read Latest Articles',
    paragraph: 'Create custom landing pages with Rareblocks that converts more visitors than any website.',
  

  // Data for the articles
   articles : [
    {
      id: 1,
      title: 'How to write content about your photographs',
      imageSrc: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/2/thumbnail-1.png',
      category: 'Growth',
      date: 'April 09, 2022',
      description: 'Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Sit quis auctor odio arcu et dolor.',
    },
    {
      id: 2,
      title: '10 Tips for Stunning Nature Photography',
      imageSrc: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/2/thumbnail-2.png',
      category: 'Photography',
      date: 'April 15, 2022',
      description: 'Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Sit quis auctor odio arcu et dolor.',
    },
     {
      id: 3,
      title: 'The Art of Portrait Composition',
      imageSrc: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/2/thumbnail-3.png',
      category: 'Art',
      date: 'April 20, 2022',
      description: 'Learn the fundamentals of creating compelling portraits through effective composition techniques.',
    },
    {
      id: 4,
      title: 'Mastering Light in Landscape Photography',
      imageSrc: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/2/thumbnail-4.png',
      category: 'Photography',
      date: 'April 25, 2022',
      description: 'Discover the secrets to capturing breathtaking landscapes by harnessing the power of light.',
    },
    {
      id: 5,
      title: 'Tips for Editing Your Photos Like a Pro',
      imageSrc: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/2/thumbnail-5.png',
      category: 'Editing',
      date: 'April 30, 2022',
      description: 'Enhance your photography skills with professional photo editing tips and techniques.',
    },
   
  ]
}

const BlogListingTwoTemplate = (args) => <BlogListingTwo {...args} />;

export const BlogListingTwoStory = BlogListingTwoTemplate.bind({});
BlogListingTwoStory.args = {
   mainHeading:"Read latest collection",
    description:"Create custom landing pages with Rareblocks that converts more visitors than any website.",
    articles:[
    {
      category: 'Growth',
      date: 'April 09, 2022',
      title: 'How a visual artist redefines success in graphic design',
      imageSrc: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/1/thumbnail-1.png',
      link: '#'
    },
    {
      category: 'Growth',
      date: 'April 09, 2022',
      title: 'How a visual artist redefines success in graphic design',
      imageSrc: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/1/thumbnail-2.png',
      link: '#'
    },
    {
      category: 'Growth',
      date: 'April 09, 2022',
      title: 'How a visual artist redefines success in graphic design',
      imageSrc: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/1/thumbnail-3.png',
      link: '#'
    },
    {
      category: 'Growth',
      date: 'April 09, 2022',
      title: 'How a visual artist redefines success in graphic design',
      imageSrc: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/1/thumbnail-4.png',
      link: '#'
    },
    {
      category: 'Growth',
      date: 'April 09, 2022',
      title: 'How a visual artist redefines success in graphic design',
      imageSrc: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/1/thumbnail-5.png',
      link: '#'
    },
    {
      category: 'Growth',
      date: 'April 09, 2022',
      title: 'How a visual artist redefines success in graphic design',
      imageSrc: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/1/thumbnail-6.png',
      link: '#'
    }
  ]
}