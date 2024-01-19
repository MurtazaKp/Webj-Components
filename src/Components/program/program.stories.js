import React from 'react'
import ProgramOne from './programOne'

export default {
    title: 'Program',
}

const ProgramOneTemplate = (args) => <ProgramOne {...args} />

export const ProgramOneStory = ProgramOneTemplate.bind({})
ProgramOneStory.args = {
    title: 'Another Title',
    subtitle: 'Subtitle for Another Component',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonText: { label: 'Learn More', href: '#' },
    imageUrl: {
        src: 'https://cdn.rareblocks.xyz/collection/bakerstreet/images/programs/3/program-big.png',
        alt: 'image',
    },

    weeks: [
        {
            title: 'SECTION 1',
            duration: 'Week 1 - Week 2',
            content:
                'Etiam orci, tellus vestibulum sem in viverra quisque. Mi massa mauris amet lorem fusce. Iaculis id viverra ut semper mattis pellentesque.',
        },
        {
            title: 'SECTION 2',
            duration: 'Week 3 - Week 8',
            content:
                'Etiam orci, tellus vestibulum sem in viverra quisque. Mi massa mauris amet lorem fusce. Iaculis id viverra ut semper mattis pellentesque.',
        },
        {
            title: 'SECTION 3',
            duration: 'Week 8 - Week 10',
            content:
                'Etiam orci, tellus vestibulum sem in viverra quisque. Mi massa mauris amet lorem fusce. Iaculis id viverra ut semper mattis pellentesque.',
        },
    ],
}
