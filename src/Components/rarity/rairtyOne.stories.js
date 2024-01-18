import React from 'react'

import RarityOne from './rarityOne'

export default {
    title: 'Rarity',
}

const RarityOneTemplate = (args) => <RarityOne {...args} />

export const RarityOneStory = RarityOneTemplate.bind({})

RarityOneStory.args = {
    imageUrl: {
        src: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/rarity/1/image.png',
        alt: 'rarity image',
    },

    rarityRank: { label: 'Rarity Rank #', value: '3' },

    apeId: 41066,
    rarityScore: { label: 'Rarity Score', value: '3023' },
    openSeaButton: { label: 'view on opensea', href: '#' },
    categories: [
        { name: 'Background', value: 'Orange', score: '+17.44', count: 30 },
        { name: 'Mouth', value: 'Rage', score: '+21.91', count: 94 },
        { name: 'Hair', value: 'Top Hat', score: '+37.49', count: 146 },
        {
            name: 'Facial Hair',
            value: 'Big Beard',
            score: '+68.03',
            count: 385,
        },
        {
            name: 'Eyes',
            value: 'Colorful Sunglass',
            score: '+89.01',
            count: 542,
        },
        { name: 'Flur', value: 'Regular', score: '+7.35', count: 43 },
        { name: 'Mouth Prop', value: 'Laces', score: '+14.25', count: 58 },
        {
            name: 'Hat',
            value: 'Colorful Bandana',
            score: '+35.14',
            count: 267,
        },
        { name: 'Props', value: '3 Arrows', score: '+155.23', count: 391 },
        { name: 'Body', value: 'Slim', score: '+16.07', count: 104 },
        { name: 'Shirt', value: 'Black Polo', score: '+55.10', count: 219 },
        {
            name: 'Tattoo',
            value: 'Red Circle',
            score: '+47.56',
            count: 105,
        },
    ],
}
