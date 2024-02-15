import React from 'react'
import TableGrid from './tableGridOne'

export default {
    title: 'Table Grid',
}

const TableGridlOneTemplate = (args) => <TableGrid {...args} />

export const TableGridlOneStory = TableGridlOneTemplate.bind({})
TableGridlOneStory.args = {
    heading: 'Latest Payments',
    payments: [
        {
            id: 1,
            name: 'Cody Fisher',
            avatar: {
                src: 'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-grid/1/avatar-female.png',
                alt: 'avatar',
            },
            product: 'Clarity Landing UI Kit',
            amount: '$49.00',
            status: 'Complete',
            timestamp: '2 hours ago',
        },
        {
            id: 2,
            name: 'Floyd Miles',
            avatar: {
                src: 'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-grid/1/avatar-male.png',
                alt: 'avatar',
            },
            product: 'Clarity eCommerce UI Kit',
            amount: '$99.00',
            status: 'Pending',
            timestamp: '3 hours ago',
        },
        {
            id: 3,
            name: 'Savannah Nguyen',
            avatar: {
                src: 'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-grid/1/avatar-male-1.png',
                alt: 'avatar',
            },
            product: 'Clarity Landing UI Kit',
            amount: '$49.00',
            status: 'Complete',
            timestamp: '5 days ago',
        },
    ],
}
