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
        imageSrc: {
            src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/author.png',
            alt: 'alt',
        },
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci commodo.',
    },
    recentArticles: [
        {
            title: 'How a visual artist redefines success in graphic design',
            thumbnailSrc: {
                src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/thumbnail-1.png',
                alt: 'thumbnail',
            },

            link: '#',
        },
        {
            title: 'How a visual artist redefines success in graphic design',
            thumbnailSrc: {
                src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/thumbnail-1.png',
                alt: 'thumbnail',
            },
            link: '#',
        },
        {
            title: 'How a visual artist redefines success in graphic design',
            thumbnailSrc: {
                src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/thumbnail-1.png',
                alt: 'thumbnail',
            },
            link: '#',
        },
        {
            title: 'How a visual artist redefines success in graphic design',
            thumbnailSrc: {
                src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/thumbnail-1.png',
                alt: 'thumbnail',
            },
            link: '#',
        },
        {
            title: 'How a visual artist redefines success in graphic design',
            thumbnailSrc: {
                src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/thumbnail-1.png',
                alt: 'thumbnail',
            },
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
            {
                src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/avatar-1.png',
                alt: '',
            },
            {
                src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/avatar-2.png',
                alt: '',
            },
            {
                src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/avatar-3.png',
                alt: '',
            },
        ],
        newsletterForm: {
            label: 'email',
            type: 'email',
            placeholder: 'Enter a Email Address',
        },
        privacyText: 'we do not sell you data',
    },
}
