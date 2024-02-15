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
        { icon: true, cta: { label: 'Home', href: '/' } },
        { icon: true, cta: { label: 'Analytics', href: '/analytics' } },
        {
            icon: true,
            cta: { label: 'Customer Review', href: '/customer-review' },
        },
    ],
}
