import React from 'react'
import DashboardStepsOne from './dashboardStepsOne'

export default {
    title: 'Dashboard Steps',
}

const DashboardStepsOneTemplate = (args) => <DashboardStepsOne {...args} />

export const DashboardStepsOneStory = DashboardStepsOneTemplate.bind({})
DashboardStepsOneStory.args = {
    heading: 'dsad',
    steps: [
        {
            id: 1,
            title: 'Create Free Account',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            title: 'Setup Your Profile',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 3,
            title: 'Start Monitoring',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ],
}
