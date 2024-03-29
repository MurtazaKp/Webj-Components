import React from 'react'

// const IntegrationsData = {
//     heading: 'Integrate with Apps',
//     description:
//         'Explore a variety of integrations with popular applications to enhance your experience.',
//     integrations: [
//         {
//             name: 'Gmail',
//             image: {
//                 src: 'https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/gmail-logo.png',
//                 alt: 'Gmail Logo',
//             },
//             description:
//                 'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//             integrationType: 'Direct Integration',
//         },
//         {
//             name: 'Slack',
//             image: {
//                 src: 'https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/slack-logo.png',
//                 alt: 'Slack Logo',
//             },
//             description:
//                 'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//             integrationType: 'Direct Integration',
//         },
//         {
//             name: 'Shopify',
//             image: {
//                 src: 'https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/shopify-logo.png',
//                 alt: 'Shopify Logo',
//             },
//             description:
//                 'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//             integrationType: 'Direct Integration',
//         },
//         {
//             name: 'Intercom',
//             image: {
//                 src: 'https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/intercom-logo.png',
//                 alt: 'Intercom Logo',
//             },
//             description:
//                 'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//             integrationType: 'Direct Integration',
//         },
//         {
//             name: 'Twitter',
//             image: {
//                 src: 'https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/twitter-logo.png',
//                 alt: 'Twitter Logo',
//             },
//             description:
//                 'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//             integrationType: 'Direct Integration',
//         },
//         {
//             name: 'Sketch',
//             image: {
//                 src: 'https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/sketch-logo.png',
//                 alt: 'Sketch Logo',
//             },
//             description:
//                 'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//             integrationType: 'Direct Integration',
//         },
//     ],
// }

const IntegrationOne = ({
    heading,
    description,
    integrations,
    integrationAll,
}) => {
    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        {heading}
                    </h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {integrations?.map((integration, index) => (
                        <div
                            key={index}
                            className="overflow-hidden group bg-white rounded shadow"
                        >
                            <div className="p-8">
                                <div className="flex items-center">
                                    <img
                                        className="flex-shrink-0 w-12 h-auto"
                                        src={integration.image.src}
                                        alt={integration.image.alt}
                                    />
                                    <div className="ml-5 mr-auto">
                                        <p className="text-xl font-semibold text-black">
                                            {integration.name}
                                        </p>
                                        <p className="mt-px text-sm text-gray-600">
                                            {integration.integrationType}
                                        </p>
                                    </div>
                                    <svg
                                        className=" opacity-0 group-hover:opacity-100 transition-all duration-600  w-5 h-5 text-blue-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </div>
                                <p className="text-base leading-relaxed text-gray-600 mt-7">
                                    {integration.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    {integrationAll && (
                        <a
                            href={integrationAll.href}
                            title=""
                            className="inline-flex p-3 font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                        >
                            {integrationAll.label}
                        </a>
                    )}
                </div>
            </div>
        </section>
    )
}

export default IntegrationOne
