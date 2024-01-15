import React from 'react'
import BlogOne from './blogOne'
import BlogTwo from './blogTwo'

export default {
    title: 'Blog',
}

const BlogOneTemplate = (args) => <BlogOne {...args} />

export const BlogOneStory = BlogOneTemplate.bind({})
BlogOneStory.args = {
    blogHeading: 'We share regular updates in Rareblocks',
    blogs: [
        {
            id: 1,
            title: 'The unseen of spending three years at Pixelgrade',
            image: 'https://cdn.rareblocks.xyz/collection/clarity/images/blog/4/blog-1.png',
            category: 'Lifestyle',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam cons. hsadhasuo h hasuidhaih uih',
        },
        {
            id: 2,
            title: 'Why choose a theme that looks good with WooCommerce',
            image: 'https://cdn.rareblocks.xyz/collection/clarity/images/blog/4/blog-2.png',
            category: 'Tutorial',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam cons.',
        },
        {
            id: 3,
            title: 'How does writing influence your personal brand?',
            image: 'https://cdn.rareblocks.xyz/collection/clarity/images/blog/4/blog-3.png',
            category: 'Personal',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam cons.',
        },
    ],
    allBlogsCta: {
        label: 'Read all blog posts',
        href: '#',
        target: '_blank',
    },
}

const BlogTwoTemplate = (args) => <BlogTwo {...args} />

export const BlogTwoStory = BlogTwoTemplate.bind({})
BlogTwoStory.args = {
    blogHeading: 'Latest from our blog',
    blogs: [
        {
            id: 1,
            date: '20 July 2022',
            title: 'Popular design systems to learn from in 2022',
            blogImage: {
                src: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/blog/3/blog-thumbnail-1.png',
                alt: 'blog image',
            },
            author: {
                name: 'Leslie Alexander',
                avatar: {
                    src: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/blog/3/avatar-female-1.png',
                    alt: 'avatar image',
                },
            },
        },
        {
            id: 2,
            date: '08 July 2022',
            title: 'Accessibility makes you a better product designer',
            blogImage: {
                src: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/blog/3/blog-thumbnail-2.png',
                alt: 'blog image',
            },
            author: {
                name: 'Jenny Wilson',
                avatar: {
                    src: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/blog/3/avatar-male-1.png',
                    alt: 'avatar image',
                },
            },
        },
        {
            id: 3,
            date: '16 June 2022',
            title: '15 best tools that will help you build your website',
            title: 'Accessibility makes you a better product designer',
            blogImage: {
                src: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/blog/3/blog-thumbnail-3.png',
                alt: 'blog image',
            },
            author: {
                name: 'Adam Smith',
                avatar: {
                    src: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/blog/3/avatar-male-2.png',
                    alt: 'avatar image',
                },
            },
        },
    ],
    allBlogsCta: {
        label: 'Read all blog posts',
        href: '#',
        target: '_blank',
    },
}
