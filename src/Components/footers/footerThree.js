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
                className="flex items-center justify-center text-black transition-all duration-200 rounded-full w-7 h-7 "
            >
                <IconComponent />
            </a>
        </li>
    )
}

const FooterThree = ({
    logo,
    socialMediaLinks,
    navigationLinks,
    copyright,
}) => {
    return (
        <footer className=" bg-gray-50 py-10 ">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {logo && (
                    <img
                        className="w-auto h-10 mx-auto"
                        src={logo.src}
                        alt={logo.alt}
                    />
                )}

                {/* Navigation Links */}
                <ul className="flex flex-wrap items-center justify-center gap-8 sm:gap-0 md:space-x-16 mt-14">
                    {navigationLinks?.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.href}
                                title={link.label}
                                target={link.target}
                                className="inline-flex text-lg font-medium text-gray-900 transition-all duration-200 transform font-pj hover:-translate-y-1 hover:text-gray-600"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="mt-12">
                    <svg
                        className="w-auto h-4 mx-auto text-gray-300"
                        viewBox="0 0 172 16"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
                        />
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
                        />
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
                        />
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
                        />
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
                        />
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
                        />
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
                        />
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
                        />
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
                        />
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
                        />
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
                        />
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
                        />
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
                        />
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
                        />
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
                        />
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
                        />
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
                        />
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
                        />
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
                        />
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
                        />
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
                        />
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
                        />
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
                        />
                        <line
                            y1="-0.5"
                            x2="18.0278"
                            y2="-0.5"
                            transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
                        />
                    </svg>
                </div>

                {/* Social Media Links */}
                <ul className="flex items-center justify-center mt-12 space-x-3">
                    {socialMediaLinks?.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.url}
                                target="_blank"
                                title={link.icon}
                                className="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                                rel="noopener"
                            >
                                <SocialLink {...link} />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Copyright Text */}
                <p className="text-base font-normal text-center text-gray-600 mt-7 font-pj">
                    {copyright}
                </p>
            </div>
        </footer>
    )
}

export default FooterThree
