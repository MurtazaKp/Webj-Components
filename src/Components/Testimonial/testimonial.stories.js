import React from 'react'
import TestimonialOne from './testimonialOne'
import TestimonialTwo from './testimonialTwo'

export default {
    title: 'Testimonials',
}

const TestimonialOneTemplate = (args) => <TestimonialOne {...args} />

export const TestimonialOneStory = TestimonialOneTemplate.bind({})
TestimonialOneStory.args = {
    subheading: '3940+ Happy Landingfolio Users',
    heading: "  Don't just take our words",
    testimonials: [
        {
            reviewerImage: {
                src: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/4/woman.png',
                alt: 'image',
            },
            reviewerName: 'Jenny Wilson',
            reviewerCompany: 'Grower.io',
            quote: 'We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.',
        },
        {
            reviewerImage: {
                src: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/4/man.png',
                alt: 'Image',
            },
            reviewerName: 'Devon Lane',
            reviewerCompany: 'DLDesign.co',
            quote: 'We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.',
        },
    ],
}

const TestimonialTwoTemplate = (args) => <TestimonialTwo {...args} />

export const TestimonialTwoStory = TestimonialTwoTemplate.bind({})
TestimonialTwoStory.args = {
    subheading: '2,157 people have said how good Rareblocks',
    heading: 'Our happy clients say about us',
    testimonials: [
        {
            quote: 'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.',
            author: 'Leslie Alexander',
            role: 'Freelance React Developer',
            avatar: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png',
        },
        {
            quote: 'Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.',
            author: 'Jacob Jones',
            role: 'Digital Marketer',
            avatar: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png',
        },
        {
            quote: 'I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.',
            author: 'Jenny Wilson',
            role: 'Graphic Designer',
            avatar: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png',
        },
    ],
}
