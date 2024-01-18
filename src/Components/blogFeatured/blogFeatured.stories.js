import React from 'react'
import BlogFeaturedOne from './blogFeaturedOne'

export default {
    title: 'BlogFeatured',
}

const BlogFeaturedOneTemplate = (args) => <BlogFeaturedOne {...args} />

export const BlogFeaturedOneStory = BlogFeaturedOneTemplate.bind({})
BlogFeaturedOneStory.args = {
    image: {
        src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-featured/2/thumbnail.png',
        alt: 'cover image',
    },
    category: 'Featured',
    title: 'How to write content about your photographs',
    date: 'April 09, 2022',
    content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis commodo magna risus maecenas nisl sed cras lacus, vestibulum. Dictum nisi amet.',
    buttonLink: { label: 'Read Full Article', href: '#' },
}
