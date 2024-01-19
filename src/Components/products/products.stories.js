import React from 'react'
import ProductOne from './productsOne'

export default {
    title: 'Products',
}

const ProductsOneTemplate = (args) => <ProductOne {...args} />

export const ProductsOneStory = ProductsOneTemplate.bind({})
ProductsOneStory.args = {
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
            rating: [1, 1, 1, 1, 0],
            price: 99.0,
        },
        {
            id: 2,
            imageSrc:
                'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-2.png',
            title: 'Apple Smart Watch 6 - Special Edition',
            rating: [1, 1, 1, 1, 0],
            price: 299.0,
        },
        {
            id: 3,
            imageSrc:
                'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-3.png',
            label: 'Sale',
            title: 'Beylob 90 Speaker',
            rating: [0, 0, 1, 1, 1],
            price: 49.0,
            originalPrice: 99.0,
        },
        {
            id: 4,
            imageSrc:
                'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-4.png',
            title: 'Martino 75 Bluetooth',
            rating: [1, 1, 1, 1, 0],
            price: 79.0,
        },
        // Add more items as needed
    ],
}
