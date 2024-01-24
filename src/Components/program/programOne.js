import { data } from 'autoprefixer'
import React, { useState } from 'react'

const ProgramOne = ({
    title,
    subtitle,
    description,
    buttonText,
    weeks,
    imageUrl,
}) => {
    const Programdata = {
        title: 'Another Title',
        subtitle: 'Subtitle for Another Component',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        buttonText: { label: 'Learn More', href: '#' },
        imageUrl: {
            src: 'https://cdn.rareblocks.xyz/collection/bakerstreet/images/programs/3/program-big.png',
            alt: 'image',
        },

        weeks: [
            {
                title: 'SECTION 1',
                duration: 'Week 1 - Week 2',
                content:
                    'Etiam orci, tellus vestibulum sem in viverra quisque. Mi massa mauris amet lorem fusce. Iaculis id viverra ut semper mattis pellentesque.',
            },
            {
                title: 'SECTION 2',
                duration: 'Week 3 - Week 8',
                content:
                    'Etiam orci, tellus vestibulum sem in viverra quisque. Mi massa mauris amet lorem fusce. Iaculis id viverra ut semper mattis pellentesque.',
            },
            {
                title: 'SECTION 3',
                duration: 'Week 8 - Week 10',
                content:
                    'Etiam orci, tellus vestibulum sem in viverra quisque. Mi massa mauris amet lorem fusce. Iaculis id viverra ut semper mattis pellentesque.',
            },
        ],
    }

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-800">
            <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12">
                    <div className="flex flex-col self-stretch justify-between">
                        <div className="flex-1">
                            <h2 className="tracking-tighter text-white">
                                <span className="font-sans text-4xl font-normal sm:text-5xl md:text-6xl">
                                    {title}
                                </span>
                                <span className="font-serif text-5xl italic sm:text-6xl sm:block md:text-7xl">
                                    {subtitle}
                                </span>
                            </h2>
                            <p className="mt-6 font-sans text-lg font-normal text-opacity-50 text-white">
                                {description}
                            </p>
                            <div className="mt-8">
                                {buttonText && (
                                    <a
                                        href={buttonText.href}
                                        title=""
                                        className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        px-5
                                        py-2
                                        font-sans
                                        text-base
                                        font-semibold
                                        transition-all
                                        duration-200
                                        border-2 border-transparent
                                        rounded-full
                                        sm:leading-8
                                        bg-white
                                        sm:text-lg
                                        text-black
                                        hover:bg-opacity-90
                                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                                    "
                                        role="button"
                                    >
                                        {buttonText.label}
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="relative max-w-md mt-8 overflow-hidden rounded-lg group lg:mt-auto">
                            <div className="aspect-w-16 aspect-h-9 mt-6">
                                {imageUrl && (
                                    <img
                                        className="object-cover w-full h-full transition-all duration-300 transform opacity-70 group-hover:scale-125"
                                        src={imageUrl.src}
                                        alt={imageUrl.alt}
                                    />
                                )}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>
                        </div>
                    </div>

                    <div className="lg:pl-16">
                        <div className="overflow-hidden border divide-y rounded-lg border-neutral divide-neutral">
                            {weeks?.map((week, index) => (
                                <div
                                    key={index}
                                    className="px-8 py-10 transition-all duration-200 hover:bg-dark-gray"
                                >
                                    <h3 className="font-sans text-sm font-semibold uppercase text-white">
                                        {week.title}
                                    </h3>
                                    <p className="mt-2 font-serif text-3xl italic text-white">
                                        {week.duration}
                                    </p>
                                    <p className="mt-4 font-sans text-base font-normal text-opacity-50 text-white">
                                        {week.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProgramOne
