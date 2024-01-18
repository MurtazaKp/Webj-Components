import React from 'react'
const AuthorOne = ({ authors, heading, description }) => {
    const authorsData = {
        heading: 'Our Authors',
        description:
            'In a creative workplace, employees responsibly try different solutions.',
        authors: [
            {
                name: 'HungerGames',
                username: 'creativeGig',
                image: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/authors/5/author-1.png',
                bio1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit elit posuere morbi laoreet tortor auctor.',
                bio2: 'Aliquam sit elit posuere morbi laoreet tortor auctor. Urna integer enim id neque.',
                twitterCta: {
                    href: '#',
                    label: 'Follow on Twitter',
                },
            },
            {
                name: 'CodeMaster',
                username: 'codeWizard',
                image: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/authors/5/author-2.png',
                bio1: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                bio2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                twitterCta: {
                    href: '#',
                    label: 'Follow on Twitter',
                },
            },
        ],
    }
    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900">
                        {heading}
                    </h2>
                    <p className="mt-4 text-base font-medium text-gray-500">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 px-12 mt-12 sm:mt-16 gap-y-12 sm:gap-x-10 sm:grid-cols-2 sm:px-0 xl:grid-cols-2 lg:mt-20">
                    {authors.map((author, index) => (
                        <div key={index} className="xl:items-stretch xl:flex">
                            <img
                                className="object-cover w-auto h-64 shrink-0 rounded-xl"
                                src={author.image}
                                alt={`Author ${index + 1}`}
                            />

                            <div className="flex flex-col justify-between flex-1 mt-6 xl:mt-0 xl:ml-10">
                                <div>
                                    <p className="text-lg font-bold text-gray-900">
                                        {author.name}
                                    </p>
                                    <p className="mt-1 text-sm font-medium text-gray-500">{`@${author.username}`}</p>
                                </div>

                                <div className="mt-6 xl:mt-0">
                                    <p className="text-sm font-medium text-gray-600">
                                        {author.bio1}
                                    </p>
                                    <p className="mt-4 text-sm font-medium text-gray-600">
                                        {author.bio2}
                                    </p>
                                </div>

                                <div className="mt-6 xl:mt-0">
                                    <a
                                        href={author.twitterCta.href}
                                        title=""
                                        className="inline-flex items-center justify-center flex-1 px-5 py-3 text-xs font-bold tracking-widest text-white uppercase transition-all duration-200 border border-transparent rounded-lg shrink-0 bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 hover:bg-sky-500"
                                        role="button"
                                    >
                                        {author.twitterCta.label}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AuthorOne
