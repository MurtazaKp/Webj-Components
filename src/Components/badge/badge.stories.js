// Button.stories.js

import React from 'react'

import Badge from './badge'

export default {
    title: 'Badge',
    component: Badge,
    argTypes: {
        type: {
            options: [
                'normal',
                'regular',
                'positive',
                'new',
                'important',
                'number',
            ],
            control: { type: 'radio' },
        },
    },
}

const Template = (args) => <Badge {...args} />

export const BadgeStory = Template.bind({})
BadgeStoryStory.args = {
    label: 'Badge',
    type: 'normal',
}
