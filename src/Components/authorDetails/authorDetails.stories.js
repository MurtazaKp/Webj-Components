import React from 'react'
import AuthorDetailsOne from './authorDetailsOne'

export default {
    title: 'Author Details',
}

const AuthorDetailsOneTemplate = (args) => <AuthorDetailsOne {...args} />

export const AuthorDetailsOneStory = AuthorDetailsOneTemplate.bind({})
AuthorDetailsOneStory.args = {
    name: 'Atron Calery',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci commodo, elit sit enim blandit enim sit molestie aana.',
    socialLinks: [
        { label: 'Facebook', href: 'www.facebook.com' },
        { label: 'Twitter', href: 'www.twitter.com' },
        { label: 'Website', href: 'www.example.com' },
    ],
    image: {
        src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-author/1/author-1.png',
        alt: 'Atron Calery Image',
    },
}
