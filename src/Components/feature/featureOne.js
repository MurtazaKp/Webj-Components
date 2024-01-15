import React from 'react'
import { BoxIcon, ChartIcon, ChipIcon, CloudIcon } from './icon'

const SocialIcons = {
    chart: ChartIcon,
    box: BoxIcon,
    cloud: CloudIcon,
    chip: ChipIcon,
    // Add more social media icons as needed
}

const FeaturesOne = ({ features, heading }) => {
    // Sample data
    //   const featuresData = {
    //  features: [
    //     {
    //       id: 1,
    //       icon: "chart",
    //       title: 'Predictive Insights',
    //       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam consectetur placerat pellentesque ut massa volutpat at. Diam pretium orci dui sagittis.',
    //     },
    //     {
    //       id: 2,
    //       icon: "chip",
    //       title: 'Filtered Data',
    //       description: 'Eleifend nullam consectetur placerat pellentesque ut massa volutpat at. Diam pretium orci dui sagittis. Norem ipsum dolor sit amet, consectetur adipiscing elit.',
    //     },
    //     {
    //       id: 3,
    //       icon: "box",
    //       title: 'Fastest Speed',
    //       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam consectetur placerat pellentesque ut massa volutpat at. Diam pretium orci dui sagittis. Eleifend nullam consectetur placerat pelle tesque ut massa volutpat bonur los.',
    //     },
    //     {
    //       id: 4,
    //       icon: "cloud",
    //       title: 'Everything in Cloud',
    //       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam consectetur placerat pellentesque ut massa volutpat at. Diam pretium orci dui sagittis.',
    //     },

    //   ]
    // }

    return (
        <section className="py-12 bg-gray-50 ">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                        {heading}
                    </h2>
                </div>

                <div className="grid max-w-4xl grid-cols-1 mx-auto mt-8 text-center gap-y-8 sm:gap-x-8 sm:grid-cols-2 sm:mt-12 lg:mt-20 sm:text-left">
                    {features?.map((feature, index) => {
                        const IconComponent = SocialIcons[feature.icon]
                        return (
                            <div
                                key={feature.id}
                                className="space-y-4 sm:space-y-8"
                            >
                                <div className="overflow-hidden bg-white shadow-md rounded-xl">
                                    <div className="p-9">
                                        <IconComponent />
                                        <h3 className="mt-8 text-2xl font-bold text-gray-900 sm:mt-14 font-pj">
                                            {feature.title}
                                        </h3>
                                        <p className="mt-6 text-base text-gray-600 font-pj">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FeaturesOne
