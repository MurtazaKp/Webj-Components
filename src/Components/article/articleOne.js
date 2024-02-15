import React from 'react'
import { CustomPortableText } from '../Custom Portable Text/CustomerPortable'

const ArticleOne = ({ subheading, date, heading, content }) => {
    const blogData = {
        subheading: 'blog',
        date: ' April 14, 2021',
        heading:
            'Discover the most solutions for building landing page website.',
        content: `
      <p class="text-base font-normal leading-7 text-gray-700 font-pj">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa risus sed eget ornare posuere turpis vitae. Id elementum velit posuere vestibulum lectus id eu sollicitudin. Tellus amet bibendum sit mus phasellus quis duis lacus. Enim eget sagittis, auctor iaculis nulla semper.
      </p>
      <h2 class="mt-12 text-3xl font-bold text-gray-900 font-pj">Get everything from scratch</h2>
      <p class="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">
        Massa risus sed eget ornare posuere turpis vitae. Id elementum velit posuere vestibulum lectus id eu sollicitudin. Tellus amet bibendum sit mus phasellus quis duis lacus. Enim eget sagittis, auctor iaculis nulla semper. In vitae neque integer integer metus, est, tristique fermentum tristique.
      </p>`,
    }

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto xl:max-w-4xl">
                    <p className="text-sm font-bold tracking-widest text-gray-400 uppercase font-pj">
                        {subheading}
                    </p>
                    <h1 className="text-3xl font-bold text-gray-900 mt-7 sm:text-4xl xl:text-5xl font-pj">
                        {heading}
                    </h1>
                    <p className="text-sm font-normal text-gray-600 mt-7 font-pj">
                        {date}
                    </p>

                    <div className="mt-10">
                        {/* SVG Lines */}
                        <svg
                            class="w-auto h-4 text-gray-300"
                            width="172"
                            height="16"
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

                        {/* Content with dangerously set HTML */}
                        <div
                            className="mt-10"
                            dangerouslySetInnerHTML={{
                                __html: content,
                            }}
                        />
                        <CustomPortableText value={content} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ArticleOne
