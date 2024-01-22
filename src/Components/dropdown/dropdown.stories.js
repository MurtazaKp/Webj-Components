import React from 'react'
import DropdownOne from './dropdownOne'

export default {
    title: 'Dropdown',
}

const DropdownOneTemplate = (args) => <DropdownOne {...args} />

export const DropdownOneStory = DropdownOneTemplate.bind({})
DropdownOneStory.args = {
    dropdownItems: ['User profile', 'Email settings', 'Product roadmap'],
}
