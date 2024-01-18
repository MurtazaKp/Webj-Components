import React from 'react'

const blogFeaturedOne = ({
    image,
    category,
    title,
    date,
    content,
    buttonLink,
}) => {
    const featuredArticleData = {
        image: {
            src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-featured/2/thumbnail.png',
            alt: 'cover image',
        },
        category: 'Featured',
        title: 'How to write content about your photographs',
        date: 'April 09, 2022',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis commodo magna risus maecenas nisl sed cras lacus, vestibulum. Dictum nisi amet.',
        buttonLink: { label: 'Read Full Article', href: '#' },
    }

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="relative overflow-hidden rounded-xl">
                    <div className="absolute inset-0">
                        <img
                            className="object-cover w-full h-full"
                            src={image.src}
                            alt={image.alt}
                        />
                    </div>
                    <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-r from-gray-900 via-gray-900/50 lg:via-gray-900/20 to-transparent"></div>

                    <div className="relative p-8 sm:py-12 sm:px-16 sm:max-w-lg">
                        <span className="px-3 py-2 text-xs font-bold tracking-widest text-gray-900 uppercase bg-white rounded">
                            {category}
                        </span>

                        <p className="mt-12 text-2xl font-bold text-white sm:text-3xl">
                            <a href={buttonLink} title="" className="">
                                {title}
                            </a>
                        </p>
                        <p className="mt-4 text-sm font-medium text-white">
                            {date}
                        </p>
                        <p className="mt-4 text-base font-normal leading-7 text-white">
                            {content}
                        </p>
                        <div className="mt-12">
                            <a
                                href={buttonLink.href}
                                title=""
                                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                                role="button"
                            >
                                {buttonLink.label}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default blogFeaturedOne
