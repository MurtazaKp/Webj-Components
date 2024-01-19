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
