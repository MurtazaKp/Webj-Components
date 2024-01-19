// CustomerSelector.js

import { useState } from 'react'
import React from 'react'

const customers = {
    heading: 'Select your customer',
    customers: [
        {
            id: 1,
            name: 'Arlene McCoy',
            role: 'UI/UX Designer',
            imageUrl:
                'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/select-box/2/avatar-female.png',
        },
        {
            id: 2,
            name: 'Kathryn Murphy',
            role: 'Software Developer',
            imageUrl:
                'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/select-box/2/avatar-male.png',
        },
        {
            id: 3,
            name: 'Wade Warren',
            role: 'Team Leader',
            imageUrl:
                'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/select-box/2/avatar-female-2.png',
        },
        {
            id: 4,
            name: 'Bessie Cooper',
            role: 'Project Manager',
            imageUrl:
                'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/select-box/2/avatar-male-2.png',
        },
    ],
}

const SelectBox = ({ customers, heading }) => {
    const [select, setSelected] = useState([1, 3])

    const handleSelection = (id) => {
        if (select.includes(id)) {
            setSelected(select.filter((item) => item !== id))
        } else {
            setSelected([...select, id])
        }
    }

    return (
        <div className="py-12 bg-white">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div
                    className="max-w-sm mx-auto"
                    data-selected={select.join(',')}
                >
                    <p className="text-sm font-bold text-gray-900">{heading}</p>

                    <div className="mt-4 overflow-auto bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl">
                        {customers.map((customer) => (
                            <div
                                key={customer.id}
                                onClick={() => handleSelection(customer.id)}
                                className={`p-4 transition-all duration-200 bg-white cursor-pointer hover:bg-gray-50 ${
                                    select.includes(customer.id)
                                        ? 'bg-gray-50'
                                        : ''
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <img
                                        className="flex-shrink-0 object-cover rounded-full w-9 h-9"
                                        src={customer.imageUrl}
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
                                    <svg
                                        className={`w-6 h-6 ml-4 text-indigo-600 ${
                                            select.includes(customer.id)
                                                ? 'block'
                                                : 'hidden'
                                        }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectBox
