import {
    TicketsIcon,
    AgentsIcon,
    CustomersIcon,
    ProductsIcon,
    OrdersIcon,
    AnalyticsIcon,
    SettingsIcon,
    DashboardIcon,
} from './icon'
import React, { useState } from 'react'

// Import your icon components here
// import { DashboardIcon, TicketsIcon, AgentsIcon, CustomersIcon, ProductsIcon, OrdersIcon, AnalyticsIcon, SettingsIcon } from './Icons';

const VerticalMenu = ({ logo, menus, avatar }) => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('dashboard') // Default selected menu item

    const menuItems = {
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

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem.id)
        // Add logic to handle the click event for the menu item
    }

    const verticalMenuIcons = {
        dashboard: DashboardIcon,

        tickets: TicketsIcon,
        agents: AgentsIcon,
        customers: CustomersIcon,
        products: ProductsIcon,
        orders: OrdersIcon,
        analytics: AnalyticsIcon,
        settings: SettingsIcon,
        // Add more social media icons as needed
    }

    const MenuIcons = ({ icon }) => {
        const IconComponent = verticalMenuIcons[icon]
        return <IconComponent />
    }

    return (
        <div className="flex flex-1 bg-gray-50">
            <div className="hidden md:flex md:w-64 md:flex-col">
                <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white">
                    <div className="flex items-center flex-shrink-0 px-4">
                        <img
                            className="w-auto h-8"
                            src={logo.src}
                            alt={logo.alt}
                        />
                    </div>

                    <div className="px-4 mt-8">
                        <label htmlFor="" className="sr-only">
                            {' '}
                            Search{' '}
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-5 h-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    ></path>
                                </svg>
                            </div>

                            <input
                                type="search"
                                name=""
                                id=""
                                className="block w-full py-2 pl-10 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                                placeholder="Search here"
                            />
                        </div>
                    </div>

                    <div className="px-4 mt-6">
                        <hr className="border-gray-200" />
                    </div>

                    <div className="flex flex-col flex-1 px-3 mt-6">
                        <div className="space-y-4">
                            <nav className="flex-1 space-y-2">
                                {menus.map((menuItem) => (
                                    <a
                                        key={menuItem.id}
                                        href="#"
                                        className={`flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                                            selectedMenuItem === menuItem.id
                                                ? 'text-white bg-indigo-600 rounded-lg group'
                                                : 'text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group'
                                        }`}
                                        onClick={() =>
                                            handleMenuItemClick(menuItem)
                                        }
                                    >
                                        <MenuIcons {...menuItem} />
                                        {menuItem.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                        <hr className="mt-5" />
                        <div className="pb-4 mt-20">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-900 transition-all duration-200 rounded-lg hover:bg-gray-100"
                            >
                                <img
                                    className="flex-shrink-0 object-cover w-6 h-6 mr-3 rounded-full"
                                    src={avatar.image.src}
                                    alt={avatar.image.alt}
                                />
                                {avatar.name}
                                <svg
                                    className="w-5 h-5 ml-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col flex-1">
                <main>
                    <div className="py-6">
                        <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                            {/* ADD YOUR CONTENT HERE */}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default VerticalMenu
