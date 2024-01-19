import React from 'react'
import StatsDataOne from './dataStatsOne'

export default {
    title: 'Data Stats',
}

const DataStatsOneTemplate = (args) => <StatsDataOne {...args} />

export const DataStatsOneStory = DataStatsOneTemplate.bind({})
DataStatsOneStory.args = {
    DataStats: [
        {
            label: "Today's Sale",
            value: '$12,426',
            percentage: '+36%',
        },
        {
            label: 'Active Users',
            value: '4,395',
            percentage: '+36%',
        },
        {
            label: "Today's Revenue",
            value: '$10,593',
            percentage: '+36%',
        },
        {
            label: 'Growth Sale',
            value: '$1,940',
            percentage: '+36%',
        },
    ],
}
