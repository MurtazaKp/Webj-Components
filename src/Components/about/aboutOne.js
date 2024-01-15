import React from 'react'

const AboutUsSection = ({ title, description, aboutImage }) => {
    return (
        <section className="bg-gray-50">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="max-w-lg">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            {title}
                        </h2>
                        <p className="mt-4 text-gray-600 text-lg">
                            {description}
                        </p>
                    </div>
                    <div className="mt-12 md:mt-0">
                        <img
                            src={aboutImage?.src}
                            alt={aboutImage?.alt}
                            className="object-cover rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsSection
