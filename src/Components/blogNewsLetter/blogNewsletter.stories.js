import React from 'react'
import BlogNewsletterOne from './blogNewsletterOne'

export default {
    title: 'BlogNewsletter',
}

const BlogNewsletterOneTemplate = (args) => <BlogNewsletterOne {...args} />

export const BlogNewsletterOneStory = BlogNewsletterOneTemplate.bind({})
BlogNewsletterOneStory.args = {
    title: 'Download free eBook of best growth tips.',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa enim.',
    image: {
        src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-newsletter/2/book-cover.png',
        alt: 'Book Cover Image',
    },
    email: {
        label: 'email',
        type: 'email',
        placeholder: 'Enter email address',
        initialEmail: '',
    },
    DownloadButtonText: 'Download E-Book',
}
