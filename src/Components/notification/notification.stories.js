import React from 'react'
import NotificationOne from './notificationOne'

export default {
    title: 'Notification',
}

const NotificationOneTemplate = (args) => <NotificationOne {...args} />

export const NotificationOneStory = NotificationOneTemplate.bind({})

NotificationOneStory.args = {
    headingText: 'Upload Successfully',
    uploadText: 'was uploaded successfully',
    fileName: 'logo.png',
}
