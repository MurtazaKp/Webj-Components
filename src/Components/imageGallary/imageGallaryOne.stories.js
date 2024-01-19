import React from 'react'
import ImageGalleryOne from './imageGallaryOne'

export default {
    title: 'ImageGallarys',
}

const Template = (args) => <ImageGalleryOne {...args} />

export const ImageGallaryOneStory = Template.bind({})
ImageGallaryOneStory.args = {
    heading: 'Get access to rare NFTs',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum tortor cum dictum nulla. Ipsum eget faucibus facilisis turpis viverra malesuada tellus.',
    images: [
        {
            src: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/gallery/1/image-1.png',
            alt: 'gallary image',
        },
        {
            src: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/gallery/1/image-2.png',
            alt: 'gallary image',
        },
        {
            src: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/gallery/1/image-3.png',
            alt: 'gallary image',
        },
        {
            src: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/gallery/1/image-4.png',
            alt: 'gallary image',
        },
        {
            src: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/gallery/1/image-5.png',
            alt: 'gallary image',
        },
        {
            src: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/gallery/1/image-6.png',
            alt: 'gallary image',
        },
        {
            src: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/gallery/1/image-7.png',
            alt: 'gallary image',
        },
        {
            src: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/gallery/1/image-8.png',
            alt: 'gallary image',
        },
        {
            src: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/gallery/1/image-9.png',
            alt: 'gallary image',
        },
        {
            src: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/gallery/1/image-10.png',
            alt: 'gallary image',
        },
    ],
}
