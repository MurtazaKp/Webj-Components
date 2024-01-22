import React from 'react'

const Badge = (type, label) => {
    return (
        <div className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-wrap gap-5 mt-8">
                    <span
                        className={classNames(
                            'text-xs font-semibold inline-flex items-center px-2.5 py-1 rounded-full',
                            {
                                'bg-gray-50 border-gray-300 text-gray-900':
                                    type === 'normal',
                                'bg-indigo-50 border-indigo-300 text-indigo-600 ':
                                    type === 'regular',
                                'bg-green-50 border-green-300 text-green-600':
                                    type === 'postitive',
                                'bg-yellow-50 border-yellow-300 text-yellow-600 ':
                                    type === 'new',
                                'bg-red-50 border-red-300 text-red-600 ':
                                    type === 'important',

                                'bg-indigo-50 border-indigo-300 text-indigo-600':
                                    type === 'number',
                            }
                        )}
                    >
                        {label}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Badge
