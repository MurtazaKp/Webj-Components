import React from 'react'

const CourseInfoOne = ({ mainTitle, mainParagraph, communities }) => {
    const data = {
        mainTitle: 'Is this course right for me?',
        mainParagraph:
            'Amet facilisis egestas egestas nunc. Proin ut eget quam ornare tincidunt ornare in sit. Sociis facilisis leo faucibus donec est neque. Neque in volutpat, at volutpat nulla enim risus nisl. Enim sed eget amet gravida scelerisque egestas vitae.',
        communities: [
            {
                title: 'Slack Community 1',
                description:
                    'Non pretium mi, sagittis placerat. Elit risus malesuada ornare orci in. Tellus, tempor eget vitae aliquet suspendisse sed purus velit elit.',
            },
            {
                title: 'Slack Community 2',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis, sapien non volutpat molestie, eros quam elementum tortor.',
            },
            {
                title: 'Slack Community 3',
                description:
                    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
                title: 'Slack Community 4',
                description:
                    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
                title: 'Slack Community 5',
                description:
                    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
                title: 'Slack Community 6',
                description:
                    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
        ],
    }

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-black">
            <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                <div className="lg:flex lg:items-start lg:justify-between lg:space-x-12">
                    <h2 className="flex-1 tracking-tighter text-white">
                        <span className="font-sans text-4xl font-normal sm:text-5xl md:text-6xl">
                            {mainTitle}
                        </span>
                    </h2>

                    <p className="mt-8 font-sans text-lg text-opacity-50 lg:mt-0 lg:max-w-sm text-white">
                        {mainParagraph}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 mt-12 lg:mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {communities?.map((community, index) => (
                        <div
                            key={index}
                            className="transition-all duration-200 border rounded-lg border-neutral hover:bg-dark-gray"
                        >
                            <div className="px-4 py-5 sm:p-6 md:p-8">
                                <h3 className="mt-2 font-serif text-3xl italic text-white">
                                    {community.title}
                                </h3>
                                <p className="mt-4 font-sans text-base font-normal text-opacity-50 text-white">
                                    {community.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CourseInfoOne
