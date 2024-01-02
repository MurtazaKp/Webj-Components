import React from 'react';
import NewsletterOne from './newsletterOne';
import NewsletterTwo from './newsletterTwo';





export default {
  title: 'Newsletter',
};


const NewsletterOneTemplate = (args) => <NewsletterOne {...args} />;

export const NewsletterOneStory = NewsletterOneTemplate.bind({});

NewsletterOneStory.args={
     heading: "Join our newsletter",
    description: "Stay up to date with our new collections, latest deals and special offers! We announce a new collection every week so be sure to stay tuned to get the hottest piece for you.",
    formPlaceholder: "Enter your email address",
    buttonText: "Subscribe Now",
    successMessage: "Thank you for subscribing!",
    note: "Your email is 100% confidential and won't send you any spam.",
}


const NewsletterTwoTemplate = (args) => <NewsletterTwo {...args} />;

export const NewsletterTwoStory = NewsletterTwoTemplate.bind({});

NewsletterTwoStory.args={
     heading: "Join our newsletter",
    description: "Stay up to date with our new collections, latest deals and special offers! We announce a new collection every week so be sure to stay tuned to get the hottest piece for you.",
    formPlaceholder: "Enter your email address",
    buttonText: "Subscribe Now",
    successMessage: "Thank you for subscribing!",
    note: "Your email is 100% confidential and won't send you any spam.",
}
