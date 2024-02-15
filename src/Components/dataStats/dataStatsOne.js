import React from 'react'

const StatsDataOne = ({ DataStats }) => {
    const statsDataOne = {
        DataStats: [
            {
                label: "Today's Sale",
                value: '$12,426',
                percentage: '+36%',
            },
            {
                label: 'Active Users',
                value: '4,395',
                percentage: '+36%',
            },
            {
                label: "Today's Revenue",
                value: '$10,593',
                percentage: '+36%',
            },
            {
                label: 'Growth Sale',
                value: '$1,940',
                percentage: '+36%',
            },
        ],
    }

    return (
        <div className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid max-w-5xl grid-cols-1 gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-4">
                    {DataStats?.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl"
                        >
                            <div className="px-5 py-4">
                                <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">
                                    {stat.label}
                                </p>
                                <div className="flex items-center justify-between mt-3">
                                    <p className="text-xl font-bold text-gray-900">
                                        {stat.value}
                                    </p>
                                    <span className="inline-flex items-center text-sm font-semibold text-green-500">
                                        {stat.percentage}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-3 h-3 ml-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="3"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M7 11l5-5m0 0l5 5m-5-5v12"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StatsDataOne
