import React from 'react'

const HomeSidebarOne = ({ blogTitle, author, recentArticles, newsletter }) => {
    // Sample data
    const blogData = {
        blogTitle: 'Clarity Blog',
        author: {
            name: 'Atron Calery',
            imageSrc: {
                src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/author.png',
                alt: 'alt',
            },
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci commodo.',
        },
        recentArticles: [
            {
                title: 'How a visual artist redefines success in graphic design',
                thumbnailSrc: {
                    src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/thumbnail-1.png',
                    alt: 'thumbnail',
                },

                link: '#',
            },
            {
                title: 'How a visual artist redefines success in graphic design',
                thumbnailSrc: {
                    src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/thumbnail-1.png',
                    alt: 'thumbnail',
                },
                link: '#',
            },
            {
                title: 'How a visual artist redefines success in graphic design',
                thumbnailSrc: {
                    src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/thumbnail-1.png',
                    alt: 'thumbnail',
                },
                link: '#',
            },
            {
                title: 'How a visual artist redefines success in graphic design',
                thumbnailSrc: {
                    src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/thumbnail-1.png',
                    alt: 'thumbnail',
                },
                link: '#',
            },
            {
                title: 'How a visual artist redefines success in graphic design',
                thumbnailSrc: {
                    src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/thumbnail-1.png',
                    alt: 'thumbnail',
                },
                link: '#',
            },
        ],
        newsletter: {
            title: 'Join exclusive list',
            newsletterCtaText:
                'Join with2600+ Developers and start getting feedbacks right now',
            newsletterCtaButton: {
                label: 'Join Now',
            },
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis auctor.',
            avatars: [
                {
                    src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/avatar-1.png',
                    alt: '',
                },
                {
                    src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/avatar-2.png',
                    alt: '',
                },
                {
                    src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/home-sidebar/2/avatar-3.png',
                    alt: '',
                },
            ],
            newsletterForm: {
                label: 'email',
                type: 'email',
                placeholder: 'Enter a Email Address',
            },
            privacyText: 'we do not sell you data',
        },
    }
    7
    return (
        <section className="flex justify-end min-h-screen overflow-hidden bg-gray-700">
            <div className="max-w-sm bg-white divide-y divide-gray-200">
                <div className="px-4 py-5 sm:p-6 lg:p-8">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-bold tracking-widest text-gray-500 uppercase">
                            {blogTitle}
                        </p>
                        <button
                            type="button"
                            className="p-1 -m-1 text-gray-400 transition-all duration-200 rounded-md hover:text-gray-900 hover:bg-gray-100"
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="flex items-start mt-10">
                        {author && (
                            <>
                                <img
                                    className="object-cover w-16 h-16 rounded-full shrink-0"
                                    src={author.imageSrc.src}
                                    alt=""
                                />
                                <div className="ml-6">
                                    <p className="text-base font-bold tracking-wide text-gray-900 uppercase">
                                        {author.name}
                                    </p>
                                    <p className="mt-2 text-sm font-normal leading-6 text-gray-500">
                                        {author.description}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className="px-4 py-5 sm:p-6 lg:p-8">
                    <p className="text-lg font-bold text-gray-900">
                        Recent Articles by {author?.name}
                    </p>
                    <div className="mt-6">
                        <div className="-my-6 divide-y divide-gray-200">
                            {recentArticles?.map((article, index) => (
                                <div
                                    key={index}
                                    className="relative flex items-center py-6"
                                >
                                    {
                                        <img
                                            className="object-cover w-16 h-16 shrink-0"
                                            src={article.thumbnailSrc.src}
                                            alt=""
                                        />
                                    }
                                    <p className="ml-6 text-base font-bold text-gray-900">
                                        <a href={article.link} title="">
                                            {article.title}
                                            <span
                                                className="absolute inset-0"
                                                aria-hidden="true"
                                            ></span>
                                        </a>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {newsletter && (
                    <div className="px-4 py-5 sm:p-6 lg:p-8">
                        <p className="text-lg font-bold text-gray-900">
                            {newsletter.title}
                        </p>
                        <p className="mt-3 text-sm font-normal leading-6 text-gray-500">
                            {newsletter.description}
                        </p>

                        <div className="flex items-center justify-center mt-6 -space-x-2 overflow-hidden">
                            {newsletter?.avatars.map((avatar, index) => (
                                <img
                                    key={index}
                                    className="inline-block w-12 h-12 rounded-full ring-2 ring-white"
                                    src={avatar.src}
                                    alt={`Avatar ${index + 1}`}
                                />
                            ))}
                        </div>

                        <p className="mt-4 text-sm font-normal leading-6 text-gray-900">
                            {newsletter.newsletterCtaText}
                        </p>

                        <form
                            action="#"
                            method="POST"
                            className="mt-6 space-y-4"
                        >
                            <div>
                                <label htmlFor="" className="sr-only">
                                    {newsletter.newsletterForm.label}
                                </label>
                                <div>
                                    <input
                                        type={newsletter.newsletterForm.type}
                                        name=""
                                        id=""
                                        placeholder={
                                            newsletter.newsletterForm
                                                .placeholder
                                        }
                                        className="block w-full px-4 py-3 text-base sm:py-3.5 font-medium text-center text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:text-sm focus:ring-gray-900 focus:border-gray-900"
                                    />
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

                                <button
                                    type="submit"
                                    className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                >
                                    {newsletter.newsletterCtaButton.label}
                                </button>
                            </div>
                        </form>

                        <div className="mt-6">
                            <svg
                                className="w-6 h-6 mx-auto text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                            </svg>
                            <p className="px-4 mt-3 text-sm font-normal leading-6 text-gray-500">
                                {newsletter.privacyText}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default HomeSidebarOne
