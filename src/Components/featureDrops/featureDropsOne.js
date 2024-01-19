import React from 'react'

const FeatureDropsOne = ({ heading, description, link, items }) => {
    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center lg:flex lg:text-left lg:items-start">
                    <div className="max-w-xs mx-auto lg:mx-0">
                        <h2 className="text-2xl font-bold text-gray-900">
                            {heading}
                        </h2>
                    </div>

                    <div className="max-w-xs mx-auto mt-6 lg:ml-24 lg:max-w-none lg:mx-0 lg:mt-0">
                        <p className="text-base font-medium text-gray-500">
                            {description}
                        </p>
                        <div className="mt-4">
                            <a
                                href={link.url}
                                title=""
                                className="pb-2 text-sm font-medium text-gray-900 transition-all duration-200 border-b border-gray-900"
                            >
                                {link.text}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 px-6 mt-12 sm:mt-16 sm:px-0 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="relative overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 rounded-lg hover:shadow-lg group hover:-translate-y-1"
                        >
                            <div className="overflow-hidden aspect-w-3 aspect-h-2">
                                <img
                                    className="object-cover w-full h-full transition-all duration-300 origin-top transform group-hover:scale-110"
                                    src={item.imageUrl.src}
                                    alt=""
                                />
                            </div>

                            <div className="p-4">
                                <div className="flex items-start justify-between space-x-6">
                                    <p className="flex-1 text-base font-bold text-gray-900">
                                        <a href="#" title="">
                                            {item.title}
                                            <span
                                                className="absolute inset-0"
                                                aria-hidden="true"
                                            ></span>
                                        </a>
                                    </p>

                                    <div className="shrink-0">
                                        <p className="text-sm font-medium text-gray-500">
                                            Floor
                                        </p>
                                        <p className="text-sm font-bold text-gray-900 mt-0.5">
                                            {item.floor}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 border-t border-gray-100">
                                <div className="grid items-center grid-cols-4 gap-2">
                                    <div className="col-span-2">
                                        <div className="flex -space-x-2 overflow-hidden">
                                            {item.avatars.map(
                                                (avatar, index) => (
                                                    <img
                                                        key={index}
                                                        className="inline-block w-8 h-8 rounded-full ring-2 ring-white"
                                                        src={avatar}
                                                        alt="avatar"
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium text-gray-500">
                                            Stock
                                        </p>
                                        <p className="text-sm font-bold text-gray-900 mt-0.5">
                                            {item.stock}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium text-gray-500">
                                            Bid
                                        </p>
                                        <p className="text-sm font-bold text-rose-500 mt-0.5">
                                            {item.bid}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeatureDropsOne
