import React from 'react'

const TableGrid = () => {
    // Define your data array
    const componentData = {
        heading: 'Latest Payments',
        payments: [
            {
                id: 1,
                name: 'Cody Fisher',
                avatar: 'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-grid/1/avatar-female.png',
                product: 'Clarity Landing UI Kit',
                amount: '$49.00',
                status: 'Complete',
                timestamp: '2 hours ago',
            },
            {
                id: 2,
                name: 'Floyd Miles',
                avatar: 'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-grid/1/avatar-male.png',
                product: 'Clarity eCommerce UI Kit',
                amount: '$99.00',
                status: 'Pending',
                timestamp: '3 hours ago',
            },
            {
                id: 3,
                name: 'Savannah Nguyen',
                avatar: 'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-grid/1/avatar-male-2.png',
                product: 'Clarity Landing UI Kit',
                amount: '$49.00',
                status: 'Complete',
                timestamp: '5 days ago',
            },
        ],
    }

    return (
        <div className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto">
                    <div>
                        <h2 className="text-lg font-bold text-gray-900">
                            {componentData.heading}
                        </h2>
                    </div>

                    <ul className="mt-6 space-y-4">
                        {componentData.payments.map((payment) => (
                            <li
                                key={payment.id}
                                className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl"
                            >
                                <div className="px-5 py-4">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center">
                                            <img
                                                className="flex-shrink-0 object-cover rounded-full w-9 h-9"
                                                src={payment.avatar}
                                                alt={payment.name}
                                            />
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-gray-500">
                                                    {payment.name}
                                                </p>
                                                <p className="mt-1 text-sm font-bold text-gray-900">
                                                    {payment.product}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-sm font-medium text-right text-gray-900">
                                            {payment.amount}
                                        </p>
                                    </div>
                                </div>

                                <div className="px-5 py-4">
                                    <div className="flex items-center justify-between">
                                        <span
                                            className={`inline-flex items-center text-sm font-medium text-gray-900 ${
                                                payment.status === 'Complete'
                                                    ? 'text-green-500'
                                                    : 'text-amber-400'
                                            }`}
                                        >
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 flex-shrink-0 mr-2"></div>
                                            {payment.status}
                                        </span>

                                        <p className="text-sm font-medium text-right text-gray-500">
                                            {payment.timestamp}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TableGrid
