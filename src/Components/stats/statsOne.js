import React from 'react'

const StatsOne = ({ title, description, stats }) => {
    const numbersData = {
        title: 'Numbers tell our story',
        description:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.',
        stats: [
            {
                value: '6+',
                label: 'Years in business',
                description: 'Creating the successful path',
            },
            {
                value: '4821',
                label: 'Projects delivered',
                description: 'In the last 6 years',
            },
            {
                value: '37+',
                label: 'Team members',
                description: 'Working for your success',
            },
        ],
    }

    return (
        <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        {title}
                    </h2>
                    <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                    {stats?.map((stat, index) => (
                        <div key={index}>
                            <h3 className="font-bold text-7xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                                    {stat.value}
                                </span>
                            </h3>
                            <p className="mt-4 text-xl font-medium text-gray-900">
                                {stat.label}
                            </p>
                            <p className="text-base mt-0.5 text-gray-500">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StatsOne
