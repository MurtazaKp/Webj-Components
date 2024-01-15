import React from 'react'
import StepsOne from './stepsOne'

export default {
    title: 'Steps',
}

const StepsOneTemplate = (args) => <StepsOne {...args} />

export const StepsOneStory = StepsOneTemplate.bind({})
StepsOneStory.args = {
    sectionTitle: 'How does it work?',
    sectionDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.',
    steps: [
        {
            stepNumber: 1,
            title: 'Create a free account',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        },
        {
            stepNumber: 2,
            title: 'Build your website',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        },
        {
            stepNumber: 3,
            title: 'Release & Launch',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        },
    ],
}
