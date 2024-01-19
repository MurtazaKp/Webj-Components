import React from 'react'

const PricingOne = ({ packageHeading, packageDescription, packages }) => {
    // const packages = {
    //   packageHeading:"Make the wise decision for your business",
    //   packageDescription:"Choose from our affordable 3 packages",
    //   packages:[
    //   {
    //     name: 'Basic',
    //     price: '$99',
    //     description: 'Best for small business owners, startups who need a landing page for their business.',
    //   },
    //   {
    //     name: 'Premium',
    //     price: '$199',
    //     description: 'Best for medium business owners, startups who need a landing page for their business. Premium Support and Future Updates included.',
    //   },
    //   {
    //     name: 'Enterprise',
    //     price: '$399',
    //     description: 'Best for large companies, business owners who need a landing page for their business. Premium Support and Future Updates included.',
    //   },
    // ]
    // }

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl px-8 mx-auto text-center md:px-0">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                        {packageHeading}
                    </h2>
                    <p className="mt-6 text-lg font-normal text-gray-600 font-pj">
                        {packageDescription}
                    </p>
                </div>

                <div className="grid max-w-sm grid-cols-1 gap-6 mx-auto mt-8 text-center md:text-left md:mt-16 md:max-w-6xl md:grid-cols-3">
                    {packages?.map((pkg, index) => (
                        <div
                            key={index}
                            className="overflow-hidden border border-gray-200 flex rounded-2xl transition-all duration-300 transform group"
                        >
                            <div className="p-6 lg:px-10 lg:py-8 group-hover:bg-black duration-500 ">
                                <div className="text-gray-900 group-hover:text-white duration-500">
                                    <h3 className="text-lg font-bold font-pj">
                                        {pkg.name}
                                    </h3>
                                    <p className="mt-3 text-5xl font-bold font-pj">
                                        {pkg.price}
                                    </p>
                                    <p className="mt-5 text-base font-normal leading-7 font-pj  h-36">
                                        {pkg.description}
                                    </p>
                                </div>
                                <a
                                    href="#"
                                    title=""
                                    className={`inline-flex items-center justify-center px-8 py-3.5 w-full mt-8 text-base font-bold transition-all duration-200 border-2 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900  group-hover:text-black group-hover:border-gray-900 group-hover:bg-white`}
                                    role="button"
                                >
                                    Get Started
                                </a>
                                <p className="text-gray-900 mt-8 text-base font-bold font-pj group-hover:text-white duration-500">
                                    Whats included:
                                </p>
                                <ul className="mt-4 space-y-3 text-base font-medium text-gray-600 font-pj">
                                    <li>130+ Coded Blocks</li>
                                    <li>Best for Developers, Freelancers</li>
                                    <li>Made with TailwindCSS</li>
                                    {pkg.name === 'Premium' ||
                                    pkg.name === 'Enterprise' ? (
                                        <>
                                            <li>Premium Support</li>
                                            <li>Future Updates</li>
                                        </>
                                    ) : null}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PricingOne
