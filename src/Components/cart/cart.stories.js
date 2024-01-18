import React from 'react'

import CartOne from './cartOne'

export default {
    title: 'Cart',
}

const CartOneTemplate = (args) => <CartOne {...args} />

export const CartOneStory = CartOneTemplate.bind({})
CartOneStory.args = {
    mainHeading: 'Your Cart',
    cartItemsText: ' items in cart',
    shoppingButton: {
        label: 'Continue Shopping',
        href: '/Products',
    },
    paymentButton: {
        label: 'Confirm Payment',
        href: '/payment-details',
    },
    itemsInCart: [
        {
            id: 1,
            name: 'Apple Watch Series 7 - 44mm',
            color: 'Golden',
            price: 259.0,
            image: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-page/1/product-1.png',
        },
        {
            id: 2,
            name: 'Beylob 90 Speaker',
            color: 'Space Gray',
            price: 99.0,
            image: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-page/1/product-2.png',
        },
        {
            id: 3,
            name: 'Beoplay M5 Bluetooth Speaker',
            color: 'Silver Collection',
            price: 129.0,
            image: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-page/1/product-3.png',
        },
        // Add more items as needed
    ],
    paymentDetails: [
        { item: 'Subtotal', amount: 589 },
        { item: 'Tax', amount: 0 },
        { item: 'Shipping', amount: 10 },
        { item: 'Total', amount: 599 },
    ],
}
