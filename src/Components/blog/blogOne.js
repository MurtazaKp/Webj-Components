import React from 'react';

// Data for the blog posts
const blogData ={
    blogHeading:"We share regular updates in Rareblocks",
    blogs: [
  {
    id: 1,
    title: "The unseen of spending three years at Pixelgrade",
    image: "https://cdn.rareblocks.xyz/collection/clarity/images/blog/4/blog-1.png",
    category: "Lifestyle",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam cons."
  },
  {
    id: 2,
    title: "Why choose a theme that looks good with WooCommerce",
    image: "https://cdn.rareblocks.xyz/collection/clarity/images/blog/4/blog-2.png",
    category: "Tutorial",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam cons."
  },
  {
    id: 3,
    title: "How does writing influence your personal brand?",
    image: "https://cdn.rareblocks.xyz/collection/clarity/images/blog/4/blog-3.png",
    category: "Personal",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam cons."
  }
],
allBlogsCta:{
    label:"Read all blog posts",
    href:"#",
    target:"_blank"
}
}

const BlogOne = ({blogHeading,blogs,allBlogsCta}) => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="px-8 text-center sm:px-0">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-pj">{blogHeading}</h2>
        </div>

        <div className="relative max-w-md mx-auto mt-8 md:max-w-none sm:mt-12">
          <div className="absolute -inset-y-2 inset-x-16">
            <div className="w-full h-full mx-auto opacity-30 blur-lg filter" style={{ background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)' }}></div>
          </div>

          <div className="relative grid grid-cols-1 overflow-hidden bg-white divide-y divide-gray-200 shadow-xl md:grid-cols-3 md:divide-y-0 md:divide-x rounded-2xl">
            {blogs.map((post) => (
              <div key={post.id} className="relative px-5 py-6 group sm:p-8 xl:p-12 flex flex-col justify-between">
                <div >
                <div className="overflow-hidden aspect-w-16 aspect-h-8 rounded-2xl">
                  <img className="object-cover w-full h-full transition-all duration-200 group-hover:opacity-70" src={post.image} alt={post.title} />
                </div>
                <p className="text-xl font-bold text-gray-900 mt-7 font-pj">{post.title}</p>
                <p className="mt-3 text-base font-normal text-gray-600 font-pj">{post.content}</p>
                </div>
                <span className="inline-flex mt-8 text-xs font-bold tracking-widest text-gray-400 uppercase">{post.category}</span>
                <a href="#" title="">
                  <span className="absolute inset-0" aria-hidden="true"></span>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center md:mt-16">
          <a href={allBlogsCta.href} target={allBlogsCta.target} title="" className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"> {allBlogsCta.label}</a>
        </div>
      </div>
    </section>
  );
}

export default BlogOne;
