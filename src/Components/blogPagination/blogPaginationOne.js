import React, { useState } from 'react'

const PaginationOne = ({ pageNumbers }) => {
    const [currentPage, setCurrentPage] = useState(1)

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    // Assuming you have a total number of pages, replace 4 with the actual total number
    const totalPages = 4

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    // Define your data object
    const paginationData = {
        pageNumbers: [1, 2, 3, 4], // Replace with your actual page numbers
    }

    return (
        <div className="py-12 bg-white sm:py-16">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-center justify-center space-x-2">
                    <a
                        href="#"
                        onClick={handlePrevPage}
                        className="inline-flex items-center justify-center text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md w-9 h-9 hover:bg-gray-50"
                    >
                        <span className="sr-only">Previous</span>
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
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </a>

                    {/* Render your page numbers dynamically based on your data */}
                    {pageNumbers.map((page) => (
                        <a
                            key={page}
                            href="#"
                            onClick={() => handlePageChange(page)}
                            className={`inline-flex items-center justify-center text-base font-semibold ${
                                currentPage === page
                                    ? 'text-white bg-gray-900'
                                    : 'text-gray-600 bg-white'
                            } border border-gray-300 rounded-md sm:text-sm w-9 h-9 `}
                        >
                            {page}
                        </a>
                    ))}

                    <a
                        href="#"
                        onClick={handleNextPage}
                        className="inline-flex items-center justify-center text-gray-600 transition-all duration-200 bg-white border border-gray-300 rounded-md w-9 h-9 hover:bg-gray-50"
                    >
                        <span className="sr-only">Next</span>
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
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PaginationOne
