import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

import { client } from '../../sanity/lib/client'
import { urlForImage } from '../../sanity/lib/image'
import BlogListingOne from '@/Components/bloglisting/bloglistingOne'

const inter = Inter({ subsets: ['latin'] })

async function getData(num) {
    const query = `*[_type == "component"]{
        sections[${num}]
      }`
    const data = await client.fetch(query)

    return data
}

export default function Contact() {
    const [blogData, setBlogData] = useState()

    useEffect(() => {
        async function fetchBlogData() {
            try {
                const result = await getData(11)

                setBlogData(result[0]?.sections)

                const articles = result[0]?.sections.articles

                if (articles) {
                    articles.map((article) => {
                        article.image.src = urlForImage(article.image.src)

                        return article // Return the updated blog object
                    })
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchBlogData()
    }, [])

    return (
        <>
            <BlogListingOne {...blogData} />
        </>
    )
}
