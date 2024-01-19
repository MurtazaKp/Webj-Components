import React from 'react'
import PageTitleOne from './pageTitleOne'

export default {
    title: 'PageTitle',
}

const PageTitleOneTemplate = (args) => <PageTitleOne {...args} />

export const PageTitleOneStory = PageTitleOneTemplate.bind({})
PageTitleOneStory.args = {
    heading: 'Customer Review',
    breadcrumbs: [
        { icon: true, text: 'Home' },
        { icon: true, text: 'Analytics' },
        { icon: true, text: 'Customer Review' },
    ],
}
