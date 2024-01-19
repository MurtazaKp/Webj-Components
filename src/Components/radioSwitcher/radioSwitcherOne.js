import React from 'react'

const RadioSwitcherOne = ({ tools, heading }) => {
    const RadioSwitcherData = {
        heading: ' Select a tool',
        tools: [
            {
                id: 'mailchimp',
                name: 'Mailchimp',
                logoSrc:
                    'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/radio-switcher/3/mailchimp-logo.png',
                description: 'Email Marketing',
            },
            {
                id: 'telegram',
                name: 'Telegram',
                logoSrc:
                    'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/radio-switcher/3/telegram-logo.png',
                description: 'Communication',
            },
            {
                id: 'zapier',
                name: 'Zapier',
                logoSrc:
                    'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/radio-switcher/3/zapier-logo.png',
                description: 'Automation',
            },
            {
                id: 'dropbox',
                name: 'Dropbox',
                logoSrc:
                    'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/radio-switcher/3/dropbox-logo.png',
                description: 'Cloud Storage',
            },
        ],
    }

    return (
        <div className="py-12 bg-white">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-sm mx-auto">
                    <p className="text-sm font-bold text-gray-900">{heading}</p>

                    <div className="mt-4 overflow-auto bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl">
                        {tools.map((tool) => (
                            <div
                                key={tool.id}
                                className="p-4 transition-all duration-200 bg-white cursor-pointer hover:bg-gray-50"
                            >
                                <div className="flex items-center">
                                    <label
                                        className="flex items-center cursor-pointer"
                                        htmlFor={tool.id}
                                    >
                                        <input
                                            type="radio"
                                            name="tool"
                                            id={tool.id}
                                            className="w-5 h-5 text-indigo-600 border-gray-300 focus:ring-0"
                                        />

                                        <div className="flex items-center ml-5">
                                            <img
                                                className="flex-shrink-0 object-cover rounded-full w-9 h-9"
                                                src={tool.logoSrc}
                                                alt={tool.name}
                                            />

                                            <div className="ml-4">
                                                <p className="text-sm font-bold text-gray-900">
                                                    {tool.name}
                                                </p>
                                                <p className="mt-1 text-sm font-medium text-gray-500">
                                                    {tool.description}
                                                </p>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RadioSwitcherOne
