import React, { useState } from 'react'

const TableStackOne = ({ heading, description, CustomerList }) => {
    // Declare and initialize the data
    const tableStackData = {
        heading: 'Customer List',
        description: 'Lorem ipsum dolor sit amet, consectetur adipis.',
        customerList: [
            {
                id: 1,
                name: 'Dianne Russell',
                role: 'Project Manager',
                avatar: 'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-stacked/4/avatar-female.png',
            },
            {
                id: 2,
                name: 'Devon Lane',
                role: 'Ethical Hacker',
                avatar: 'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-stacked/4/avatar-male.png',
            },
            {
                id: 3,
                name: 'Ralph Edwards',
                role: 'UI/UX Designer',
                avatar: 'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-stacked/4/avatar-male-2.png',
            },
            {
                id: 4,
                name: 'Bessie Cooper',
                role: 'Scrum Master',
                avatar: 'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-stacked/4/avatar-female-2.png',
            },
        ],
    }

    return (
        <div className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto overflow-hidden bg-gray-100 rounded-xl">
                    <div className="px-4 py-5 sm:p-6">
                        <div>
                            <p className="text-lg font-bold text-gray-900">
                                {heading}
                            </p>
                            <p className="mt-1 text-sm font-medium text-gray-500">
                                {description}
                            </p>
                        </div>

                        <div className="mt-6 space-y-3">
                            {CustomerList?.map((customer) => (
                                <div
                                    key={customer.id}
                                    className="overflow-hidden bg-white shadow-sm rounded-xl"
                                >
                                    <div className="px-4 py-5 sm:p-6">
                                        <div className="flex items-center justify-between space-x-5">
                                            <div className="flex items-center flex-1">
                                                <img
                                                    className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                                                    src={customer.avatar.src}
                                                    alt=""
                                                />
                                                <div className="flex-1 min-w-0 ml-4">
                                                    <p className="text-sm font-bold text-gray-900 truncate">
                                                        {customer.name}
                                                    </p>
                                                    <p className="mt-1 text-sm font-medium text-gray-500 truncate">
                                                        {customer.role}
                                                    </p>
                                                </div>
                                            </div>
                                            {/* Rest of your customer card code */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableStackOne
