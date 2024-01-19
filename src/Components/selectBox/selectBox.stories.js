import React from 'react'
import SelectBox from './selectBoxOne'

export default {
    title: 'Select Box',
}

const selectBoxTemplate = (args) => <SelectBox {...args} />

export const selectBoxStory = selectBoxTemplate.bind({})
selectBoxStory.args = {
    heading: 'Select your customer',
    customers: [
        {
            id: 1,
            name: 'Arlene McCoy',
            role: 'UI/UX Designer',
            imageUrl:
                'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/select-box/2/avatar-female.png',
        },
        {
            id: 2,
            name: 'Kathryn Murphy',
            role: 'Software Developer',
            imageUrl:
                'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/select-box/2/avatar-male.png',
        },
        {
            id: 3,
            name: 'Wade Warren',
            role: 'Team Leader',
            imageUrl:
                'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/select-box/2/avatar-female-2.png',
        },
        {
            id: 4,
            name: 'Bessie Cooper',
            role: 'Project Manager',
            imageUrl:
                'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/select-box/2/avatar-male-2.png',
        },
    ],
}
