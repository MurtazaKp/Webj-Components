import React from 'react'

const ProductOverviewOne = ({ imageUrl, productFeatures }) => {
    // Declare and initialize the data
    const productOverview = {
        imageUrl: {
            src: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/product-overview/1/product-1.png',
            alt: 'image overvirew',
        },
        productFeatures: [
            {
                title: 'Get your superpower',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet.',
            },
            {
                title: 'Superfast 5G, more faster than ever',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet.',
            },
            {
                title: 'New year, new design',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet.',
            },
        ],
    }

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center max-w-6xl grid-cols-1 mx-auto gap-y-8 md:gap-y-10 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-24">
                    <div>
                        <img
                            className="object-cover w-full"
                            src={imageUrl.src}
                            alt={imageUrl.alt}
                        />
                    </div>

                    <div className="xl:pr-24">
                        <div className="flow-root">
                            <ul className="-my-6 divide-y divide-gray-200 xl:-my-8">
                                {productFeatures.map((feature, index) => (
                                    <li key={index} className="py-5 xl:py-7">
                                        <p className="text-lg font-bold text-gray-900">
                                            {feature.title}
                                        </p>
                                        <p className="mt-5 text-sm font-normal text-gray-600">
                                            {feature.description}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductOverviewOne
