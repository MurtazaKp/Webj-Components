import React, { useState } from 'react'

const DropdownOne = ({ dropdownItems }) => {
    const [search, setSearch] = useState('')

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    const dropdownData = {
        dropdownItems: ['User profile', 'Email settings', 'Product roadmap'],
    }

    const filteredItems = dropdownItems.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="py-8 bg-white">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-lg mx-auto">
                    <div className="relative mt-2">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>

                        <input
                            type="text"
                            value={search}
                            onChange={handleInputChange}
                            className={`border block w-full py-2 pl-8 pr-2 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm ${
                                search.length > 0 ? 'rounded-b-none' : ''
                            }`}
                            placeholder="Search here"
                        />
                    </div>
                    {search.length > 0 && filteredItems.length > 0 && (
                        <div className="border border-gray-300 rounded-lg rounded-t-none border-t-0 text-gray-700 text-sm">
                            <div className="p-2 px-4 border-b border-gray-300">
                                Searching for:{' '}
                                <span className="font-medium">{search}</span>
                            </div>
                            <ul className="flex flex-col p-2">
                                {filteredItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="w-full rounded-md p-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DropdownOne
