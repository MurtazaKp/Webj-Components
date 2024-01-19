import React, { useState } from 'react'

const PaginationOne = ({ pageNumbers }) => {
    const [currentPage, setCurrentPage] = useState(2) // Starting from page 2 for illustration

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    // Assuming you have a total number of pages, replace 5 with the actual total number
    const totalPages = 5

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div className="py-6 bg-white">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <nav className="relative flex justify-center  rounded-md">
                    <a
                        href="#"
                        onClick={handlePrevPage}
                        title="Previous"
                        className="relative inline-flex items-center justify-center px-3 py-2 text-sm font-bold text-gray-400 bg-white border border-gray-400 w-9 rounded-l-md"
                    >
                        <span className="sr-only">Previous</span>
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </a>

                    {/* Render page numbers dynamically based on your data */}
                    {pageNumbers.map((page) => (
                        <a
                            key={page}
                            href="#"
                            onClick={() => handlePageChange(page)}
                            title={`Page ${page}`}
                            className={`relative z-10 flex items-center justify-center px-4 py-2 text-sm font-bold ${
                                currentPage === page
                                    ? 'text-gray-900 bg-white border border-gray-900 '
                                    : 'text-gray-400 bg-white border border-gray-400'
                            } w-9`}
                        >
                            {page}
                        </a>
                    ))}

                    <a
                        href="#"
                        onClick={handleNextPage}
                        title="Next"
                        className="relative inline-flex items-center justify-center px-3 py-2 text-sm font-bold text-gray-400 bg-white border border-gray-400  w-9 rounded-r-md"
                    >
                        <span className="sr-only">Next</span>
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default PaginationOne
