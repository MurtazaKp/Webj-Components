import React from 'react'
import VerticalMenu from './verticalMenuOne'

export default {
    title: 'Vertical Menu',
}

const VerticalMenuOneTemplate = (args) => <VerticalMenu {...args} />

export const VerticalMenuOneStory = VerticalMenuOneTemplate.bind({})
VerticalMenuOneStory.args = {
    logo: {
        src: 'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo.svg',
        alt: 'logo image',
    },
    menus: [
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
        { id: 'tickets', label: 'Tickets', icon: 'tickets' },
        { id: 'agents', label: 'Agents', icon: 'agents' },
        { id: 'customers', label: 'Customers', icon: 'customers' },
        { id: 'products', label: 'Products', icon: 'products' },
        { id: 'orders', label: 'Orders', icon: 'orders' },
        { id: 'analytics', label: 'Analytics', icon: 'analytics' },
        { id: 'settings', label: 'Settings', icon: 'settings' },
    ],
    avatar: {
        name: 'Jones Jacob',
        image: {
            src: 'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/vertical-menu/2/avatar-male.png',
            alt: 'avatar image',
        },
    },
}
