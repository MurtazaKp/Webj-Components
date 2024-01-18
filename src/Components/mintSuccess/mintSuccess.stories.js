import React from 'react'
import MintSuccessOne from './mintSuccessOne'

export default {
    title: 'Mint Success',
}

const MintSuccessOneTemplate = (args) => <MintSuccessOne {...args} />

export const MintSuccessOneStory = MintSuccessOneTemplate.bind({})

MintSuccessOneStory.args = {
    title: 'Mint Successful',
    subtitle: 'This can take a few minutes depending on gas',
    imageSrc: {
        src: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/mint-success/2/image.png',
        alt: 'Nft image',
    },
    openseaButton: { label: 'view on opensea', href: '#' },

    apeName: 'Sad Ape #258',
    owner: {
        ownerText: 'Owned by:',
        avatar: {
            src: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/mint-success/1/avatar-background.png',
            alt: 'Alt',
        },
        ownerName: 'FA',
        ownerAddress: '0xf99...28C',
    },
    assetId: { label: 'Asset Id', value: '1rj949940l1kd0ie095941' },
    currentPrice: { label: 'Current Price', value: 'Ξ 1.9 ETH' },
    description: {
        label: 'description',
        description:
            'An NFT is a digital asset that represents real-world objects like art, music, in-game products and videos.',
    },
}
