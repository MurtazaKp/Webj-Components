import React from 'react'

// Data for the blog posts
const blogData = {
    blogHeading: 'Latest from our blog',
    blogs: [
        {
            id: 1,
            date: '20 July 2022',
            title: 'Popular design systems to learn from in 2022',
            image: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/blog/3/blog-thumbnail-1.png',
            author: {
                name: 'Leslie Alexander',
                avatar: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/blog/3/avatar-female-1.png',
            },
        },
        {
            id: 2,
            date: '08 July 2022',
            title: 'Accessibility makes you a better product designer',
            image: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/blog/3/blog-thumbnail-2.png',
            author: {
                name: 'Jenny Wilson',
                avatar: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/blog/3/avatar-male-1.png',
            },
        },
        {
            id: 3,
            date: '16 June 2022',
            title: '15 best tools that will help you build your website',
            image: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/blog/3/blog-thumbnail-3.png',
            author: {
                name: 'Adam Smith',
                avatar: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/blog/3/avatar-male-2.png',
            },
        },
        {
            id: 4,
            date: '10 June 2022',
            title: 'Learn Bootstrap 4 in 30 min by building a landing',
            image: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/blog/3/blog-thumbnail-4.png',
            author: {
                name: 'Marvin McKinney',
                avatar: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/blog/3/avatar-female-2.png',
            },
        },
    ],
    allBlogsCta: {
        label: 'Read all blog posts',
        href: '#',
        target: '_blank',
    },
}

const BlogTwo = ({ blogHeading, blogs, allBlogsCta }) => {
    return (
        <section className="py-12 bg-white ">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        {blogHeading}
                    </h2>
                </div>

                <div className="grid max-w-2xl grid-cols-1 gap-5 mx-auto mt-12 sm:gap-6 sm:grid-cols-3 sm:mt-16 lg:mt-20 sm:max-w-none">
                    {blogs?.map((post) => (
                        <div
                            key={post.id}
                            className="flex flex-col p-6 transition-all duration-200 bg-white border border-gray-200  sm:items-stretch group rounded-2xl hover:shadow-lg"
                        >
                            <a
                                href="#"
                                title=""
                                className="flex overflow-hidden rounded-xl shrink-0"
                            >
                                <img
                                    className="object-cover w-full transition-all duration-200 transform h-44 group-hover:scale-110 group-hover:rotate-3"
                                    src={post.blogImage.src}
                                    alt={post.blogImage.alt}
                                />
                            </a>

                            <div className="flex flex-col flex-1 mt-6 sm:mt-3 ">
                                <div className="flex-1">
                                    <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
                                        {post.date}
                                    </p>
                                    <h3 className="mt-4 text-xl font-semibold leading-tight text-gray-900">
                                        <a href="#" title="" className="">
                                            {post.title}
                                        </a>
                                    </h3>
                                </div>

                                <div className="mt-6 lg:mt-3">
                                    <a
                                        href="#"
                                        title=""
                                        className="flex items-center text-base font-medium text-gray-600 hover:text-gray-900"
                                    >
                                        <img
                                            className="object-cover mr-2.5 rounded-full w-7 h-7 shrink-0"
                                            src={post.author.avatar.src}
                                            alt={post.author.avatar.alt}
                                        />
                                        {post.author.name}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center md:mt-16">
                    <a
                        href={allBlogsCta?.href}
                        target={allBlogsCta?.target}
                        title=""
                        className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
                    >
                        {' '}
                        {allBlogsCta?.label}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default BlogTwo
