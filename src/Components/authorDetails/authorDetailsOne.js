import React from 'react'

const AuthorDetailsOne = ({ name, description, socialLinks, image }) => {
    // Sample data for the author
    const authorData = {
        name: 'Atron Calery',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci commodo, elit sit enim blandit enim sit molestie aana.',
        socialLinks: [
            { label: 'facebook', href: 'www.facebook.com' },
            { label: 'Twitter', href: 'www.twitter.com' },
            { label: 'Website', href: 'www.example.com' },
        ],
        image: {
            src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-author/1/author-1.png',
            alt: 'Atron Calery Image',
        },
    }

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto overflow-hidden bg-white border border-gray-200">
                    <div className="px-4 py-5 sm:p-6 lg:p-8">
                        <div className="sm:flex sm:items-start">
                            <img
                                className="object-cover w-32 h-32 rounded-full shrink-0"
                                src={image.src}
                                alt={image.alt}
                            />

                            <div className="mt-6 sm:mt-0 sm:ml-8">
                                <p className="text-lg font-bold text-gray-900 uppercase">
                                    {name}
                                </p>
                                <p className="max-w-sm mt-3 text-sm font-normal leading-6 text-gray-500">
                                    {description}
                                </p>

                                <div className="flex items-center mt-6 space-x-3">
                                    {socialLinks.map((link, index) => {
                                        return (
                                            <>
                                                <a
                                                    key={index}
                                                    href={link.href}
                                                    title=""
                                                    className="text-sm font-bold text-gray-900 hover:underline"
                                                >
                                                    {link.label}
                                                </a>
                                                <span
                                                    className={`text-sm font-medium text-gray-300 ${
                                                        index !== 2
                                                            ? 'block'
                                                            : 'hidden'
                                                    }`}
                                                >
                                                    |
                                                </span>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AuthorDetailsOne
