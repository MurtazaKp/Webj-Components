import React from 'react'

const MintSuccessOne = ({
    title,
    subtitle,
    imageSrc,
    openseaButton,
    apeName,
    owner,
    assetId,
    currentPrice,
    description,
}) => {
    // Define the data
    const data = {
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

    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-md mx-auto text-center">
                    <svg
                        className="w-12 h-12 mx-auto text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <p className="mt-6 text-xl font-bold text-gray-900">
                        {title}
                    </p>
                    <p className="mt-2 text-base font-medium text-gray-500">
                        {subtitle}
                    </p>
                </div>

                <div className="max-w-xl mx-auto mt-8 overflow-hidden bg-white shadow-xl md:mt-12 rounded-xl shadow-gray-400/10">
                    <div className="p-6">
                        <div className="sm:flex">
                            <div className="shrink-0">
                                <img
                                    className="object-cover h-auto mx-auto rounded-xl w-52 sm:mx-0"
                                    src={imageSrc.src}
                                    alt={imageSrc.alt}
                                />

                                <div className="mt-5">
                                    <a
                                        href={openseaButton.href}
                                        title=""
                                        className="inline-flex items-center justify-center w-full px-5 py-3 text-xs font-bold tracking-widest text-gray-500 uppercase transition-all duration-200 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-gray-100 hover:text-gray-900"
                                        role="button"
                                    >
                                        {openseaButton.label}
                                    </a>
                                </div>
                            </div>

                            <div className="mt-6 sm:ml-8 sm:mt-0">
                                <p className="text-2xl font-bold text-gray-900">
                                    {apeName}
                                </p>

                                <ul className="mt-6 space-y-5">
                                    <li className="flex items-center justify-between">
                                        <p className="text-xs font-bold tracking-wide text-gray-500 uppercase">
                                            {owner.ownerText}
                                        </p>
                                        <div className="flex items-end justify-end">
                                            <div className="relative inline-flex items-center justify-center shrink-0 w-7 h-7">
                                                <div className="absolute inset-0">
                                                    <img
                                                        className="w-full h-full object-coveer"
                                                        src={owner.avatar.src}
                                                        alt={owner.avatar.alt}
                                                    />
                                                </div>
                                                <div className="relative text-xs font-bold text-white uppercase">
                                                    {owner.ownerName}
                                                </div>
                                            </div>
                                            <p className="text-base font-bold text-gray-900">
                                                {owner.ownerAddress}
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex items-center justify-between">
                                        <p className="text-xs font-bold tracking-wide text-gray-500 uppercase">
                                            {assetId.label}
                                        </p>
                                        <p className="text-base font-bold text-gray-900">
                                            {assetId.value}
                                        </p>
                                    </li>

                                    <li className="flex items-center justify-between">
                                        <p className="text-xs font-bold tracking-wide text-gray-500 uppercase">
                                            {currentPrice.label}
                                        </p>
                                        <p className="text-base font-bold text-gray-900">
                                            {currentPrice.value}
                                        </p>
                                    </li>
                                </ul>

                                <p className="mt-6 text-xs font-bold tracking-wide text-gray-500 uppercase">
                                    {description.label}
                                </p>
                                <p className="mt-4 text-sm font-medium text-gray-900">
                                    {description.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MintSuccessOne
