import React from 'react';

const teamMembers = {
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
}

const TeamOne = ({heading,description,team}) => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="overflow-hidden bg-gray-100 rounded-3xl">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <div className="col-span-2 px-8 py-12 text-center xl:px-12 xl:pr-24 lg:text-left lg:order-1">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                {heading}
              </h2>
              <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
                {description}
              </p>
            </div>

            {team.map((member, index) => (
              <div key={index} className={`relative overflow-hidden lg:order-${3 + index} group`}>
                <img
                  className="object-cover w-full h-full transition-all duration-200 group-hover:scale-110"
                  src={member.image}
                  alt={`Team Member ${index + 1}`}
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-full p-3 sm:py-5 sm:px-6">
                  <div className="scale-90 sm:scale-100">
                    <p className="text-base font-semibold text-white">
                      {member.name}
                    </p>
                    <p className="mt-1 text-sm font-normal text-gray-300">
                      {member.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            
          </div>
        </div>
      </div>
    </section>
  );
};



export default TeamOne;
