import React from 'react'

const TeamTwo = ({ heading, team }) => {
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-5xl font-bold text-gray-900 sm:text-4xl xl:text-6xl font-pj">
                        {heading}
                    </h2>
                </div>

                <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-20 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
                    {team?.map((member, index) => (
                        <div
                            key={index}
                            className="text-center group cursor-pointer"
                        >
                            <img
                                className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter group-hover:filter-none group-hover:grayscale-0 transition duration-300"
                                src={member.image.src}
                                alt={member.image.alt}
                            />
                            <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
                                {member.name}
                            </p>
                            <p className="mt-2 text-base font-normal text-gray-600 font-pj">
                                {member.position}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeamTwo
