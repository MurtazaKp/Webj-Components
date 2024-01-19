import React from 'react'
import RadioSwitcherOne from './radioSwitcherOne'

export default {
    title: 'RadioSwitcher',
}

const RadioSwitcherOneTemplate = (args) => <RadioSwitcherOne {...args} />

export const RadioSwitcherOneStory = RadioSwitcherOneTemplate.bind({})

RadioSwitcherOneStory.args = {
    heading: ' Select a tool',
    tools: [
        {
            id: 'mailchimp',
            name: 'Mailchimp',
            logoSrc:
                'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/radio-switcher/3/mailchimp-logo.png',
            description: 'Email Marketing',
        },
        {
            id: 'telegram',
            name: 'Telegram',
            logoSrc:
                'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/radio-switcher/3/telegram-logo.png',
            description: 'Communication',
        },
        {
            id: 'zapier',
            name: 'Zapier',
            logoSrc:
                'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/radio-switcher/3/zapier-logo.png',
            description: 'Automation',
        },
        {
            id: 'dropbox',
            name: 'Dropbox',
            logoSrc:
                'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/radio-switcher/3/dropbox-logo.png',
            description: 'Cloud Storage',
        },
    ],
}
