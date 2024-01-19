import React from 'react'
import BlogPagination from './blogPaginationOne'

export default {
    title: 'Blog Pagination',
}

const BlogPaginationOneTemplate = (args) => <BlogPagination {...args} />

export const BlogPaginationOneStory = BlogPaginationOneTemplate.bind({})
BlogPaginationOneStory.args = {
    pageNumbers: [1, 2, 3, 4],
}
