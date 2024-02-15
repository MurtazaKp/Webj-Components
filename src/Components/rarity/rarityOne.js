import React from 'react'

const RarityOne = ({
    imageUrl,
    openSeaButton,
    rarityRank,
    rarityScore,
    apeId,
    categories,
}) => {
    // Sample data for each category
    const categoriesData = {
        imageUrl: {
            src: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/rarity/1/image.png',
            alt: 'rarity image',
        },

        rarityRank: { label: 'Rarity Rank #', value: '3' },

        apeId: 41066,
        rarityScore: { label: 'Rarity Score', value: '3023' },
        openSeaButton: { label: 'view on opensea', href: '#' },
        categories: [
            { name: 'Background', value: 'Orange', score: '+17.44', count: 30 },
            { name: 'Mouth', value: 'Rage', score: '+21.91', count: 94 },
            { name: 'Hair', value: 'Top Hat', score: '+37.49', count: 146 },
            {
                name: 'Facial Hair',
                value: 'Big Beard',
                score: '+68.03',
                count: 385,
            },
            {
                name: 'Eyes',
                value: 'Colorful Sunglass',
                score: '+89.01',
                count: 542,
            },
            { name: 'Flur', value: 'Regular', score: '+7.35', count: 43 },
            { name: 'Mouth Prop', value: 'Laces', score: '+14.25', count: 58 },
            {
                name: 'Hat',
                value: 'Colorful Bandana',
                score: '+35.14',
                count: 267,
            },
            { name: 'Props', value: '3 Arrows', score: '+155.23', count: 391 },
            { name: 'Body', value: 'Slim', score: '+16.07', count: 104 },
            { name: 'Shirt', value: 'Black Polo', score: '+55.10', count: 219 },
            {
                name: 'Tattoo',
                value: 'Red Circle',
                score: '+47.56',
                count: 105,
            },
        ],
    }

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-md mx-auto lg:max-w-6xl">
                    <div className="lg:flex">
                        {/* Image Section */}
                        <div className="h-auto lg:w-64 xl:w-80 shrink-0">
                            {imageUrl && (
                                <img
                                    className="object-cover w-full h-auto mx-auto lg:mx-0 rounded-xl"
                                    src={imageUrl.src}
                                    alt={imageUrl.alt}
                                />
                            )}

                            <div className="mt-5">
                                {openSeaButton && (
                                    <a
                                        href={openSeaButton.href}
                                        title=""
                                        className="inline-flex items-center justify-center w-full px-5 py-3 text-xs font-bold tracking-widest text-gray-500 uppercase transition-all duration-200 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-gray-100 hover:text-gray-900"
                                        role="button"
                                    >
                                        {openSeaButton.label}
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Details Section */}
                        <div className="mt-8 lg:mt-0 lg:flex-1 lg:ml-12">
                            <div className="flex items-center justify-between">
                                <div>
                                    {rarityRank && (
                                        <p className="text-xl font-bold text-gray-900">
                                            {rarityRank.label}
                                            {rarityRank.value}
                                        </p>
                                    )}
                                    <p className="mt-1 text-sm font-medium text-gray-500">
                                        ID: {apeId}
                                    </p>
                                </div>

                                <div className="text-right">
                                    {rarityScore && (
                                        <>
                                            <p className="text-xs font-bold tracking-wide text-gray-500 uppercase">
                                                {rarityScore.label}
                                            </p>
                                            <p className="mt-1 text-lg font-bold text-indigo-600">
                                                {rarityScore.value}
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Categories Grid */}
                            <div className="grid grid-cols-2 gap-3 mt-6 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
                                {categories?.map((category, index) => (
                                    <div
                                        key={index}
                                        className="bg-white border border-gray-200 rounded-md"
                                    >
                                        <div className="p-3 sm:p-4">
                                            <div className="flex items-center justify-between space-x-2">
                                                <div>
                                                    <p className="text-xs font-bold tracking-wide text-gray-400 uppercase">
                                                        {category.name}
                                                    </p>
                                                    <p className="mt-1 text-sm font-bold text-gray-900">
                                                        {category.value}
                                                    </p>
                                                </div>

                                                <div className="text-right">
                                                    <p className="text-sm font-bold text-emerald-500">
                                                        {category.score}
                                                    </p>
                                                    <p className="mt-1 text-sm font-bold text-gray-900">
                                                        {category.count}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RarityOne
