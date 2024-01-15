import React from 'react'
import AboutUsSection from './aboutOne'

export default {
    title: 'About',
}

const AboutOneTemplate = (args) => <AboutUsSection {...args} />

export const AboutOneStory = AboutOneTemplate.bind({})
AboutOneStory.args = {
    title: 'About Us',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat. Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.',

    aboutImage: {
        src: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86',
        alt: 'About Us Image',
    },
}
