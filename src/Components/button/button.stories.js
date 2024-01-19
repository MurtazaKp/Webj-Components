// Button.stories.js

import React from 'react'

import Button from './button'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Button',
    component: Button,
    argTypes: {
        type: {
            options: ['primary', 'secondary', 'danger', 'disabled', 'stroke'],
            control: { type: 'radio' },
        },
    },
}

const Template = (args) => <Button {...args} />

export const InteractiveButtonStory = Template.bind({})
InteractiveButtonStory.args = {
    label: 'Click Me',
    type: 'primary',
}
