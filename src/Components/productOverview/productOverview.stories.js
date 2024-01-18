import React from 'react'
import ProductOverviewOne from './productOverviewOne'

export default {
    title: 'ProductOverview',
}

const ProductOverviewOneTemplate = (args) => <ProductOverviewOne {...args} />

export const ProductOverviewOneStory = ProductOverviewOneTemplate.bind({})

ProductOverviewOneStory.args = {
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
