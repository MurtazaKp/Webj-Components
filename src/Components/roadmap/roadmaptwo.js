import React from 'react';

// Declare the data
const roadmapData = {
  heading: "The Roadmap",
  description: "In a creative workplace, employees responsibly try different solutions",
  roadmaps: [
    {
      imageSrc: "https://landingfoliocom.imgix.net/store/collection/niftyui/images/roadmap/3/Spark.svg",
      title: "Phase 1",
      subtitle: "Investment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit odio sagittis, ac senectus eta."
    },
    {
      imageSrc: "https://landingfoliocom.imgix.net/store/collection/niftyui/images/roadmap/3/Link.svg",
      title: "Phase 2",
      subtitle: "Connection",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit odio sagittis, ac senectus eta."
    },
    {
      imageSrc: "https://landingfoliocom.imgix.net/store/collection/niftyui/images/roadmap/3/Setting.svg",
      title: "Phase 3",
      subtitle: "Setting up NFTS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit odio sagittis, ac senectus eta."
    },
    {
      imageSrc: "https://landingfoliocom.imgix.net/store/collection/niftyui/images/roadmap/3/Grow.svg",
      title: "Phase 4",
      subtitle: "Growth",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit odio sagittis, ac senectus eta."
    }
  ]
}

const RoadmapTwo = ({ heading, roadmaps, description }) => {
  return (
    <section className="py-12 bg-gray-900 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-md text-center sm:text-left">
          <h2 className="text-3xl font-bold text-white">
            {heading}
          </h2>
          <p className="mt-4 text-base font-medium text-gray-400">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 px-12 mt-12 text-center sm:mt-16 sm:px-0 sm:text-left sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-16 xl:gap-x-20">
          {roadmaps.map((item, index) => (
            <div key={index}>
              <img className="w-auto h-10 mx-auto sm:mx-0" src={item.imageSrc} alt="" />
              <p className="mt-6 text-xl font-bold text-white">
                {item.title}
              </p>
              <p className="mt-5 text-xs font-medium tracking-wide text-gray-500 uppercase">
                {item.subtitle}
              </p>
              <p className="mt-3 text-sm font-medium text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapTwo;
