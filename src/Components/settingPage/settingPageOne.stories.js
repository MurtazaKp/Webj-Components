import React from 'react'
import SettingsPageOne from './settingPageOne'

export default {
    title: 'SettingPage',
}

const SettingPageOneTemplate = (args) => <SettingsPageOne {...args} />

export const SettingPageOneStory = SettingPageOneTemplate.bind({})
SettingPageOneStory.args = {}
