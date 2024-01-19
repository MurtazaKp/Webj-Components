import React from 'react'
import TabsOne from './tabsOne'

export default {
    title: 'Tabs',
}

const TabsOneTemplate = (args) => <TabsOne {...args} />

export const TabsOneStory = TabsOneTemplate.bind({})
TabsOneStory.args = {
    tabs: [
        { id: 1, label: 'Dashboard' },
        { id: 2, label: 'My Account' },
        { id: 3, label: 'Downloads' },
        { id: 4, label: 'Licenses' },
        { id: 5, label: 'Settings' },
    ],
}
