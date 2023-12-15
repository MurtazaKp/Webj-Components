// ComponentName.js
import React, { useState } from 'react';
import {  FacebookIconFilled, InstagramIcon, InstagramIconFilled, LinkedInIcon, LinkedInIconFilled, TwitterIcon, TwitterIconFilled } from './icon';

const SocialIcons = {
    facebook: FacebookIconFilled,
    twitter: TwitterIconFilled,
    instagram: InstagramIconFilled,
    linkedin: LinkedInIconFilled,
    // Add more social media icons as needed
  };
  
  const SocialLink = ({ icon, url }) => {
    const IconComponent = SocialIcons[icon];
  
    return (
      <li>
        <a href={url} title={icon} className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
          <IconComponent />
        </a>
      </li>
    );
  };
  


const FooterOne= ({ textLogo, paragraph, logoSrc, description, socialLinks, companyLinks, helpLinks, newsletter }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here using the 'email' state
    console.log(`Subscribed with email: ${email}`);
  };

  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            {textLogo && <p className="text-2xl font-bold text-gray-800">{textLogo}</p>}
            <img className="w-auto h-9" src={logoSrc} alt="" />
            <p className="text-base leading-relaxed text-gray-600 mt-7">{paragraph || description}</p>
            <ul className="flex items-center space-x-3 mt-9">
              {socialLinks.map((link) => (
                <SocialLink key={link.icon} {...link} />
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">{companyLinks.heading}</p>
            <ul className="mt-6 space-y-4">
              {companyLinks.links.map((companyLink, index) => (
                <li key={index}>
                  <a href={companyLink.url} title={companyLink.title} className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">{companyLink.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">{helpLinks.heading}</p>
            <ul className="mt-6 space-y-4">
              {helpLinks.link.map((helpLink, index) => (
                <li key={index}>
                  <a href={helpLink.url} title={helpLink.title} className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">{helpLink.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">{newsletter.label}</p>
            <form onSubmit={handleSubscribe} className="mt-6">
              <div>
                <label htmlFor="email" className="sr-only">{newsletter.inputTitle}</label>
                <input
                  type={newsletter.inputTitle}
                  name={newsletter.inputTitle}
                  id={newsletter.inputTitle}
                  placeholder={newsletter.placeholder}
                  value={email}
                  onChange={handleEmailChange}
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                />
              </div>
              <button type="submit" className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700">{newsletter.buttonText}</button>
            </form>
          </div>
        </div>
        <hr className="mt-16 mb-10 border-gray-200" />
        <p className="text-sm text-center text-gray-600">© Copyright 2021, All Rights Reserved by Postcraft</p>
      </div>
    </section>
  );
};

export default FooterOne;
