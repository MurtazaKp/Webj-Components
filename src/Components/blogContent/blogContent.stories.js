import React from 'react'
import BlogContentOne from './blogContentOne'

export default {
    title: 'BlogContent',
}

const BlogContentOneTemplate = (args) => <BlogContentOne {...args} />

export const BlogContentOneStory = BlogContentOneTemplate.bind({})
BlogContentOneStory.args = {
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
