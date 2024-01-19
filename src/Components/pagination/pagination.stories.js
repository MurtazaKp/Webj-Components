import React from 'react'
import PaginationOne from './paginationOne'

export default {
    title: ' Pagination',
}

const PaginationOneTemplate = (args) => <PaginationOne {...args} />

export const PaginationOneStory = PaginationOneTemplate.bind({})
PaginationOneStory.args = {
    pageNumbers: [1, 2, 3, 4],
}
