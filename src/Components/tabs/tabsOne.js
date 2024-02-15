import React, { useState } from 'react'

const TabsOne = ({ tabs }) => {
    const [activeLink, setActiveLink] = useState('Dashboard')

    const handleLinkClick = (link) => {
        setActiveLink(link)
        // Add any additional logic you want to perform on link click
    }

    const tabData = {
        tabs: [
            { id: 1, label: 'Dashboard' },
            { id: 2, label: 'My Account' },
            { id: 3, label: 'Downloads' },
            { id: 4, label: 'Licenses' },
            { id: 5, label: 'Settings' },
            // Add more links as needed
        ],
    }

    return (
        <div className="py-12 bg-white">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="w-full pb-1 overflow-x-auto">
                    <div className="border-b border-gray-200">
                        <nav className="flex -mb-px space-x-10">
                            {tabs?.map((link) => (
                                <a
                                    key={link.id}
                                    href="#"
                                    className={`py-4 text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap ${
                                        activeLink === link.label
                                            ? 'text-indigo-600 border-indigo-600'
                                            : 'text-gray-900 border-transparent hover:border-gray-300'
                                    }`}
                                    onClick={() => handleLinkClick(link.label)}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabsOne
