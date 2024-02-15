import React from 'react'
import CatagoryOne from './catagoryOne'

export default {
    title: 'Catagory',
}

const CatagoryOneTemplate = (args) => <CatagoryOne {...args} />

export const CatagoryOneStory = CatagoryOneTemplate.bind({})
CatagoryOneStory.args = {
    heading: 'Popular Categories',
    description: 'Choose from wide variety of items',
    allCatagoriesCta: {
        label: 'All Catagories',
        href: '/products',
    },
    catagories: [
        {
            imageSrc: {
                src: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/2/smart-watches.png',
                alt: 'Smart watch',
            },
            title: 'Smart Watches',
            link: '#',
        },
        {
            imageSrc: {
                src: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/2/wireless-earphone.png',
                alt: 'wireless earphone',
            },
            title: 'True Wireless Earphone',
            link: '#',
        },
        {
            imageSrc: {
                src: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/2/wireless-headphone.png',
                alt: 'headphone',
            },
            title: 'Wireless Headphone',
            link: '#',
        },
        {
            imageSrc: {
                src: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/2/smart-phone.png',
                alt: 'headphone',
            },
            title: 'Smart Phones',
            link: '#',
        },
        {
            imageSrc: {
                src: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/2/running-shoes.png',
                alt: 'headphone',
            },
            title: 'Running Shoes',
            link: '#',
        },
        {
            imageSrc: {
                src: 'https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/categories/2/leather-items.png',
                alt: 'leather items',
            },
            title: 'Leather Items',
            link: '#',
        },
    ],
}
