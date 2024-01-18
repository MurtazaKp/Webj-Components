import React from 'react'

const Steps = ({ steps }) => {
    const stepsData = [
        {
            title: 'Create Free Account',
            description:
                'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.',
        },
        {
            title: 'Setup Your Profile',
            description:
                'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.',
        },
        {
            title: 'Start Monitoring',
            description:
                'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.',
        },
    ]

    return (
        <div className="py-12 bg-white">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <nav className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:justify-between md:space-x-6 md:items-center">
                    {steps.map((step, index) => (
                        <a
                            key={index}
                            href="#"
                            title=""
                            className="flex items-start"
                        >
                            <span
                                className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm font-bold ${
                                    index !== 0
                                        ? 'text-gray-500 bg-white border border-gray-200'
                                        : 'text-white bg-indigo-600 border-transparent'
                                } rounded-full`}
                            >
                                {index + 1}
                            </span>
                            <div className="flex-1 ml-5">
                                <p
                                    className={`text-base font-bold ${
                                        index === steps.length - 1
                                            ? 'text-gray-500'
                                            : 'text-gray-900'
                                    }`}
                                >
                                    {step.title}
                                </p>
                                <p
                                    className={`mt-2 font-medium ${
                                        index === steps.length - 1
                                            ? 'text-gray-500'
                                            : 'text-gray-500'
                                    }`}
                                >
                                    {step.description}
                                </p>
                            </div>
                            {index < steps.length - 1 && (
                                <svg
                                    className="flex-shrink-0 hidden w-12 h-12 text-gray-200 md:block"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            )}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export default Steps
