import React from 'react'
import IntegrationOne from './integrationOne'

export default {
    title: 'Integrations',
}

const Template = (args) => <IntegrationOne {...args} />

export const IntegrationOneStory = Template.bind({})
IntegrationOneStory.args = {
    heading: 'Integrate with Apps',
    description:
        'Explore a variety of integrations with popular applications to enhance your experience.',
    integrations: [
        {
            name: 'Gmail',
            image: {
                src: 'https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/gmail-logo.png',
                alt: 'Gmail Logo',
            },
            description:
                'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            integrationType: 'Direct Integration',
        },
        {
            name: 'Slack',
            image: {
                src: 'https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/slack-logo.png',
                alt: 'Slack Logo',
            },
            description:
                'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            integrationType: 'Direct Integration',
        },
        {
            name: 'Shopify',
            image: {
                src: 'https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/shopify-logo.png',
                alt: 'Shopify Logo',
            },
            description:
                'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            integrationType: 'Direct Integration',
        },
        {
            name: 'Intercom',
            image: {
                src: 'https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/intercom-logo.png',
                alt: 'Intercom Logo',
            },
            description:
                'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            integrationType: 'Direct Integration',
        },
        {
            name: 'Twitter',
            image: {
                src: 'https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/twitter-logo.png',
                alt: 'Twitter Logo',
            },
            description:
                'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            integrationType: 'Direct Integration',
        },
        {
            name: 'Sketch',
            image: {
                src: 'https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/sketch-logo.png',
                alt: 'Sketch Logo',
            },
            description:
                'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            integrationType: 'Direct Integration',
        },
    ],
    integrationAll: {
        label: 'Check all Integration',
        href: '#',
    },
}
