import React from 'react'

const BlogSidebar = ({ mainHeading, recentPosts }) => {
    // Simulated data for main heading and recent posts
    const sidebarContent = {
        mainHeading: 'Recent Posts',
        recentPosts: [
            {
                id: 1,
                title: 'How a visual artist redefines success in graphic design',
                link: '#',
                date: 'April 09, 2022',
                thumbnail: {
                    src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/sidebar-popular-posts/5/thumbnail-1.png',
                    alt: 'Thumbnail 1',
                },
            },
            {
                id: 2,
                title: 'Another post title 1',
                link: '#',
                date: 'April 10, 2022',
                thumbnail: {
                    src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/sidebar-popular-posts/5/thumbnail-2.png',
                    alt: 'Thumbnail 2',
                },
            },
            {
                id: 3,
                title: 'Another post title 2',
                link: '#',
                date: 'April 11, 2022',
                thumbnail: {
                    src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/sidebar-popular-posts/5/thumbnail-3.png',
                    alt: 'Thumbnail 3',
                },
            },
            {
                id: 4,
                title: 'Another post title 3',
                link: '#',
                date: 'April 12, 2022',
                thumbnail: {
                    src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/sidebar-popular-posts/5/thumbnail-4.png',
                    alt: 'Thumbnail 4',
                },
            },
        ],
    }

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-6 lg:gap-x-12 xl:gap-x-20">
                    <div className="bg-gray-100 lg:col-span-4 rounded-xl">
                        <div className="px-4 py-5 sm:p-6 h-96"></div>
                    </div>

                    <div className="lg:col-span-2">
                        {/* Dynamic main heading */}
                        <p className="text-lg font-bold text-gray-900">
                            {sidebarContent.mainHeading}
                        </p>

                        <div className="relative mt-5">
                            <hr className="border-t border-gray-200" />
                            <hr className="absolute inset-y-0 left-0 w-1/3 border-t border-gray-900" />
                        </div>

                        <div className="mt-6 space-y-6">
                            {sidebarContent.recentPosts.map((post) => (
                                <div
                                    key={post.id}
                                    className="relative flex items-start"
                                >
                                    <div className="flex-1">
                                        <p className="text-base font-bold text-gray-900">
                                            <a
                                                href={post.link}
                                                title={post.title}
                                            >
                                                {post.title}
                                                <span
                                                    className="absolute inset-0"
                                                    aria-hidden="true"
                                                ></span>
                                            </a>
                                        </p>
                                        <p className="mt-3 text-sm font-medium text-gray-500">
                                            {post.date}
                                        </p>
                                    </div>
                                    <img
                                        className="object-cover w-20 ml-5 shrink-0"
                                        src={post.thumbnail.src}
                                        alt={post.thumbnail.alt}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSidebar
