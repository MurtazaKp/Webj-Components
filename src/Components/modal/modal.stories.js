import React from 'react'
import ModalOne from './modalOne'

export default {
    title: 'Modal',
}

const ModalOneTemplate = (args) => <ModalOne {...args} />

export const ModalOneStory = ModalOneTemplate.bind({})

ModalOneStory.args = {}
