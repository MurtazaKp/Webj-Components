import React, { useState } from 'react'

const MintApeOne = ({
    heading,
    subText,
    imageSrc,
    selectQuantityText,
    mintButton,
    mintCostCurrency,
    mintCostText,
    mintCostValue,
    walletBalanceText,
    walletBalanceValue,
}) => {
    const [quantity, setQuantity] = useState(1)

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    // Define your data object
    const mintData = {
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

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">
                        {heading}
                    </h2>
                    <p className="mt-4 text-base font-medium text-gray-500">
                        {subText}
                    </p>
                </div>

                <div className="max-w-xs mx-auto mt-10 overflow-hidden bg-white shadow rounded-xl">
                    <div className="p-6 sm:p-8">
                        <div>
                            <img
                                className="object-cover w-full h-auto rounded-xl"
                                src={imageSrc.src}
                                alt={imageSrc.alt}
                            />
                        </div>

                        <div className="mt-6 space-y-5">
                            <div className="flex items-center justify-between">
                                <span className="text-base font-medium text-gray-900">
                                    {selectQuantityText}
                                </span>

                                <div className="flex items-center justify-end p-1 space-x-5 border border-gray-100 rounded-md">
                                    <button
                                        type="button"
                                        onClick={handleDecreaseQuantity}
                                        className="p-1 transition-all duration-200 bg-white border border-gray-200 rounded-md hover:bg-gray-50"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M18 12H6"
                                            />
                                        </svg>
                                    </button>

                                    <span className="text-base font-semibold text-gray-900">
                                        {quantity}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={handleIncreaseQuantity}
                                        className="p-1 transition-all duration-200 bg-white border border-gray-200 rounded-md hover:bg-gray-50"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-base font-medium text-gray-900">
                                    {mintCostText}
                                </span>

                                <div className="px-4 py-2 border border-gray-200 rounded-lg">
                                    <div className="flex items-center justify-between space-x-8">
                                        <span className="text-base font-medium text-gray-900">
                                            {mintCostValue}
                                        </span>

                                        <span className="text-base font-medium text-gray-400">
                                            {mintCostCurrency}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-gray-900 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                            >
                                {mintButton}
                            </button>

                            <div className="text-center">
                                <p className="text-base font-medium text-gray-500">
                                    {walletBalanceText}{' '}
                                    <span className="text-gray-900">
                                        {walletBalanceValue}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MintApeOne
