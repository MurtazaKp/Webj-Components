import React from 'react'

const TableListOne = ({ title, headers, transactions }) => {
    return (
        <div className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div>
                    <p className="text-base font-bold text-gray-900">{title}</p>
                </div>

                <div className="mt-6 ring-1 ring-gray-300 rounded-2xl overflow-x-auto">
                    <table className="min-w-full lg:divide-y lg:divide-gray-200">
                        <thead className="table-header-group">
                            <tr>
                                {headers.map((header, index) => (
                                    <td
                                        key={index}
                                        className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-normal"
                                    >
                                        {header}
                                    </td>
                                ))}
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {transactions.map((transaction) => (
                                <tr key={transaction.id}>
                                    <td
                                        width="50%"
                                        className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap"
                                    >
                                        {transaction.plan}
                                        <div className="mt-1">
                                            <p className="font-medium text-gray-500">
                                                {transaction.date}
                                            </p>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                                        {transaction.date}
                                    </td>

                                    <td
                                        className={`px-6 py-4 text-sm font-bold  text-gray-900 whitespace-nowrap`}
                                    >
                                        {transaction.amount}
                                    </td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                                        <div
                                            className={`inline-flex items-center justify-center `}
                                        >
                                            <svg
                                                className={`mr-1.5 h-2.5 w-2.5 `}
                                                style={{
                                                    fill: transaction.statusColor,
                                                }}
                                                fill="currentColor"
                                                viewBox="0 0 8 8"
                                            >
                                                <circle cx="4" cy="4" r="3" />
                                            </svg>
                                            {transaction.status}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TableListOne
