import React from 'react';

const BlogListingOne = ({heading,paragraph,articles}) => {
  // Main Content
  const mainContent = {
    heading: 'Read Latest Articles',
    paragraph: 'Create custom landing pages with Rareblocks that converts more visitors than any website.',
  

  // Data for the articles
   articles : [
    {
      id: 1,
      title: 'How to write content about your photographs',
      imageSrc: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/2/thumbnail-1.png',
      category: 'Growth',
      date: 'April 09, 2022',
      description: 'Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Sit quis auctor odio arcu et dolor.',
    },
    {
      id: 2,
      title: '10 Tips for Stunning Nature Photography',
      imageSrc: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/2/thumbnail-2.png',
      category: 'Photography',
      date: 'April 15, 2022',
      description: 'Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Sit quis auctor odio arcu et dolor.',
    },
     {
      id: 3,
      title: 'The Art of Portrait Composition',
      imageSrc: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/2/thumbnail-3.png',
      category: 'Art',
      date: 'April 20, 2022',
      description: 'Learn the fundamentals of creating compelling portraits through effective composition techniques.',
    },
    {
      id: 4,
      title: 'Mastering Light in Landscape Photography',
      imageSrc: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/2/thumbnail-4.png',
      category: 'Photography',
      date: 'April 25, 2022',
      description: 'Discover the secrets to capturing breathtaking landscapes by harnessing the power of light.',
    },
    {
      id: 5,
      title: 'Tips for Editing Your Photos Like a Pro',
      imageSrc: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/2/thumbnail-5.png',
      category: 'Editing',
      date: 'April 30, 2022',
      description: 'Enhance your photography skills with professional photo editing tips and techniques.',
    },
    // Add more articles as needed
  ]
  }
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{heading}</h2>
          <p className="mt-5 text-sm font-normal leading-6 text-gray-500">{paragraph}</p>
        </div>

        <div className="grid max-w-2xl grid-cols-1 gap-4 mx-auto mt-12 sm:gap-6 xl:max-w-none xl:grid-cols-2 sm:mt-12 lg:gap-8 lg:mt-20">
          {articles.map(article => (
            <div
              key={article.id}
              className="overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1"
            >
              {/* Article Content */}
              <div className="flex flex-col sm:flex-row">
                <a href="#" title="" className="flex overflow-hidden shrink-0">
                  <img
                    className="object-cover w-full h-56 transition-all duration-200 transform group-hover:scale-110 sm:h-auto sm:w-56"
                    src={article.imageSrc}
                    alt=""
                  />
                </a>

                <div className="flex flex-col px-4 py-5 sm:p-6">
                  <div className="flex-1">
                    <p className="text-xl font-bold text-gray-900">
                      <a href="#" title="" className="">
                        {article.title}
                      </a>
                    </p>
                    <p className="mt-4 text-sm font-normal leading-6 text-gray-500">
                      {article.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-auto border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium text-gray-900">
                          <a href="#" title="" className="">
                            {article.category}
                          </a>
                        </p>
                        <span className="text-sm font-medium text-gray-900">•</span>
                        <p className="text-sm font-medium text-gray-900">{article.date}</p>
                      </div>

                      <a href="#" title="" className="" role="button">
                        <svg
                          className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <line x1="17" y1="7" x2="7" y2="17"></line>
                          <polyline points="8 7 17 7 17 16"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListingOne;
