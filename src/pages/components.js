import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

import { client } from '../../sanity/lib/client'
import { urlForImage } from '../../sanity/lib/image'

import StepsOne from '@/Components/steps/stepsOne'
import DashboardStepsOne from '@/Components/dashboardSteps/dashboardStepsOne'
import SignUpOne from '@/Components/signIn/signUpOne'
import FeatureDropsOne from '@/Components/featureDrops/featureDropsOne'
import LoginOne from '@/Components/login/loginOne'
import IntegrationOne from '@/Components/integration/integrationOne'
import ProgramOne from '@/Components/program/programOne'
import TableStackOne from '@/Components/tableStack/tableStackOne'

const inter = Inter({ subsets: ['latin'] })

async function getData(num) {
    const query = `*[_type == "component"]{
        sections[${num}]
      }`
    const data = await client.fetch(query)

    return data
}

export default function Home() {
    const [stepData, setStepData] = useState()
    const [signupData, setSignupData] = useState()
    const [FeatureDropLogoData, setFeatureDropData] = useState()
    const [loginData, setloginData] = useState()
    const [IntegrationData, setIntegrationData] = useState()
    const [programData, setProgramData] = useState()
    const [tableStackData, setTableStackData] = useState()

    useEffect(() => {
        // Step api call
        async function fetchStepData() {
            try {
                const result = await getData(15)

                setStepData(result[0]?.sections)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchStepData()

        // Signup api call
        async function fetchSignupData() {
            try {
                const result = await getData(16)

                setSignupData(result[0]?.sections)
                const signup = result[0]?.sections
                console.log(signup, 'dasff')
                if (signup) {
                    setSignupData((prevState) => ({
                        ...prevState,
                        logo: {
                            src: urlForImage(signup.logo.src),
                        },
                        testimonial: {
                            ...signup.testimonial, // Spread the existing testimonial properties
                            authorAvatar: {
                                src: urlForImage(
                                    signup.testimonial.authorAvatar.src
                                ),
                            },
                        },
                    }))
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchSignupData()

        // FeatureDrop logo api call
        async function FetchFeatureDropData() {
            try {
                const result = await getData(17)

                setFeatureDropData(result[0]?.sections)
                const sections = result[0]?.sections

                if (sections && Array.isArray(sections.items)) {
                    const item = sections.items.map((item) => {
                        const updatedAvatars = item.avatars.map((avatar) => ({
                            ...avatar,
                            src: urlForImage(avatar.src),
                        }))

                        return {
                            ...item,
                            avatars: updatedAvatars,
                            imageUrl: {
                                src: urlForImage(item.imageUrl.src),
                            },
                        }
                    })

                    setFeatureDropData((prevState) => ({
                        ...prevState,
                        items: item,
                    }))
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        FetchFeatureDropData()

        async function fetchLoginData() {
            try {
                const result = await getData(18)

                const login = result[0]?.sections

                console.log(
                    login.testimonial,
                    'asfdpjsdfosdjfklsfkldfnsdjkfhsdjfhsdjh'
                )
                if (login) {
                    setloginData((prevState) => ({
                        ...prevState,

                        testimonial: {
                            ...login.testimonial, // Spread the existing testimonial properties
                            author: {
                                avatar: {
                                    src: urlForImage(
                                        login.testimonial.author.avatar.src
                                    ),
                                },
                            },
                        },
                    }))
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchLoginData()

        async function fetchIntegrationData() {
            try {
                const result = await getData(19)

                setIntegrationData(result[0]?.sections)

                const integrations = result[0]?.sections.integrations

                if (integrations) {
                    integrations.map((integration) => {
                        integration.image.src = urlForImage(
                            integration.image.src
                        )

                        return integrations // Return the updated Integration object
                    })
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchIntegrationData()

        // Program api call
        async function fetchProgramData() {
            try {
                const result = await getData(20)

                setProgramData(result[0]?.sections)
                const imageUrl = result[0]?.sections?.imageUrl

                if (imageUrl) {
                    setProgramData((prevState) => ({
                        ...prevState,
                        imageUrl: {
                            src: urlForImage(imageUrl.src),
                        },
                    }))
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchProgramData()

        // Program api call
        async function fetchTablestackData() {
            try {
                const result = await getData(21)

                setTableStackData(result[0]?.sections)

                const customerList = result[0]?.sections.CustomerList

                if (customerList) {
                    customerList.map((customer) => {
                        customer.avatar.src = urlForImage(customer.avatar.src)

                        return customer
                    })
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchTablestackData()
    }, [])
    console.log(tableStackData, '000000000000000000000000000000000000')
    return (
        <>
            <DashboardStepsOne {...stepData} />
            <SignUpOne {...signupData} />
            <FeatureDropsOne {...FeatureDropLogoData} />
            <LoginOne {...loginData} />
            <IntegrationOne {...IntegrationData} />
            <ProgramOne {...programData} />
            <TableStackOne {...tableStackData} />
        </>
    )
}
