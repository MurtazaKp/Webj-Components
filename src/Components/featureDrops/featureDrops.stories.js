// featureDropsOne.stories.js
import React from 'react'
import FeatureDropsOne from './featureDropsOne'

export default {
    title: 'featureDrops',
}

const featureDropsTemplate = (args) => <FeatureDropsOne {...args} />

export const featureDropsOneStory = featureDropsTemplate.bind({})
featureDropsOneStory.args = {
    heading: 'Latest Collection in Last 7 Days',
    description:
        "We've collected the latest NFTs for you to choose. Start collecting.",
    link: {
        url: '#',
        text: 'See All Collections',
    },
    items: [
        {
            id: 1,
            title: '3D Hand Cross Fingers Premium #94',
            imageUrl: {
                src: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/8/drop-1.png',
                alt: 'Artwork 1',
            },
            floor: '1.7 ETH',
            avatars: [
                'https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/8/avatar-1.png',
                'https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/8/avatar-2.png',
                'https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/8/avatar-3.png',
            ],
            stock: 347,
            bid: '2.5 ETH',
        },
        {
            id: 2,
            title: 'Digital Art Waves #112',
            imageUrl: {
                src: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/8/drop-2.png',
                alt: 'Artwork 2',
            },
            floor: '2.0 ETH',
            avatars: [
                'https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/8/avatar-1.png',
                'https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/8/avatar-2.png',
                'https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/8/avatar-3.png',
            ],
            stock: 220,
            bid: '3.2 ETH',
        },
        {
            id: 3,
            title: 'Abstract Universe #75',
            imageUrl: {
                src: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/8/drop-3.png',
                alt: 'Artwork 3',
            },
            floor: '1.5 ETH',
            avatars: [
                'https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/8/avatar-1.png',
                'https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/8/avatar-2.png',
                'https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/8/avatar-3.png',
            ],
            stock: 180,
            bid: '2.0 ETH',
        },
        {
            id: 4,
            title: 'Nature Harmony #22',
            imageUrl: {
                src: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/8/drop-4.png',
                alt: 'Artwork 4',
            },
            floor: '1.9 ETH',
            avatars: [
                'https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/8/avatar-1.png',
                'https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/8/avatar-2.png',
                'https://landingfoliocom.imgix.net/store/collection/niftyui/images/featured-drops-marketplace/8/avatar-3.png',
            ],
            stock: 300,
            bid: '2.8 ETH',
        },
        // Add more items if needed
    ],
}
