import React, { useState } from 'react'

const NewsletterOne = ({
    heading,
    description,
    formPlaceholder,
    buttonText,
    successMessage,
    note,
}) => {
    //
    const initialNewsletterData = {
        heading: 'Join our newsletter',
        description:
            'Stay up to date with our new collections, latest deals and special offers! We announce a new collection every week so be sure to stay tuned to get the hottest piece for you.',
        formPlaceholder: 'Enter your email address',
        buttonText: 'Subscribe Now',
        successMessage: 'Thank you for subscribing!',
        note: "Your email is 100% confidential and won't send you any spam.",
    }

    // State for data and form
    const [newsletterData, setNewsletterData] = useState(initialNewsletterData)
    const [email, setEmail] = useState('')
    const [isSubscribed, setIsSubscribed] = useState(false)

    // Event handlers
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            setIsSubscribed(true)
        } catch (error) {
            console.error(error)
            setIsSubscribed(false)
        }
    }

    // JSX with data binding
    return (
        <section className="py-12 bg-gray-50 ">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        {heading}
                    </h2>
                    <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
                        {description}
                    </p>
                </div>

                <div className="max-w-lg mx-auto mt-12 overflow-hidden bg-white shadow-xl sm:mt-16 rounded-2xl">
                    <div className="px-6 py-8">
                        {isSubscribed && email ? (
                            <p className="text-green-600 text-center">
                                {successMessage}
                            </p>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="email" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        placeholder={formPlaceholder}
                                        className="block w-full px-6 py-4 text-base text-center text-gray-900 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center w-full px-6 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                                >
                                    {buttonText}
                                </button>
                            </form>
                        )}

                        <p className="mt-5 text-sm font-normal text-center text-gray-500">
                            {note}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsletterOne
