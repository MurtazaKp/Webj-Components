import React, { useState } from 'react'

const ModalOne = () => {
    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <>
            <div className="bg-gray-100 h-96">
                <div className="flex items-center justify-center w-full h-full px-4 py-5 sm:p-6">
                    <button
                        className="inline-flex absolute  items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                        onClick={openModal}
                    >
                        Open Modal
                    </button>
                    {isOpen && (
                        <div className="w-full max-w-sm absolute bg-white shadow-lg rounded-xl">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="text-center">
                                    <svg
                                        className="w-16 h-16 mx-auto text-gray-900"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <p className="mt-5 text-xl font-bold text-gray-900">
                                        Task created successfully
                                    </p>
                                    <p className="mt-3 text-sm font-medium text-gray-500">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit.
                                    </p>
                                    <div className="mt-8">
                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-indigo-600 transition-all duration-200 bg-indigo-100 border border-transparent rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-600"
                                        >
                                            Ok, Thanks!
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ModalOne
