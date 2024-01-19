import React from 'react'
import BreadcrumbOne from './breadcrumbOne'

export default {
    title: 'Breadcrumb',
}

const breadcrumbOneTemplate = (args) => <BreadcrumbOne {...args} />

export const breadcrumbOneStory = breadcrumbOneTemplate.bind({})
breadcrumbOneStory.args = {
    breadcrumbItems: [
        { label: 'Reports', link: '#', title: 'View Reports' },
        { label: 'Sales', link: '#', title: 'View Sales' },
        { label: 'Product Reports', link: '#', title: 'View Product Reports' },
    ],
}
