import React from 'react';
import RoadmapOne from './roadmapOne';


export default {
  title: 'Roadmap',
};

const RoadmapOneTemplate = (args) => <RoadmapOne {...args} />;

export const RoadmapOneStory = RoadmapOneTemplate.bind({});

RoadmapOneStory.args = {
    heading:"    The Roadmap",
    description:"In a creative workplace, employees responsibly try different solutions",
roadmaps : [
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


const RoadmapTwoTemplate = (args) => <RoadmapTwoStory {...args} />;

export const RoadmapTwoStory = RoadmapTwoTemplate.bind({});

RoadmapTwoStory.args = {
    
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