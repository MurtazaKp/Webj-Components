import React from 'react'

const ApproveTransactionOne = ({
    title,
    description,
    product,
    sumbitButtonCta,
}) => {
    const transactionData = {
        title: 'Approve This Transaction?',
        description: 'Are you sure minting this token? You must be awesome.',
        product: {
            name: 'Easy Sweep',
            quantityText: '  Quantity',
            quantity: 1,
            image: {
                src: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/approve-transaction/2/product-thumbnail.png',
                alt: 'Product Thumbnail',
            },
        },
        sumbitButtonCta: {
            label: 'Submit',
        },
    }

    const handleSubmit = () => {
        // Add your logic for submitting the transaction here
        console.log('Transaction submitted!')
    }

    return (
        <div className="grid px-4 py-24 bg-gray-600 sm:px-6 lg:px-8 place-items-center">
            <div className="relative w-full max-w-md mx-auto overflow-hidden bg-white rounded-xl">
                <div className="absolute top-0 right-0 pt-3 pr-3">
                    <button
                        type="button"
                        className="p-1 text-gray-400 transition-all duration-200 bg-white rounded-md hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                    >
                        <span className="sr-only">Close</span>
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>

                <div className="px-6 py-8 md:p-8 xl:p-12">
                    <div className="text-center">
                        <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                            {title}
                        </p>
                        <p className="mt-2 text-base font-medium text-gray-500">
                            {description}
                        </p>
                    </div>

                    <div className="mt-8 bg-white border border-gray-200 rounded-xl">
                        <div className="p-4">
                            <div className="flex items-center">
                                <img
                                    className="object-cover w-auto rounded-lg shrink-0 h-14"
                                    src={product.image.src}
                                    alt={product.image.alt}
                                />

                                <div className="flex-1 ml-4">
                                    <p className="text-base font-bold text-gray-900">
                                        {product.name}
                                    </p>
                                    <p className="mt-1 text-sm font-medium text-gray-500">
                                        {product.quantityText}
                                        {product.quantity}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 bg-gray-900 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                        >
                            {sumbitButtonCta.label}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApproveTransactionOne
