import React from 'react'
import AlertOne from './alertOne'

export default {
    title: 'Alert',
}

const AlertOneTemplate = (args) => <AlertOne {...args} />

export const AlertOneStory = AlertOneTemplate.bind({})
AlertOneStory.args = { alertText: ' New Item has been created' }
