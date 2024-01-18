import React from 'react'

const ImageGalleryOne = ({ heading, description, images }) => {
    const galleryData = {
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
    return (
        <section className="pt-12 bg-white sm:pt-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto text-center lg:text-left lg:max-w-none lg:mx-0">
                    <h2 className="text-3xl font-bold text-gray-900">
                        {heading}
                    </h2>
                    <div className="mt-4 lg:mt-6 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
                        <p className="text-base font-medium text-gray-600">
                            {description}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-12 -mx-4 sm:-mx-6 lg:mx-0 sm:mt-16 lg:mt-20">
                    {images.map((image, index) => (
                        <div key={index}>
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ImageGalleryOne
