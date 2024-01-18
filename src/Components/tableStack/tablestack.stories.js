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
            avatar: 'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-stacked/4/avatar-female.png',
        },
        {
            id: 2,
            name: 'Devon Lane',
            role: 'Ethical Hacker',
            avatar: 'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-stacked/4/avatar-male.png',
        },
        {
            id: 3,
            name: 'Ralph Edwards',
            role: 'UI/UX Designer',
            avatar: 'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-stacked/4/avatar-male-2.png',
        },
        {
            id: 4,
            name: 'Bessie Cooper',
            role: 'Scrum Master',
            avatar: 'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-stacked/4/avatar-female-2.png',
        },
    ],
}
