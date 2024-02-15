import React from 'react'
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './icon'
import { PortableText } from '@portabletext/react'
import { CustomPortableText } from '../Custom Portable Text/CustomerPortable'

const BlogContentOne = ({
    breadcrumbItems,
    title,
    category,
    date,
    image,
    socialLinks,
    content,
}) => {
    const data = {
        breadcrumbItems: [
            { label: 'Home', link: '#' },
            { label: 'Blog', link: '#' },
            { label: 'Five Pizza Tips', link: '#' },
        ],
        title: 'Five pizza tips you need to learn now',
        category: 'Food',
        date: 'November 22, 2021',
        image: {
            src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-content/1/cover.png',
            alt: 'Blog Post Cover Image',
        },
        socialLinks: [
            { title: 'Discord', href: '#', icon: 'facebook' }, // Replace with your Discord icon SVG path
            { title: 'Twitter', href: '#', icon: 'instagram' }, // Replace with your Twitter icon SVG path
            { title: 'Telegram', href: '#', icon: 'twitter' }, // Replace with your Telegram icon SVG path
            { title: 'LinkedIn', href: '#', icon: 'linkedin' }, // Replace with your LinkedIn icon SVG path
        ],
        content: `
    <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pellentesque ut pellentesque varius amet mauris. Tempor, risus, congue gravida nulla tincidunt nec diam. Tincidunt magnis eu, vitae dictumst commodo dolor in. Aenean dictumst risus posuere a at id fermentum nibh. Luctus
            nunc bibendum duis egestas scelerisque.
        </p>
        <p>Maecenas in pharetra hendrerit neque, tellus eu. Arcu tempus, vel blandit adipiscing a sed cursus. Augue vestibulum tempus lectus gravida condimentum mauris iaculis. Sodales imperdiet id maecenas molestie id.</p>

        <blockquote>
            <p>Tincidunt magnis eu, vitae dictumst commodo dolor in. Aen ean dictumst risus posuere a at id fermentum nibh. Luctus nunc bibendum duis egestas scelerisque.</p>
        </blockquote>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pellentesque ut pellentesque varius amet mauris. Tempor, risus, congue gravida nulla tincidunt nec diam. Tincidunt magnis eu, vitae dictumst commodo dolor in. Aenean dictumst risus posuere a at id fermentum nibh. Luctus
            nunc bibendum duis egestas scelerisque.
        </p>

        <p>Maecenas in pharetra hendrerit neque, tellus eu. Arcu tempus, vel blandit adipiscing a sed cursus. Augue vestibulum tempus lectus gravida condimentum mauris iaculis. Sodales imperdiet id maecenas molestie id.</p>

        <ul class="marker:text-gray-900">
            <li>Id pellentesque ut pellentesque varius amet mauris.</li>

            <li>Tempor, risus, congue gravida nulla tincidunt.</li>

            <li>Tincidunt magnis eu, vitae dictumst.</li>

            <li>Aenean dictumst risus posuere a at id fermentum nibh.</li>
        </ul>

        <img class="object-cover w-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-content/1/image.png" alt="" />

        <h2>How to start the process?</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pellentesque ut pellentesque varius amet mauris. Tempor, risus, congue gravida nulla tincidunt nec diam. Tincidunt magnis eu, vitae dictumst commodo dolor in. Aenean dictumst risus posuere a at id fermentum nibh. Luctus
            nunc bibendum duis egestas scelerisque.
        </p>
        <p>Maecenas in pharetra hendrerit neque, tellus eu. Arcu tempus, vel blandit adipiscing a sed cursus. Augue vestibulum tempus lectus gravida condimentum mauris iaculis. Sodales imperdiet id maecenas molestie id.</p>
  `,
    }

    const SocialIcons = {
        facebook: FacebookIcon,
        twitter: TwitterIcon,
        instagram: InstagramIcon,
        linkedin: LinkedInIcon,
        // Add more social media icons as needed
    }

    const SocialLink = ({ icon, url }) => {
        const IconComponent = SocialIcons[icon]

        return (
            <li>
                <a
                    href={url}
                    title={icon}
                    className="flex items-center justify-center transition-all duration-200 rounded-full w-7 h-7 "
                >
                    <IconComponent />
                </a>
            </li>
        )
    }

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-xl mx-auto text-center">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center justify-center">
                        <ol className="flex items-center space-x-2">
                            {breadcrumbItems?.map((item, index) => (
                                <>
                                    <li key={index}>
                                        <a
                                            href={item.link}
                                            title={item.title}
                                            className="text-base font-medium text-gray-900"
                                        >
                                            {item.label}{' '}
                                        </a>
                                    </li>
                                    <span
                                        className={
                                            index === 2 ? 'hidden' : 'block'
                                        }
                                    >
                                        /
                                    </span>
                                </>
                            ))}
                        </ol>
                    </nav>

                    {/* Blog Post Title */}
                    <h1 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl">
                        {title}
                    </h1>

                    {/* Meta Information */}
                    <div className="flex items-center justify-center mt-8 space-x-2">
                        <p className="text-base font-medium text-gray-900">
                            <a href="#" title="" className="">
                                {category}
                            </a>
                        </p>
                        <span className="text-base font-medium text-gray-500">
                            {' '}
                            •{' '}
                        </span>
                        <p className="text-base font-medium text-gray-500">
                            {date}
                        </p>
                    </div>
                </div>

                {/* Blog Post Cover Image */}
                <div className="mt-8 sm:mt-12 lg:mt-16 aspect-w-16 aspect-h-9 lg:aspect-h-6">
                   {image && <img
                        className="object-cover w-full h-full"
                        src={image.src}
                        alt={image.alt}
                    />}
                </div>

                {/* Social Links */}
                <div className="grid grid-cols-1 mt-8 sm:mt-12 lg:mt-16 lg:grid-cols-12 lg:gap-x-12 gap-y-8">
                    <div className="lg:col-span-2 lg:self-start lg:sticky lg:top-6 lg:order-last">
                        <ul className="flex space-x-3 lg:space-x-0 lg:space-y-4 lg:flex-col lg:items-center">
                            {socialLinks?.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        title={item.icon}
                                        className="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 border border-gray-200 rounded-full hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    >
                                        <span className="sr-only">
                                            {item.title}
                                        </span>
                                        <SocialLink {...item} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block lg:col-span-2"></div>

                    {/* Blog Post Content */}
                    <article className="prose lg:col-span-8 max-w-none prose-gray prose-blockquote:px-8 prose-blockquote:py-3 prose-blockquote:lg:text-xl prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:border-gray-900 prose-blockquote:border-l-2 prose-blockquote:lg:leading-9 prose-blockquote:not-italic prose-blockquote:bg-gray-100 prose-blockquote:text-lg prose-blockquote:leading-8">
                        {/* Use dangerouslySetInnerHTML to render HTML content */}
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                        <CustomPortableText value={content} />
                    </article>
                </div>
            </div>
        </section>
    )
}

export default BlogContentOne
