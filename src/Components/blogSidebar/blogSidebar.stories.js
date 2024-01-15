import React from 'react'
import BlogSidebar from './blogSidebarOne'

export default {
    title: 'Blog Sidebar',
}

const BlogSidebarOneTemplate = (args) => <BlogSidebar {...args} />

export const BlogSidebarOneStory = BlogSidebarOneTemplate.bind({})
BlogSidebarOneStory.args = {
    mainHeading: 'Recent Posts',
    recentPosts: [
        {
            id: 1,
            title: 'How a visual artist redefines success in graphic design',
            link: '#',
            date: 'April 09, 2022',
            thumbnail: {
                src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/sidebar-popular-posts/5/thumbnail-1.png',
                alt: 'Thumbnail 1',
            },
        },
        {
            id: 2,
            title: 'Another post title 1',
            link: '#',
            date: 'April 10, 2022',
            thumbnail: {
                src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/sidebar-popular-posts/5/thumbnail-2.png',
                alt: 'Thumbnail 2',
            },
        },
        {
            id: 3,
            title: 'Another post title 2',
            link: '#',
            date: 'April 11, 2022',
            thumbnail: {
                src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/sidebar-popular-posts/5/thumbnail-3.png',
                alt: 'Thumbnail 3',
            },
        },
        {
            id: 4,
            title: 'Another post title 3',
            link: '#',
            date: 'April 12, 2022',
            thumbnail: {
                src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/sidebar-popular-posts/5/thumbnail-4.png',
                alt: 'Thumbnail 4',
            },
        },
    ],
}
