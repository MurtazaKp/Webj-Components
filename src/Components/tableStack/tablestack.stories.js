import React from 'react'
import TableStackOne from './tableStackOne'

export default {
    title: 'TableStacks',
}

const TableStackOneTemplate = (args) => <TableStackOne {...args} />

export const TableStackOneStory = TableStackOneTemplate.bind({})
TableStackOneStory.args = {
    heading: 'Customer List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipis.',
    customerList: [
        {
            id: 1,
            name: 'Dianne Russell',
            role: 'Project Manager',
            avatar: {
                src: 'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-stacked/4/avatar-female.png',
                alt: 'avatar',
            },
        },
        {
            id: 2,
            name: 'Devon Lane',
            role: 'Ethical Hacker',
            avatar: {
                src: 'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-stacked/4/avatar-male.png',
                alt: 'avatar',
            },
        },
        {
            id: 3,
            name: 'Ralph Edwards',
            role: 'UI/UX Designer',
            avatar: {
                src: 'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-stacked/4/avatar-male-2.png',
                alt: 'avatar',
            },
        },
        {
            id: 4,
            name: 'Bessie Cooper',
            role: 'Scrum Master',
            avatar: {
                src: 'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-stacked/4/avatar-female-2.png',
                alt: 'avatar',
            },
        },
    ],
}
