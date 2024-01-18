import React from 'react'
import AuthorOne from './authorOne'

export default {
    title: 'Author',
}

const AuthorOneTemplate = (args) => <AuthorOne {...args} />

export const AuthorOneStory = AuthorOneTemplate.bind({})
AuthorOneStory.args = {
    heading: 'Our Authors',
    description:
        'In a creative workplace, employees responsibly try different solutions.',
    authors: [
        {
            name: 'HungerGames',
            username: 'creativeGig',
            image: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/authors/5/author-1.png',
            bio1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit elit posuere morbi laoreet tortor auctor.',
            bio2: 'Aliquam sit elit posuere morbi laoreet tortor auctor. Urna integer enim id neque.',
            twitterCta: {
                href: '#',
                label: 'Follow on Twitter',
            },
        },
        {
            name: 'CodeMaster',
            username: 'codeWizard',
            image: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/authors/5/author-2.png',
            bio1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit elit posuere morbi laoreet tortor auctor.',
            bio2: 'Aliquam sit elit posuere morbi laoreet tortor auctor. Urna integer enim id neque.',
            twitterCta: {
                href: '#',
                label: 'Follow on Twitter',
            },
        },
    ],
}
