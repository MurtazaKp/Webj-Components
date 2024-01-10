import React, { useState } from 'react';

const PricingTwo = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly'); // 'monthly' is the default selected plan

  // Data for each plan
  const plansData = {
    planHeading:"Plans that scale with business",
    planDescription:" Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS",
    plans: [
     {
      title: 'Basic',
      shortDesc:"Lorem ipsum dolor sit amet, consec tetur adipis elit",
      icon: '👋',
      price: 0,
      savings: 0,
      planButton:{
        buttonText:"Get 14 Days free trial",
        href:"#",
        target:"_blank"

      },
      features: [
        'Full Access to Landingfolio',
        '5 GB Free Storage',
        'Unlimited Visitors',
        '1 Agents',
        'Live Chat Support',
      ],
    },
     {
      title: 'Pro',
      shortDesc:"Lorem ipsum dolor sit amet, consec tetur adipis elit",
      icon: '💪',
      price: 49,
      savings: 20,
      planButton:{
        buttonText:"Get 14 Days free trial",
        href:"#",
        target:"_blank"

      },
      features: [
        'Full Access to Landingfolio',
        '20 GB Free Storage',
        'Unlimited Visitors',
        '5 Agents',
        'Live Chat Support',
      ],
    }, {
      title: 'Exclusive',
      shortDesc:"Lorem ipsum dolor sit amet, consec tetur adipis elit",
      icon: '🚀',
      price: 99,
      savings: 0,
      planButton:{
        buttonText:"Get 14 Days free trial",
        href:"#",
        target:"_blank"

      },
      features: [
        'Full Access to Landingfolio',
        '100 GB Free Storage',
        'Unlimited Visitors',
        '10 Agents',
        'Live Chat Support',
      ],
    }
  
]
  }
 

 

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
           {plansData.planHeading}
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
           {plansData.planDescription}
          </p>
        </div>

        <div className="flex items-center justify-center mt-8 space-x-6 sm:mt-12">
        
        </div>

        <div className="grid max-w-5xl grid-cols-1 mx-auto mt-12 lg:grid-cols-3 lg:gap-8 sm:mt-16 lg:mt-20">
          {plansData.plans.map((plan) => (
            <div
              key={plan}
              className={` bg-white border border-gray-200 divide-y divide-gray-200 rounded-2xl sm:rounded-3xl mt-14 lg:mt-0`}
            >
              <div className="px-4 py-5 bg-gray-50 sm:p-6 rounded-t-2xl sm:rounded-t-3xl">
                <div className="flex items-start">
                  <span className="text-3xl shrink-0">{plan.icon}</span>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {plan.title}
                    </h3>
                    <p className="mt-2 text-sm font-normal text-gray-500">
                      {plan.shortDesc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-end">
                  <p className="text-5xl font-semibold text-gray-900">
                    ${plan.price}
                  </p>
                  <p className="py-1 text-sm font-normal text-gray-500">
                    /mo/user
                  </p>
                </div>

                <div className="mt-6">
                  <a
                    href={plan.planButton.href}
                    title=""
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white transition-all duration-200 bg-gray-400 border border-transparent rounded-xl  hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    role="button"
                  >
                  {plan.planButton.buttonText}
                  </a>
                </div>

                <p className="mt-8 text-xs font-semibold tracking-widest text-gray-500 uppercase">
                  Best for free
                </p>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-blue-600 shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTwo;
