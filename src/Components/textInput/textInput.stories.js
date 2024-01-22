import React from 'react'
import TextInput from './textInputOne'

export default {
    title: 'Text Input',
}

const TextInputOneTemplate = (args) => <TextInput {...args} />

export const TextInputOneStory = TextInputOneTemplate.bind({})
TextInputOneStory.args = {
    label: 'Password',
    placeholder: 'Enter a Password',
}
