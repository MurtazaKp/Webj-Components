import React from 'react'
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './icon'

const SocialIcons = {
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    instagram: InstagramIcon,
    linkedin: LinkedInIcon,
    // Add more social media icons as needed
}

const SocialLink = ({ icon, url }) => {
    const IconComponent = SocialIcons[icon]

    return (
        <li>
            <a
                href={url}
                title={icon}
                className="flex items-center justify-center text-white transition-all duration-200 rounded-full w-7 h-7 "
            >
                <IconComponent />
            </a>
        </li>
    )
}

// const footerData = {
//     company:{
//         title:"company",
//         links: [
//             { title: 'About', url: '#' },
//             { title: 'Features', url: '#' },
//             { title: 'Works', url: '#' },
//             { title: 'Career', url: '#' },
//           ]
//     },
//  help:{
//     title:"help",
//     links: [
//         { title: 'Customer Support', url: '#' },
//         { title: 'Delivery Details', url: '#' },
//         { title: 'Terms & Conditions', url: '#' },
//         { title: 'Privacy Policy', url: '#' },
//       ]
//  },
//  resources:{
//    title:"resources",
//   links: [
//     { title: 'Free eBooks', url: '#' },
//     { title: 'Development Tutorial', url: '#' },
//     { title: 'How to - Blog', url: '#' },
//     { title: 'YouTube Playlist', url: '#' },
//   ]
// },
// extraLinks:{
//     title:"Extra Links",
//     links: [

//         { title: 'Customer Support', url: '#' },
//         { title: 'Delivery Details', url: '#' },
//         { title: 'Terms & Conditions', url: '#' },
//         { title: 'Privacy Policy', url: '#' },
//       ],
// },

//   socialMediaLinks: [
//     { icon: 'facebook', url: '#' },
//     { icon: 'twitter', url: '#' },
//     { icon: 'instagram', url: '#' },
//     { icon: 'linkedin', url: '#' },
//   ],
//   logoSrc: 'https://cdn.rareblocks.xyz/collection/celebration/images/logo-alt.svg',
//   copyrightText: '© Copyright 2021, All Rights Reserved by Postcraft',
// };

const FooterFive = ({
    socialMediaLinks,
    company,
    help,
    resources,
    extraLinks,
    logoSrc,
    copyrightText,
}) => {
    return (
        <section className="py-10 bg-gray-900 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
                    {/* Company */}
                    <div>
                        <p className="text-base text-gray-500">
                            {company.title}
                        </p>

                        <ul className="mt-8 space-y-4">
                            {company.links.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.url}
                                        title={item.title}
                                        className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <p className="text-base text-gray-500">{help.title}</p>

                        <ul className="mt-8 space-y-4">
                            {help.links.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.url}
                                        title={item.title}
                                        className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <p className="text-base text-gray-500">Resources</p>

                        <ul className="mt-8 space-y-4">
                            {resources.links.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.url}
                                        title={item.title}
                                        className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Extra Links */}
                    <div>
                        <p className="text-base text-gray-500">
                            {extraLinks.title}
                        </p>

                        <ul className="mt-8 space-y-4">
                            {extraLinks.links.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.url}
                                        title={item.title}
                                        className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-800" />

                <div className="flex flex-wrap items-center justify-between">
                    <img className="h-8 auto md:order-1" src={logoSrc} alt="" />

                    {/* Social Media Links */}
                    <ul className="flex items-center space-x-3 md:order-3">
                        {socialMediaLinks.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.url}
                                    title={item.icon}
                                    className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
                                >
                                    <SocialLink {...item} />
                                </a>
                            </li>
                        ))}
                    </ul>

                    <p className="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">
                        {copyrightText}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FooterFive
