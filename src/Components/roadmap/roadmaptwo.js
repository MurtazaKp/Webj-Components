import React from 'react';

const roadmapData = {
  mainHeading: 'Our Roadmap',
  mainDescription: 'In a creative workplace, employees with responsibly try different solutions',
  mainImageSrc: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/roadmap/8/image.png',
  phases: [
    {
      phase: 'Phase 1',
      title: 'Launch',
      description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit odio sagittis, ac senectus eta.',
    },
    {
      phase: 'Phase 2',
      title: 'Investment',
      description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit odio sagittis, ac senectus eta.',
    },
    {
      phase: 'Phase 3',
      title: 'Connection',
      description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit odio sagittis, ac senectus eta.',
    },
    {
      phase: 'Phase 4',
      title: 'Growth',
      description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit odio sagittis, ac senectus eta.',
    },
  ],
};

const RoadmapTwo = ({mainHeading,mainDescription,mainImageSrc,phases}) => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-stretch grid-cols-1 gap-y-12 lg:grid-cols-12 gap-x-16">
          <div className="lg:col-span-4">
            <div className="aspect-w-4 aspect-h-3 lg:aspect-none">
              <img className="object-cover w-full h-full" src={mainImageSrc} alt="" />
            </div>
          </div>

          <div className="flex flex-col justify-between lg:col-span-8">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold text-gray-900">
                {mainHeading}
              </h2>
              <p className="mt-4 text-base font-medium text-gray-500">
                {mainDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 mt-12 sm:grid-cols-2 sm:mt-16 xl:gap-x-16">
              {phases.map((item, index) => (
                <div key={index}>
                  <p className="text-sm font-medium text-gray-500">
                    {item.phase}
                  </p>
                  <p className="mt-4 text-xl font-bold text-gray-900">
                    {item.title}
                  </p>
                  <p className="mt-4 text-base font-medium text-gray-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapTwo;
