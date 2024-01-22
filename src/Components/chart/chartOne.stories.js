import React from 'react'
import ChartOne from './chartOne'

export default {
    title: 'Apex Chart',
}

const ChartOneTemplate = (args) => <ChartOne {...args} />

export const ChartOneStory = ChartOneTemplate.bind({})
ChartOneStory.args = {
    heading: 'Sales Report',
    exportChart: {
        label: 'Export to csv',
    },
    month: ['12 Month', '6 Month', '3 Month', '7 Days'],
    seriesData: [
        {
            name: 'New user',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 76, 85, 101],
        },
        {
            name: 'Returning user',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 44, 55, 57],
        },
    ],
    catagories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ],
}
