import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

import { client } from '../../sanity/lib/client'
import { urlForImage } from '../../sanity/lib/image'
import AboutUsSection from '@/Components/about/aboutOne'
import TeamTwo from '@/Components/meetTeam/teamTwo'
import BlogTwo from '@/Components/blog/blogTwo'

const inter = Inter({ subsets: ['latin'] })

async function getData(num) {
    const query = `*[_type == "component"]{
        sections[${num}]
      }`
    const data = await client.fetch(query)

    return data
}

export default function Contact() {
    const [aboutData, setAboutData] = useState()
    const [teamData, setTeamData] = useState()
    const [blogData, setBlogData] = useState()

    useEffect(() => {
        // hero api call
        async function fetchAboutData() {
            try {
                const result = await getData(9)

                setAboutData(result[0]?.sections)

                const aboutImage = result[0]?.sections.aboutImage

                if (aboutImage) {
                    setAboutData((prevState) => ({
                        ...prevState,
                        aboutImage: {
                            src: urlForImage(aboutImage.src),
                        },
                    }))
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchAboutData()
        async function fetchTeamData() {
            try {
                const result = await getData(10)

                setTeamData(result[0]?.sections)

                const Team = result[0]?.sections.team
                console.log(Team)

                if (Team) {
                    Team.map((Team) => {
                        Team.image.src = urlForImage(Team.image.src)
                        console.log(Team.image.src, 'sduiahuifbduaBDUOB')

                        return Team
                    })
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchTeamData()
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
    }, [])

    console.log(teamData)
    return (
        <>
            <AboutUsSection {...aboutData} />
            <TeamTwo {...teamData} />
            <BlogTwo {...blogData} />
        </>
    )
}
