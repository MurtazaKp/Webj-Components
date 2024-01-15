import React from 'react'

const TestimonialOne = ({ subheading, heading, testimonials }) => {
    //   const testimonialsData = {
    //     subheading:"3940+ Happy Landingfolio Users",
    //     heading:"  Don't just take our words",
    //   testimonials:[
    //     {
    //       imageSrc: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/4/woman.png',
    //       name: 'Jenny Wilson',
    //       company: 'Grower.io',
    //       quote:
    //         'We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.',
    //     },
    //     {
    //       imageSrc: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/4/man.png',
    //       name: 'Devon Lane',
    //       company: 'DLDesign.co',
    //       quote:
    //         'We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.',
    //     },
    //   ]

    // }

    return (
        <section className="py-12 bg-white sm:py-16 ">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-base font-semibold text-blue-600">
                        {subheading}
                    </p>
                    <h2 className="mt-6 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl lg:mt-8">
                        {heading}
                    </h2>
                </div>

                <div className="grid max-w-3xl grid-cols-1 gap-12 mx-auto mt-16 text-center lg:mt-20 xl:mt-20 xl:grid-cols-2 xl:max-w-none sm:text-left">
                    {testimonials?.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row lg:items-center"
                        >
                            <img
                                className="object-cover w-48 h-48 mx-auto sm:mx-0 lg:w-60 lg:h-60 shrink-0 rounded-2xl"
                                src={testimonial.reviewerImage.src}
                                alt={testimonial.reviewerImage.alt}
                            />
                            <div className="mt-8 sm:mt-0 sm:ml-10">
                                <div className="flex items-center justify-center sm:justify-start">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg
                                            key={star}
                                            className="w-5 h-5 text-blue-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <blockquote className="mt-8">
                                    <p className="text-lg font-medium leading-8 text-gray-900">
                                        {testimonial.quote}
                                    </p>
                                </blockquote>
                                <div className="flex flex-col flex-wrap items-center justify-center gap-1 mt-5 sm:flex-row sm:justify-start sm:gap-4">
                                    <p className="text-base font-semibold text-gray-900">
                                        {testimonial.reviewerName}
                                    </p>
                                    <p className="text-base font-normal text-gray-600">
                                        {testimonial.reviewerCompany}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialOne
