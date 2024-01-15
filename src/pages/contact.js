import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

import { client } from '../../sanity/lib/client'
import { urlForImage } from '../../sanity/lib/image'
import ContactOne from '@/Components/contact/contactOne'
import ContactTwo from '@/Components/contact/contactTwo'
import TestimonialOne from '@/Components/Testimonial/testimonialOne'

const inter = Inter({ subsets: ['latin'] })

async function getData(num) {
    const query = `*[_type == "component"]{
        sections[${num}]
      }`
    const data = await client.fetch(query)

    return data
}

export default function Contact() {
    const [contactData, setContactData] = useState()
    const [testimonialData, setTestimonialData] = useState()

    useEffect(() => {
        // hero api call
        async function fetchContactData() {
            try {
                const result = await getData(8)

                setContactData(result[0]?.sections)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchContactData()
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
            <ContactTwo {...contactData} />
            <TestimonialOne {...testimonialData} />
        </>
    )
}
