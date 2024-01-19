import React from 'react'
import HomeSidebarOne from './homeSidebarOne'

export default {
    title: 'Home Sidebar',
}

const Template = (args) => <HomeSidebarOne {...args} />

export const HomeSidebarOneStory = Template.bind({})
HomeSidebarOneStory.args = {
    blogTitle: 'Clarity Blog',
    author: {
        name: 'Atron Calery',
        imageSrc:
            'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/author.png',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci commodo.',
    },
    recentArticles: [
        {
            title: 'How a visual artist redefines success in graphic design',
            thumbnailSrc:
                'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/thumbnail-1.png',
            link: '#',
        },
        {
            title: 'How a visual artist redefines success in graphic design',
            thumbnailSrc:
                'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/thumbnail-1.png',
            link: '#',
        },
        {
            title: 'How a visual artist redefines success in graphic design',
            thumbnailSrc:
                'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/thumbnail-1.png',
            link: '#',
        },
        {
            title: 'How a visual artist redefines success in graphic design',
            thumbnailSrc:
                'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/thumbnail-1.png',
            link: '#',
        },
        {
            title: 'How a visual artist redefines success in graphic design',
            thumbnailSrc:
                'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/thumbnail-1.png',
            link: '#',
        },
    ],
    newsletter: {
        title: 'Join exclusive list',
        newsletterCtaText:
            'Join with2600+ Developers and start getting feedbacks right now',
        newsletterCtaButton: {
            label: 'Join Now',
        },
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis auctor.',
        avatars: [
            'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/avatar-1.png',
            'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/avatar-2.png',
            'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/avatar-3.png',
        ],
        newsletterForm: {
            label: 'email',
            type: 'email',
            placeholder: 'Enter a Email Address',
        },
        privacyText: 'we do not sell you data',
    },
}
