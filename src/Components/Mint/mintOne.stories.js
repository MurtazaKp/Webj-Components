import React from 'react'
import MintOne from './MintOne'

export default {
    title: 'Mint',
}

const MintOneTemplate = (args) => <MintOne {...args} />

export const MintOneStory = MintOneTemplate.bind({})

MintOneStory.args = {
    heading: 'Mint an Ape',
    subText: 'Osprey - The Smart Ape',
    imageSrc: {
        src: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/mint/1/image.png',
        alt: 'Mint Ape Image',
    },
    selectQuantityText: 'Select Quantity:',
    mintCostText: 'Mint Cost:',
    mintCostValue: '0.547',
    mintCostCurrency: 'EFT',
    mintButton: 'Mint',
    walletBalanceText: 'Wallet Balance:',
    walletBalanceValue: '3.925 EFT',
}
