// Button.stories.js

import React from 'react'
import Avatar from './avatar'

export default {
    title: 'Avatar',
    component: Avatar,
    argTypes: {
        type: {
            options: ['small', 'medium', 'large', 'xl'],
            control: { type: 'radio' },
        },
    },
}

const Template = (args) => <Avatar {...args} />

export const AvatarStory = Template.bind({})
AvatarStory.args = {
    image: {
        src: 'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/images/avatar-square/avatar-square.png',
        alt: 'avatar',
    },
    type: 'small',
}
