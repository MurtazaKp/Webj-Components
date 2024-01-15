import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

import { client } from '../../sanity/lib/client'
import { urlForImage } from '../../sanity/lib/image'

import TestimonialOne from '@/Components/Testimonial/testimonialOne'
import StatsOne from '@/Components/stats/statsOne'
import PricingOne from '@/Components/pricing/pricingOne'
import PricingTwo from '@/Components/pricing/pricingTwo'
import NewsletterOne from '@/Components/newsletter/newsletterOne'
import FaqTwo from '@/Components/faq/faqTwo'

const inter = Inter({ subsets: ['latin'] })

async function getData(num) {
    const query = `*[_type == "component"]{
        sections[${num}]
      }`
    const data = await client.fetch(query)

    return data
}

export default function Contact() {
    const [statsData, setStatsData] = useState()
    const [testimonialData, setTestimonialData] = useState()
    const [planData, setPlanData] = useState()
    const [newsletterData, setNewsletterData] = useState()
    const [faqData, setFaqData] = useState()

    useEffect(() => {
        // hero api call
        async function fetchStatsData() {
            try {
                const result = await getData(12)

                setStatsData(result[0]?.sections)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchStatsData()

        async function fetchPricingData() {
            try {
                const result = await getData(13)

                setPlanData(result[0]?.sections)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchPricingData()

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

        async function fetchNewsletterData() {
            try {
                const result = await getData(5)

                setNewsletterData(result[0]?.sections)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchNewsletterData()

        async function fetchFaqData() {
            try {
                const result = await getData(14)

                setFaqData(result[0]?.sections)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchFaqData()
    }, [])

    return (
        <>
            <StatsOne {...statsData} />
            <PricingTwo {...planData} />
            <FaqTwo {...faqData} />
            <NewsletterOne {...newsletterData} />
            <TestimonialOne {...testimonialData} />
        </>
    )
}
