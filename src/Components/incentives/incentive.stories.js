import React from 'react'
import IncentiveOne from './incentiveOne'

export default {
    title: 'Incentives',
}

const Template = (args) => <IncentiveOne {...args} />

export const IncentiveOneStory = Template.bind({})
IncentiveOneStory.args = {
    incentives: [
        {
            title: 'Secured Payments',
            description: 'Make payment with ease',
            icon: 'secure',
        },
        {
            title: 'Shop for Anyone',
            description: 'You can shop for any category',
            icon: 'shop',
        },
        {
            title: 'Free Delivery',
            description: 'Get 100% free delivery',
            icon: 'delivery',
        },
        {
            title: 'Quality Products',
            description: 'Made with highest care',
            icon: 'quality',
        },
    ],
}
