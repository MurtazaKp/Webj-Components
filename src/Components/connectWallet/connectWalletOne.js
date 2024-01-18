import React from 'react'

const WalletConnectOne = ({ heading, description, walletOptions }) => {
    // Define your data array
    const walletConnectData = {
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

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-2xl font-bold text-gray-900">
                        {heading}
                    </h2>
                    <p className="mt-2 text-base font-medium text-gray-500">
                        {description}
                    </p>
                </div>

                <div className="max-w-md mx-auto mt-8 border border-gray-200 divide-y divide-gray-200 rounded-xl">
                    {walletOptions.map((wallet) => (
                        <div
                            key={wallet.id}
                            className="relative px-5 py-4 transition-all duration-200 group hover:shadow-lg"
                        >
                            <div className="flex items-center justify-between">
                                <img
                                    className="w-auto h-8 shrink-0"
                                    src={wallet.logoSrc}
                                    alt=""
                                />
                                <p className="flex-1 ml-4 mr-auto text-base font-bold text-gray-900">
                                    {wallet.name}
                                </p>

                                <a
                                    href="#"
                                    title=""
                                    className="text-gray-400 transition-all duration-200 opacity-0 group-hover:opacity-100"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                    <span
                                        className="absolute inset-0"
                                        aria-hidden="true"
                                    ></span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WalletConnectOne
