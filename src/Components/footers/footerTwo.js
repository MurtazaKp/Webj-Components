import React, { useState } from 'react'
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
                className="flex items-center justify-center text-black transition-all duration-200 rounded-full w-10 h-10 "
            >
                <IconComponent />
            </a>
        </li>
    )
}

const FooterTwo = ({
    companyLinks,
    helpLinks,
    resourcesLinks,
    newsletter,
    contactDetails,
    socialLinks,
}) => {
    return (
        <footer className="py-12 bg-white sm:pt-16 lg:pt-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <img
                    className="w-auto h-8"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg"
                    alt=""
                />

                <div className="grid grid-cols-2 mt-16 sm:grid-cols-3 gap-y-16 lg:grid-cols-6 gap-x-16">
                    <div>
                        <h6 className="text-sm font-bold tracking-widest text-gray-900 uppercase font-pj">
                            {companyLinks.heading}
                        </h6>
                        <ul className="mt-8 space-y-5">
                            {companyLinks.links.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.url}
                                        title=""
                                        className="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-sm font-bold tracking-widest text-gray-900 uppercase font-pj">
                            {helpLinks.heading}
                        </h6>
                        <ul className="mt-8 space-y-5">
                            {helpLinks.link.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.url}
                                        title=""
                                        className="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <h6 className="text-sm font-bold tracking-widest text-gray-900 uppercase font-pj">
                            {resourcesLinks.heading}
                        </h6>
                        <ul className="mt-8 space-y-5">
                            {resourcesLinks.links.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.url}
                                        title=""
                                        className="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-span-2 sm:col-span-3 xl:pl-20">
                        <h6 className="text-sm font-bold tracking-widest text-gray-900 uppercase font-pj">
                            {newsletter.label}
                        </h6>

                        <div className="relative mt-8">
                            <div className="absolute -inset-2">
                                <div
                                    className="w-full h-full mx-auto opacity-30 blur-lg filter"
                                    style={{
                                        background:
                                            'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
                                    }}
                                ></div>
                            </div>

                            <form action="#" method="POST" className="relative">
                                <div className="flex">
                                    <div className="flex-1">
                                        <input
                                            type="email"
                                            name=""
                                            id=""
                                            placeholder={newsletter.placeholder}
                                            className="block w-full px-4 py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-gray-300 focus:ring-gray-900 focus:border-gray-900 rounded-l-xl font-pj caret-gray-900"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="px-10 py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent sm:px-16 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 rounded-r-xl font-pj focus:outline-none"
                                    >
                                        {newsletter.buttonText}
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="grid grid-cols-1 mt-8 gap-y-8 sm:grid-cols-2 sm:gap-x-16">
                            <div>
                                <h6 className="text-sm font-bold tracking-widest text-gray-900 uppercase font-pj">
                                    {contactDetails.callUs.heading}
                                </h6>
                                <p className="mt-2.5 text-xl font-pj text-gray-900 font-bold">
                                    <a href="#" title="">
                                        {' '}
                                        {contactDetails.callUs.value}{' '}
                                    </a>
                                </p>
                            </div>

                            <div>
                                <h6 className="text-sm font-bold tracking-widest text-gray-900 uppercase font-pj">
                                    {contactDetails.emailUs.heading}
                                </h6>
                                <p className="mt-2.5 text-xl font-pj text-gray-900 font-bold">
                                    <a href="#" title="">
                                        {' '}
                                        {contactDetails.emailUs.value}{' '}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    ;
                </div>

                <hr className="mt-16 border-gray-200" />

                <div className="mt-8 sm:flex sm:items-center sm:justify-between">
                    <ul className="flex items-center justify-start space-x-3 sm:order-2 sm:justify-end">
                        {socialLinks.map((link) => (
                            <SocialLink key={link.icon} {...link} />
                        ))}
                    </ul>

                    <p className="mt-8 text-sm font-normal text-gray-600 font-pj sm:order-1 sm:mt-0">
                        © Copyright 2021, All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default FooterTwo
