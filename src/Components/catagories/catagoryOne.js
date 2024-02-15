import React, { useState } from 'react'

const CatagoryOne = ({
    heading,
    description,
    catagories,
    allCatagoriesCta,
}) => {
    const categoriesData = {
        heading: 'Popular Categories',
        description: 'Choose from wide variety of items',
        allCatagoriesCta: {
            label: 'All Catagories',
            href: '/products',
        },
        catagories: [
            {
                imageSrc:
                    'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/2/smart-watches.png',
                title: 'Smart Watches',
                link: '#',
            },
            {
                imageSrc:
                    'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/2/wireless-earphone.png',
                title: 'True Wireless Earphone',
                link: '#',
            },
            {
                imageSrc:
                    'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/2/wireless-headphone.png',
                title: 'Wireless Headphone',
                link: '#',
            },
            {
                imageSrc:
                    'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/2/smart-phones.png',
                title: 'Smart Phones',
                link: '#',
            },
            {
                imageSrc:
                    'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/2/runnies-shoes.png',
                title: 'Running Shoes',
                link: '#',
            },
            {
                imageSrc:
                    'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/2/leather-items.png',
                title: 'Leather Items',
                link: '#',
            },
        ],
    }

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-center justify-center text-center md:justify-between sm:text-left">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                            {heading}
                        </h2>
                        <p className="text-base text-gray-600 font-normal mt-2.5">
                            {description}
                        </p>
                    </div>

                    <div className="hidden md:block">
                        {allCatagoriesCta && (
                            <a
                                href={allCatagoriesCta.href}
                                title=""
                                className="inline-flex items-center p-1 -m-1 text-xs font-bold tracking-wide text-gray-400 uppercase transition-all duration-200 rounded hover:text-gray-900 focus:ring-2 focus:text-gray-900 focus:ring-gray-900 focus:ring-offset-2 focus:outline-none"
                                role="button"
                            >
                                {allCatagoriesCta.label}
                                <svg
                                    className="w-4 h-4 ml-1.5 -mt-0.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 5l7 7-7 7"
                                    ></path>
                                </svg>
                            </a>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-8 text-center sm:mt-12 sm:grid-cols-3 xl:grid-cols-6 sm:gap-6">
                    {catagories?.map((category, index) => (
                        <div
                            key={index}
                            className="relative transition-all duration-300 bg-gray-100 rounded-xl hover:shadow-xl hover:bg-white"
                        >
                            <div className="px-4 py-5 sm:p-6">
                                <img
                                    className="object-cover w-24 h-24 mx-auto border border-gray-200 rounded-full"
                                    src={category.imageSrc.src}
                                    alt=""
                                />
                                <p className="mt-5 text-base font-bold text-gray-900">
                                    <a href={category.link} title="">
                                        {category.title}
                                        <span
                                            className="absolute inset-0"
                                            aria-hidden="true"
                                        ></span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="block mt-8 text-center md:hidden">
                    <a
                        href="#"
                        title=""
                        className="inline-flex items-center p-1 -m-1 text-xs font-bold tracking-wide text-gray-400 uppercase transition-all duration-200 rounded hover:text-gray-900 focus:ring-2 focus:text-gray-900 focus:ring-gray-900 focus:ring-offset-2 focus:outline-none"
                        role="button"
                    >
                        All Categories
                        <svg
                            className="w-4 h-4 ml-1.5 -mt-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5l7 7-7 7"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CatagoryOne
