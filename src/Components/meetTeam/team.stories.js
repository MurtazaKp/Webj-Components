import React from 'react';
import TeamOne from './teamOne';
import TeamTwo from './teamTwo';


export default {
  title: 'Team',
};

const TeamOneTemplate = (args) => <TeamOne {...args} />;

export const TeamOneStory =TeamOneTemplate.bind({});
TeamOneStory.args = {
    heading:"Meet the brain",
description:"Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.",
team:[
    {
      name: "Albert Flores",
      position: "VP of Sales",
      image: "https://landingfoliocom.imgix.net/store/collection/saasui/images/team/5/team-member-1.png",
    },
    {
      name: "Theresa Webb",
      position: "Business Development Manager",
      image: "https://landingfoliocom.imgix.net/store/collection/saasui/images/team/5/team-member-2.png",
    },
    {
      name: "Savannah Nguyen",
      position: "Director of Product",
      image: "https://landingfoliocom.imgix.net/store/collection/saasui/images/team/5/team-member-3.png",
    },
    {
      name: "Daniel Murphy",
      position: "Business Analyst",
      image: "https://landingfoliocom.imgix.net/store/collection/saasui/images/team/5/team-member-4.png",
    },
    {
      name: "Darrell Steward",
      position: "Director of Sales",
      image: "https://landingfoliocom.imgix.net/store/collection/saasui/images/team/5/team-member-5.png",
    },

    {
        name: "Daniel Murphy",
        position: "Business Analyst",
        image: "https://landingfoliocom.imgix.net/store/collection/saasui/images/team/5/team-member-4.png",
      },
  ]
};


const TeamTwoTemplate = (args) => <TeamTwo {...args} />;

export const TeamTwoStory =TeamTwoTemplate.bind({});
TeamTwoStory.args = {
    heading:"Meet Our Team",
description:"Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.",
team:[
    {
      name: "Albert Flores",
      position: "VP of Sales",
      image: "https://landingfoliocom.imgix.net/store/collection/saasui/images/team/5/team-member-1.png",
    },
    {
      name: "Theresa Webb",
      position: "Business Development Manager",
      image: "https://landingfoliocom.imgix.net/store/collection/saasui/images/team/5/team-member-2.png",
    },
    {
      name: "Savannah Nguyen",
      position: "Director of Product",
      image: "https://landingfoliocom.imgix.net/store/collection/saasui/images/team/5/team-member-3.png",
    },
    {
      name: "Daniel Murphy",
      position: "Business Analyst",
      image: "https://landingfoliocom.imgix.net/store/collection/saasui/images/team/5/team-member-4.png",
    },
    
  ]
};