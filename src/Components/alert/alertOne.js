import React, { useState } from 'react'

const AlertOne = ({ alertText }) => {
    const [isOpen, setIsOpen] = useState(true)

    const closeNotification = () => {
        setIsOpen(false)
    }

    const alertData = {
        alertText: ' New Item has been created',
    }

    return (
        <>
            {isOpen && (
                <div className="py-12 bg-white">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="bg-green-100 rounded-lg">
                            <div className="p-3">
                                <div className="flex items-center justify-between">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-green-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <p className="ml-3 text-sm font-medium text-green-900">
                                        {alertText}
                                    </p>

                                    <div className="pl-3 ml-auto">
                                        <button
                                            type="button"
                                            className="inline-flex bg-green-100 rounded-lg -m1.5 p-1.5 text-green-500 hover:bg-green-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-100 focus:ring-green-500"
                                            onClick={closeNotification}
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AlertOne
