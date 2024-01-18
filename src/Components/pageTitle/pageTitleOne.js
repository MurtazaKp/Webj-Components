import React from 'react'

const PageTitleOne = ({ heading, breadcrumbs }) => {
    const navData = {
        heading: 'Customer Review',
        breadcrumbs: [
            { icon: true, text: 'Analytics' },
            { icon: true, text: 'Customer Review' },
        ],
    }

    return (
        <div className="py-12 bg-white">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <nav>
                    <ul className="flex items-center space-x-3">
                        <li>
                            <a
                                href="#"
                                title=""
                                className="text-gray-500 hover:text-gray-900"
                            >
                                <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                            </a>
                        </li>

                        {breadcrumbs.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center space-x-3"
                            >
                                {item.icon && (
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                    </svg>
                                )}

                                <a
                                    href="#"
                                    title=""
                                    className="text-sm font-medium text-gray-500 hover:text-gray-900"
                                >
                                    {' '}
                                    {item.text}{' '}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <p className="mt-5 text-lg font-bold text-gray-900">
                    {heading}
                </p>

                <hr className="mt-8 border-gray-200" />
            </div>
        </div>
    )
}

export default PageTitleOne
