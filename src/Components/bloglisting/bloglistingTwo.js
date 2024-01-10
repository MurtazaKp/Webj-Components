import React from 'react';

const BlogListingTwo = ({mainHeading,description,articles}) => {
  const articleData ={
    mainHeading:"Read latest collection",
    description:"Create custom landing pages with Rareblocks that converts more visitors than any website.",
    airticles:[
    {
      category: 'Growth',
      date: 'April 09, 2022',
      title: 'How a visual artist redefines success in graphic design',
      imageSrc: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/1/thumbnail-1.png',
      link: '#'
    },
    {
      category: 'Growth',
      date: 'April 09, 2022',
      title: 'How a visual artist redefines success in graphic design',
      imageSrc: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/1/thumbnail-2.png',
      link: '#'
    },
    {
      category: 'Growth',
      date: 'April 09, 2022',
      title: 'How a visual artist redefines success in graphic design',
      imageSrc: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/1/thumbnail-3.png',
      link: '#'
    },
    {
      category: 'Growth',
      date: 'April 09, 2022',
      title: 'How a visual artist redefines success in graphic design',
      imageSrc: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/1/thumbnail-4.png',
      link: '#'
    },
    {
      category: 'Growth',
      date: 'April 09, 2022',
      title: 'How a visual artist redefines success in graphic design',
      imageSrc: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/1/thumbnail-5.png',
      link: '#'
    },
    {
      category: 'Growth',
      date: 'April 09, 2022',
      title: 'How a visual artist redefines success in graphic design',
      imageSrc: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/1/thumbnail-6.png',
      link: '#'
    },
  ]
  } 

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{mainHeading}</h2>
          <p className="mt-4 text-sm font-normal leading-6 text-gray-500">
            {description}
          </p>
        
        </div>

        <div className="grid grid-cols-1 mt-16 lg:mt-20 lg:grid-cols-2 gap-y-12 lg:gap-y-16 lg:gap-x-32 xl:mt-24">
          {articles.map((article, index) => (
            <div key={index} className="flex items-center">
              <a href={article.link} title="" className="shrink-0">
                <img className="w-28 h-28 rounded-xl object-cover" src={article.imageSrc} alt="" />
              </a>

              <div className="flex-1 ml-8">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium text-gray-900">
                    <a href={article.link} title="" className="">
                      {article.category}
                    </a>
                  </p>
                  <span className="text-sm font-medium text-gray-900"> • </span>
                  <p className="text-sm font-medium text-gray-900">{article.date}</p>
                </div>
                <p className="max-w-xs mt-3 text-xl font-bold text-gray-900 group-hover:text-gray-600">
                  <a href={article.link} title="" className="">
                    {article.title}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListingTwo;
