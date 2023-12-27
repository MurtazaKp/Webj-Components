import React from 'react';
import ContactOne from './contactOne';
import ContactTwo from './contactTwo';



export default {
  title: 'contact',
};

const ContactOneTemplate = (args) => <ContactOne {...args} />;

export const ContactOneStory = ContactOneTemplate.bind({});
ContactOneStory.args = {
     heading: {
      title: "Love to hear from you, Get in touch 👋",
      description: "Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS and gives the blocks.",
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
    testimonials: [
      {
        quote: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
        author: "Devon Lane",
        role: "Co-Founder, Design.co",
        avatar: "https://landingfoliocom.imgix.net/store/collection/saasui/images/sign-in/3/avatar-male.png",
      },
    ],
    form: {
      title: "Send us a message",
      fields: [
        {
          name: 'fullName',
          label: 'Your Name',
          type: 'text',
          placeholder: 'Your name',
        },
        {
          name: 'email',
          label: 'Email Address',
          type: 'email',
          placeholder: 'Email address',
        },
        {
          name: 'phone',
          label: 'Phone',
          type: 'tel',
          placeholder: '+1-222-333-4444',
        },
        {
          name: 'message',
          label: 'Your Message',
          type: 'textarea',
          placeholder: 'Write your message',
        },
      ],
      buttonLabel: 'Send Message',
    },
};



const ContactTwoTemplate = (args) => <ContactTwo {...args} />;

export const ContactTwoStory = ContactTwoTemplate.bind({});
ContactTwoStory.args = {
   heading: {
      title: "Contact Us",
      description: "Clarity gives you the blocks & components you need to create a truly professional website.",
    },
    contactDetails: [
      {
        office: "USA",
        hours: "Monday-Friday\n8:00 am to 5:00 pm",
        address: "8502 Preston Rd. Ingle,\nMaine 98380, USA",
        phoneNumbers: ["+1-246-888-0653", "+1-222-632-0194"],
      },
      {
        office: "Canada",
        hours: "Monday-Friday\n8:00 am to 5:00 pm",
        address: "8502 Preston Rd. Ingle,\nMaine 98380, USA",
      },
    ],
    form: {
      fields: [
        {
          name: 'fullName',
          label: 'Your Name',
          type: 'text',
          placeholder: 'Enter your full name',
        },
        {
          name: 'email',
          label: 'Email Address',
          type: 'email',
          placeholder: 'Enter your email',
        },
        {
          name: 'message',
          label: 'Your Message',
          type: 'textarea',
          placeholder: 'Write us your question here...',
        },
      ],
      buttonLabel: 'Send Message',
    },
};

