import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import HeroThree from '@/Components/hero/heroThree'
import { client } from '../../sanity/lib/client'
import { urlForImage } from '../../sanity/lib/image'
import FeaturesOne from '@/Components/feature/featureOne'
import LogoCloudOne from '@/Components/cloudLogo/cloudLogoOne'
import NewsletterOne from '@/Components/newsletter/newsletterOne'
import BlogTwo from '@/Components/blog/blogTwo'
import TestimonialOne from '@/Components/Testimonial/testimonialOne'

const inter = Inter({ subsets: ['latin'] })

async function getData(num) {
    const query = `*[_type == "component"]{
        sections[${num}]
      }`
    const data = await client.fetch(query)

    return data
}

export default function Home() {
    const [heroData, setHeroData] = useState()
    const [featureData, setFeatureData] = useState()
    const [cloudLogoData, setCloudLogoData] = useState()
    const [newsletterData, setNewsletterData] = useState()
    const [blogData, setBlogData] = useState()
    const [testimonialData, setTestimonialData] = useState()

    useEffect(() => {
        // hero api call
        async function fetchHeroData() {
            try {
                const result = await getData(2)

                setHeroData(result[0]?.sections)
                const bannerImage = result[0]?.sections?.bannerImage

                if (bannerImage) {
                    setHeroData((prevState) => ({
                        ...prevState,
                        bannerImage: {
                            src: urlForImage(bannerImage.src),
                        },
                    }))
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchHeroData()

        // feature api call
        async function fetchData() {
            try {
                const result = await getData(3)

                setFeatureData(result[0]?.sections)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()

        // cloud logo api call
        async function fetchCloudData() {
            try {
                const result = await getData(4)

                setCloudLogoData(result[0]?.sections)
                const companyLogos = result[0]?.sections?.companyLogos
                companyLogos.map((logo) => {
                    return (logo.src = urlForImage(logo.src))
                })

                if (companyLogos && Array.isArray(companyLogos.logos)) {
                    const updatedCompanyLogos = companyLogos.logos.map(
                        (logo) => ({
                            src: urlForImage(logo.src),
                        })
                    )

                    setCloudLogoData((prevState) => ({
                        ...prevState,
                        companyLogos: {
                            ...companyLogos,
                            logos: updatedCompanyLogos,
                        },
                    }))
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchCloudData()

        async function fetchNewsletterData() {
            try {
                const result = await getData(5)

                setNewsletterData(result[0]?.sections)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchNewsletterData()

        async function fetchBlogData() {
            try {
                const result = await getData(6)

                setBlogData(result[0]?.sections)

                const blogs = result[0]?.sections.blogs

                if (blogs) {
                    blogs.map((blog) => {
                        // Update blogImage.src and author.avatar.src using urlForImage
                        blog.blogImage.src = urlForImage(blog.blogImage.src)
                        blog.author.avatar.src = urlForImage(
                            blog.author.avatar.src
                        )

                        // You can add more logic here if needed

                        return blog // Return the updated blog object
                    })
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchBlogData()

        async function fetchTestimonialData() {
            try {
                const result = await getData(7)

                setTestimonialData(result[0]?.sections)

                const testimonials = result[0]?.sections.testimonials
                console.log(testimonials)

                if (testimonials) {
                    testimonials.map((testimonial) => {
                        // Update blogImage.src and author.avatar.src using urlForImage
                        testimonial.reviewerImage.src = urlForImage(
                            testimonial.reviewerImage.src
                        )

                        // You can add more logic here if needed

                        return testimonial // Return the updated blog object
                    })
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchTestimonialData()
    }, [])

    return (
        <>
            <HeroThree {...heroData} />
            <FeaturesOne {...featureData} />
            <LogoCloudOne {...cloudLogoData} />
            <NewsletterOne {...newsletterData} />
            <TestimonialOne {...testimonialData} />
            <BlogTwo {...blogData} />
        </>
    )
}
