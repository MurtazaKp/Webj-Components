import React, { useState } from 'react'

const ProductOne = ({ heading, description, products }) => {
    // Declare state to store featured items data
    const featuredItems = {
        heading: '  Our featured items',
        description:
            'lorem ipsum deolor setlorem ipsum deolor setlorem ipsum deolor setlorem ipsum deolor set ',
        products: [
            {
                id: 1,
                imageSrc:
                    'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-1.png',
                label: 'New',
                title: 'Beoplay M5 Bluetooth Speaker',
                price: 99.0,
            },
            {
                id: 2,
                imageSrc:
                    'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-2.png',
                title: 'Apple Smart Watch 6 - Special Edition',
                price: 299.0,
            },
            {
                id: 3,
                imageSrc:
                    'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-3.png',
                label: 'Sale',
                title: 'Beylob 90 Speaker',
                price: 49.0,
                originalPrice: 99.0,
            },
            {
                id: 4,
                imageSrc:
                    'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-4.png',
                title: 'Martino 75 Bluetooth',
                price: 79.0,
            },
        ],
    }

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        {heading}
                    </h2>
                    <p className="mt-4 text-base font-normal leading-7 text-gray-600">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
                    {/* Map through the featuredItems array and create a card for each item */}
                    {products.map((item) => (
                        <div key={item.id} className="relative group">
                            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                                <img
                                    className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                                    src={item.imageSrc}
                                    alt=""
                                />
                            </div>
                            {item.label && (
                                <div className="absolute left-3 top-3">
                                    <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-white uppercase bg-gray-900 rounded-full">
                                        {item.label}
                                    </p>
                                </div>
                            )}
                            <div className="flex items-start justify-between mt-4 space-x-4">
                                <div>
                                    <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                                        <a href="#" title={item.title}>
                                            {item.title}
                                            <span
                                                className="absolute inset-0"
                                                aria-hidden="true"
                                            ></span>
                                        </a>
                                    </h3>
                                    <div className="flex items-center mt-2.5 space-x-px">
                                        {/* Render rating stars based on the item's rating array */}

                                        {Array.from({
                                            length: item.rating,
                                        }).map((_, index) => (
                                            <svg
                                                key={index}
                                                className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-xs font-medium text-gray-900 sm:text-sm md:text-base">
                                    ${item.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductOne
