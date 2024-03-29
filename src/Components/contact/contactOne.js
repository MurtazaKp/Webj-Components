import React, { useState } from 'react'

const ContactOne = ({ heading, contactDetails, testimonials, form }) => {
    const pageContent = {
        heading: {
            title: 'Love to hear from you, Get in touch 👋',
            description:
                'Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS and gives the blocks.',
        },

        testimonials: [
            {
                quote: 'We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.',
                author: 'Devon Lane',
                role: 'Co-Founder, Design.co',
                avatar: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/sign-in/3/avatar-male.png',
            },
        ],
        form: {
            title: 'Send us a message',
            fields: [
                {
                    name: 'fullName',
                    label: 'Your Name',
                    type: 'text',
                    placeholder: 'Your name',
                },
                {
                    name: 'email',
                    label: 'Email Address',
                    type: 'email',
                    placeholder: 'Email address',
                },
                {
                    name: 'phone',
                    label: 'Phone',
                    type: 'tel',
                    placeholder: '+1-222-333-4444',
                },
                {
                    name: 'message',
                    label: 'Your Message',
                    type: 'textarea',
                    placeholder: 'Write your message',
                },
            ],
            buttonLabel: 'Send Message',
        },
    }

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 xl:gap-x-32">
                    <div className="flex flex-col self-stretch justify-between">
                        <div className="flex-1">
                            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                                {heading.title}
                            </h2>
                            <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
                                {heading.description}
                            </p>
                        </div>

                        <div className="relative mt-10 overflow-hidden bg-blue-600 lg:mt-0 rounded-3xl -rotate-3">
                            <div className="absolute bottom-0 right-0 -mb-72 -mr-24 border-[6px] opacity-20 border-white rounded-full w-96 h-96"></div>
                            <div className="relative p-6 sm:px-8 sm:py-9">
                                <div className="flex items-center">
                                    {Array.from({ length: 5 }).map(
                                        (_, index) => (
                                            <svg
                                                key={index}
                                                className="w-6 h-6 text-yellow-300"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        )
                                    )}
                                </div>
                                <blockquote className="mt-8">
                                    <p className="text-xl font-normal text-white">
                                        {testimonials[0].quote}
                                    </p>
                                </blockquote>
                                <div className="flex items-center mt-6">
                                    <img
                                        className="object-cover rounded-full w-11 h-11 shrink-0"
                                        src={testimonials[0].avatar}
                                        alt=""
                                    />
                                    <div className="ml-4">
                                        <p className="text-base font-semibold text-white">
                                            {testimonials[0].author}
                                        </p>
                                        <p className="text-sm font-normal text-gray-300">
                                            {testimonials[0].role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-xl rounded-2xl">
                        <div className="p-6 sm:p-10">
                            <h3 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                                {form.title}
                            </h3>
                            <form
                                action="#"
                                method="POST"
                                className="mt-8 space-y-6"
                            >
                                {form.fields.map((field) => (
                                    <div key={field.name}>
                                        <label
                                            htmlFor={field.name}
                                            className="sr-only"
                                        >
                                            {field.label}
                                        </label>
                                        <div>
                                            {field.type === 'textarea' ? (
                                                <textarea
                                                    name={field.name}
                                                    id={field.name}
                                                    placeholder={
                                                        field.placeholder
                                                    }
                                                    rows="4"
                                                    className="block w-full px-px py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-b-2 focus:outline-none focus:border-blue-600 focus:ring-0"
                                                    onChange={handleInputChange}
                                                    value={formData[field.name]}
                                                ></textarea>
                                            ) : (
                                                <input
                                                    type={field.type}
                                                    name={field.name}
                                                    id={field.name}
                                                    placeholder={
                                                        field.placeholder
                                                    }
                                                    className="block w-full px-px py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-b-2 focus:outline-none focus:border-blue-600 focus:ring-0"
                                                    onChange={handleInputChange}
                                                    value={formData[field.name]}
                                                />
                                            )}
                                        </div>
                                    </div>
                                ))}
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center w-full px-12 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                                    onClick={handleSubmit}
                                >
                                    {form.buttonLabel}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactOne
