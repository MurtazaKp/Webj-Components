import React, { useState } from 'react'

const NotificationOne = ({ fileName, uploadText, headingText }) => {
    const [isVisible, setIsVisible] = useState(true)

    const closeSuccessMessage = () => {
        setIsVisible(false)
    }
    const Notification = {
        headingText: '   Upload Successfully',
        uploadText: 'was uploaded successfully',
        fileName: 'logo.png',
    }

    return (
        <>
            <div className="h-64 bg-gray-100">
                {isVisible && (
                    <div className="flex items-start justify-end w-full h-full px-4 py-5 sm:p-6">
                        <div className="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
                            <div className="p-4">
                                <div className="flex items-start">
                                    <svg
                                        className="flex-shrink-0 text-indigo-600 w-7 h-7"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                        />
                                    </svg>

                                    <div className="ml-4 w-0 flex-1 pt-0.5">
                                        <p className="text-sm font-bold text-gray-900">
                                            {headingText}
                                        </p>
                                        <p className="mt-1 text-sm font-medium text-gray-500">
                                            {fileName} {uploadText}
                                        </p>
                                    </div>

                                    <div className="flex flex-shrink-0 ml-4">
                                        <button
                                            className="inline-flex text-gray-300 transition-all bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 duration-200 focus:text-gray-500 focus:ring-offset-2 focus:ring-indigo-600"
                                            onClick={closeSuccessMessage}
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
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default NotificationOne
