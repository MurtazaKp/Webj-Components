import React from 'react'
import FaqOne from './faqOne'
import FaqTwo from './faqTwo'

export default {
    title: 'Faq',
}

const FaqOneTemplate = (args) => <FaqOne {...args} />

export const FaqOneStory = FaqOneTemplate.bind({})

const FaqTwoTemplate = (args) => <FaqTwo {...args} />

export const FaqTwoStory = FaqTwoTemplate.bind({})
FaqTwoStory.args = {
    heading: 'Frequently Asked Questions',
    description:
        'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    faqs: [
        {
            question: 'How this UI Kit is different from others in the market?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
            question: 'How long do you provide support?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
            question: 'Do I need any experience to work with Rareblocks?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
            question: 'What kind of files are included?',
            answer: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
    ],
}
