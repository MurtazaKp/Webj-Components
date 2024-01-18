import React from 'react'
import WalletConnectOne from './connectWalletOne'

export default {
    title: 'Connect Wallet',
}

const ConnectWalletTemplate = (args) => <WalletConnectOne {...args} />

export const ConnectWalletStory = ConnectWalletTemplate.bind({})
ConnectWalletStory.args = {
    heading: 'Connect your wallet',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    walletOptions: [
        {
            id: 1,
            logoSrc:
                'https://landingfoliocom.imgix.net/store/collection/niftyui/images/connect-wallet/3/metamask-logo.png',
            name: 'Metamask',
        },
        {
            id: 2,
            logoSrc:
                'https://landingfoliocom.imgix.net/store/collection/niftyui/images/connect-wallet/3/coinbase-logo.png',
            name: 'Coinbase Wallet',
        },
        {
            id: 3,
            logoSrc:
                'https://landingfoliocom.imgix.net/store/collection/niftyui/images/connect-wallet/3/fortmatic-logo.png',
            name: 'Fortmatic',
        },
        {
            id: 4,
            logoSrc:
                'https://landingfoliocom.imgix.net/store/collection/niftyui/images/connect-wallet/3/wallet-connect-logo.png',
            name: 'Wallet Connect',
        },
    ],
}
