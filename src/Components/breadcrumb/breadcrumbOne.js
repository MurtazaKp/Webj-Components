import Link from 'next/link'
import React from 'react'

// Define your data object
const breadcrumbData = {
    breadcrumbItems: [
        { label: 'Reports', link: '#', title: 'View Reports' },
        { label: 'Sales', link: '#', title: 'View Sales' },
        { label: 'Product Reports', link: '#', title: 'View Product Reports' },
    ],
}

const BreadcrumbOne = ({ breadcrumbItems }) => {
    return (
        <div className="py-12 bg-white">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <nav>
                    <ul className="flex items-center space-x-3">
                        <Link
                            href="/"
                            title=""
                            class="text-gray-500 hover:text-gray-900"
                        >
                            <svg
                                class="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                        </Link>
                        {breadcrumbItems?.map((item, index) => (
                            <li
                                key={index}
                                className={`flex items-center space-x-3 ${
                                    index === breadcrumbItems.length - 1
                                        ? 'text-gray-900'
                                        : 'text-gray-500 hover:text-gray-900'
                                }`}
                            >
                                {index !== breadcrumbItems.length  && (
                                    <svg
                                        className="flex-shrink-0 w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                )}
                                <a
                                    href={item.link}
                                    title={item.title}
                                    className="text-sm font-medium"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default BreadcrumbOne
