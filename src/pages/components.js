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
import StatsDataOne from '@/Components/dataStats/dataStatsOne'
import ProductOverviewOne from '@/Components/productOverview/productOverviewOne'
import CatagoryOne from '@/Components/catagories/catagoryOne'
import BlogNewsletterOne from '@/Components/blogNewsLetter/blogNewsletterOne'
import NotificationOne from '@/Components/notification/notificationOne'
import PageTitleOne from '@/Components/pageTitle/pageTitleOne'
import ImageGalleryOne from '@/Components/imageGallary/imageGallaryOne'
import AuthorOne from '@/Components/author/authorOne'
import CourseInfoOne from '@/Components/courseInfo/courseOne'
import SelectBox from '@/Components/selectBox/selectBoxOne'
import TableGrid from '@/Components/tableGrid/tableGridOne'
import ConnectWalletOne from '@/Components/connectWallet/connectWalletOne'
import MintApeOne from '@/Components/Mint/MintOne'
import BreadcrumbOne from '@/Components/breadcrumb/breadcrumbOne'
import TableListOne from '@/Components/tableList/tableListOne'
import ApproveTransactionOne from '@/Components/aproveTransaction/aproveTransactionOne'
import RarityOne from '@/Components/rarity/rarityOne'
import TabsOne from '@/Components/tabs/tabsOne'
import BlogFeaturedOne from '@/Components/blogFeatured/blogFeaturedOne'
import AuthorDetailsOne from '@/Components/authorDetails/authorDetailsOne'
import BlogContentOne from '@/Components/blogContent/blogContentOne'
import ArticleOne from '@/Components/article/articleOne'
import TransactionProgressOne from '@/Components/transactionProgress/transactionProgressOne'
import MintSuccessOne from '@/Components/mintSuccess/mintSuccessOne'
import HomeSidebarOne from '@/Components/homeSidebar/homeSidebarOne'
import VerticalMenu from '@/Components/verticalMenu/verticalMenuOne'
import IncentiveOne from '@/Components/incentives/incentiveOne'
import Button from '@/Components/button/button'
import Avatar from '@/Components/avatar/avatar'

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
    const [dataStatsData, setDataStatsData] = useState()
    const [productOverviewData, setProductOverviewData] = useState()
    const [catagoryData, setcatagoryData] = useState()
    const [blogNewsletterData, setBlogNewsletterData] = useState()
    const [notificationData, setNotificationData] = useState()
    const [pageTitleData, setPageTitleData] = useState()
    const [imageGallaryData, setImageGallaryData] = useState()
    const [authorData, setAuthorData] = useState()
    const [courseInfoData, setCourseInfoData] = useState()
    const [selectBoxData, setSelectBoxData] = useState()
    const [tableGridData, setTableGridData] = useState()
    const [connectWalletData, setConnectWalletData] = useState()
    const [mintData, setMintData] = useState()
    const [breadcrumbData, setBreadcrumbData] = useState()
    const [tableListData, setTableListData] = useState()
    const [approveTransactionData, setApproveTransactionData] = useState()
    const [rarityData, setRarityData] = useState()
    const [tabsData, setTabsData] = useState()
    const [blogFeatureData, setBlogFeatureData] = useState()
    const [authorDetailsData, setAuthorDetailsData] = useState()
    const [blogContentData, setBlogContentData] = useState()
    const [articleData, setArticleData] = useState()
    const [transactionProgressData, setTransactionProgressData] = useState()
    const [mintSuccessData, setMintSuccessData] = useState()
    const [homeSidebarData, setHomeSidebarData] = useState()
    const [verticalMenuData, setVerticalMenuData] = useState()
    const [incentiveData, setIncentiveData] = useState()
    const [buttonData, setButtonData] = useState()
    const [avatarData, setAvatarData] = useState()

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

        // Table stack api call
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

        // Data stats api call

        async function fetchDataStatsData() {
            try {
                const result = await getData(22)

                setDataStatsData(result[0]?.sections)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchDataStatsData()

        async function fetchProductOverviewData() {
            try {
                const result = await getData(23)

                setProductOverviewData(result[0]?.sections)
                const imageUrl = result[0]?.sections?.imageUrl

                if (imageUrl) {
                    setProductOverviewData((prevState) => ({
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
        fetchProductOverviewData()
        async function fetchCatagoryData() {
            try {
                const result = await getData(24)

                setcatagoryData(result[0]?.sections)

                const catagories = result[0]?.sections.catagories

                if (catagories) {
                    catagories.map((catagory) => {
                        catagory.imageSrc.src = urlForImage(
                            catagory.imageSrc.src
                        )

                        return catagory // Return the updated blog object
                    })
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchCatagoryData()

        async function fetchBlogNewsletterData() {
            try {
                const result = await getData(25)

                setBlogNewsletterData(result[0]?.sections)
                const image = result[0]?.sections?.image

                if (image) {
                    setBlogNewsletterData((prevState) => ({
                        ...prevState,
                        image: {
                            src: urlForImage(image.src),
                        },
                    }))
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchBlogNewsletterData()

        async function fetchNotificataionData() {
            try {
                const result = await getData(26)

                setNotificationData(result[0]?.sections)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchNotificataionData()

        async function fetchPageTitleData() {
            try {
                const result = await getData(27)

                setPageTitleData(result[0]?.sections)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchPageTitleData()

        async function fetchImageGallaryData() {
            try {
                const result = await getData(28)

                setImageGallaryData(result[0]?.sections)

                const gallary = result[0]?.sections.images

                if (gallary) {
                    gallary.map((gallary) => {
                        gallary.src = urlForImage(gallary.src)

                        return gallary // Return the updated blog object
                    })
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchImageGallaryData()

        async function fetchAuthorData() {
            try {
                const result = await getData(29)

                setAuthorData(result[0]?.sections)

                const authors = result[0]?.sections.authors

                if (authors) {
                    authors.map((author) => {
                        author.image.src = urlForImage(author.image.src)

                        return author // Return the updated blog object
                    })
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchAuthorData()

        async function fetchCourseInfoData() {
            try {
                const result = await getData(30)

                setCourseInfoData(result[0]?.sections)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchCourseInfoData()

        async function fetchSelectBox() {
            try {
                const result = await getData(31)

                setSelectBoxData(result[0]?.sections)

                const customers = result[0]?.sections.customers

                if (customers) {
                    customers.map((customer) => {
                        customer.imageUrl.src = urlForImage(
                            customer.imageUrl.src
                        )

                        return customer
                    })
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchSelectBox()

        async function fetchTableGridData() {
            try {
                const result = await getData(32)

                setTableGridData(result[0]?.sections)

                const payments = result[0]?.sections.payments

                if (payments) {
                    payments.map((payment) => {
                        payment.avatar.src = urlForImage(payment.avatar.src)

                        return payment
                    })
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchTableGridData()

        async function fetchconnectWalletData() {
            try {
                const result = await getData(33)

                setConnectWalletData(result[0]?.sections)

                const walletOption = result[0]?.sections.walletOptions

                if (walletOption) {
                    walletOption.map((option) => {
                        option.logoSrc.src = urlForImage(option.logoSrc.src)

                        return option
                    })
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchconnectWalletData()

        async function fetchMintData() {
            try {
                const result = await getData(34)

                setMintData(result[0]?.sections)
                const imageSrc = result[0]?.sections?.imageSrc

                if (imageSrc) {
                    setMintData((prevState) => ({
                        ...prevState,
                        imageSrc: {
                            src: urlForImage(imageSrc.src),
                        },
                    }))
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchMintData()

        async function fetchBreadcrumbData() {
            try {
                const result = await getData(35)

                setBreadcrumbData(result[0]?.sections)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchBreadcrumbData()

        async function fetchTableListData() {
            try {
                const result = await getData(36)

                setTableListData(result[0]?.sections)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchTableListData()

        async function fetchApproveTransactionData() {
            try {
                const result = await getData(37)

                setApproveTransactionData(result[0]?.sections)
                const product = result[0]?.sections?.product

                if (product) {
                    setApproveTransactionData((prevState) => ({
                        ...prevState,
                        product: {
                            ...product,
                            image: {
                                src: urlForImage(product.image.src),
                            },
                        },
                    }))
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchApproveTransactionData()

        async function fetchRarityData() {
            try {
                const result = await getData(38)

                setRarityData(result[0]?.sections)
                const imageUrl = result[0]?.sections?.imageUrl

                if (imageUrl) {
                    setRarityData((prevState) => ({
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

        fetchRarityData()

        async function fetchTabsData() {
            try {
                const result = await getData(39)

                setTabsData(result[0]?.sections)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchTabsData()

        async function fetchBlogFeatureOneData() {
            try {
                const result = await getData(40)

                setBlogFeatureData(result[0]?.sections)
                const image = result[0]?.sections?.image

                if (image) {
                    setBlogFeatureData((prevState) => ({
                        ...prevState,
                        image: {
                            src: urlForImage(image.src),
                        },
                    }))
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchBlogFeatureOneData()

        async function fetchAuthorDetailsData() {
            try {
                const result = await getData(41)

                setAuthorDetailsData(result[0]?.sections)
                const image = result[0]?.sections?.image

                if (image) {
                    setAuthorDetailsData((prevState) => ({
                        ...prevState,
                        image: {
                            src: urlForImage(image.src),
                        },
                    }))
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchAuthorDetailsData()

        async function fetchBlogContentData() {
            try {
                const result = await getData(42)

                setBlogContentData(result[0]?.sections)
                const image = result[0]?.sections?.image

                if (image) {
                    setBlogContentData((prevState) => ({
                        ...prevState,
                        image: {
                            src: urlForImage(image.src),
                        },
                    }))
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchBlogContentData()

        async function fetchArticleData() {
            try {
                const result = await getData(43)

                setArticleData(result[0]?.sections)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchArticleData()

        async function fetchTransactionProgressData() {
            try {
                const result = await getData(44)

                setTransactionProgressData(result[0]?.sections)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchTransactionProgressData()

        async function fetchMintSuccessData() {
            try {
                const result = await getData(45)

                setMintSuccessData(result[0]?.sections)
                const imageSrc = result[0]?.sections?.imageSrc
                const owner = result[0]?.sections?.owner

                if (imageSrc) {
                    setMintSuccessData((prevState) => ({
                        ...prevState,
                        imageSrc: {
                            src: urlForImage(imageSrc.src),
                        },
                    }))
                }
                if (owner) {
                    setMintSuccessData((prevState) => ({
                        ...prevState,
                        owner: {
                            ...owner,
                            avatar: {
                                src: urlForImage(owner.avatar.src),
                                alt: owner.avatar.alt,
                            },
                        },
                    }))
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchMintSuccessData()

        async function fetchHomeSideBarData() {
            try {
                const result = await getData(46)

                setHomeSidebarData(result[0]?.sections)
                const author = result[0]?.sections?.author
                const avatars = result[0]?.sections?.newsletter.avatars
                const recentArticles = result[0]?.sections?.recentArticles

                if (author) {
                    setHomeSidebarData((prevState) => ({
                        ...prevState,
                        author: {
                            ...author,
                            imageSrc: {
                                src: urlForImage(author.imageSrc.src),
                            },
                        },
                    }))
                }
                if (avatars) {
                    avatars.map((avatar) => {
                        avatar.src = urlForImage(avatar.src)

                        return avatar
                    })
                }
                if (recentArticles) {
                    recentArticles.map((article) => {
                        article.thumbnailSrc.src = urlForImage(
                            article.thumbnailSrc.src
                        )

                        return article
                    })
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchHomeSideBarData()

        async function fetchVerticalMenuData() {
            try {
                const result = await getData(47)

                setVerticalMenuData(result[0]?.sections)
                const logo = result[0]?.sections?.logo
                const avatar = result[0]?.sections?.avatar

                if (logo) {
                    setVerticalMenuData((prevState) => ({
                        ...prevState,
                        logo: {
                            src: urlForImage(logo.src),
                        },
                    }))
                }
                if (avatar) {
                    setVerticalMenuData((prevState) => ({
                        ...prevState,

                        avatar: {
                            ...avatar,
                            image: {
                                src: urlForImage(avatar.image.src),
                                alt: avatar.image.alt,
                            },
                        },
                    }))
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchVerticalMenuData()

        async function fetchIncentiveData() {
            try {
                const result = await getData(48)

                setIncentiveData(result[0]?.sections)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchIncentiveData()

        async function fetchButtonData() {
            try {
                const result = await getData(49)

                setButtonData(result[0]?.sections)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchButtonData()

        async function fetchAvatarData() {
            try {
                const result = await getData(50)

                setAvatarData(result[0]?.sections)
                const image = result[0]?.sections?.image

                if (image) {
                    setAvatarData((prevState) => ({
                        ...prevState,
                        image: {
                            src: urlForImage(image.src),
                        },
                    }))
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchAvatarData()

        console.log(verticalMenuData, '99999999900000000000000000000000')
    }, [])

    return (
        <>
            <DashboardStepsOne {...stepData} />
            <SignUpOne {...signupData} />
            <FeatureDropsOne {...FeatureDropLogoData} />
            <LoginOne {...loginData} />
            <IntegrationOne {...IntegrationData} />
            <ProgramOne {...programData} />
            <TableStackOne {...tableStackData} />
            <StatsDataOne {...dataStatsData} />
            <ProductOverviewOne {...productOverviewData} />
            <CatagoryOne {...catagoryData} />
            <BlogNewsletterOne {...blogNewsletterData} />
            <NotificationOne {...notificationData} />
            <PageTitleOne {...pageTitleData} />
            <ImageGalleryOne {...imageGallaryData} />
            <AuthorOne {...authorData} />
            <CourseInfoOne {...courseInfoData} />
            <SelectBox {...selectBoxData} />
            <TableGrid {...tableGridData} />
            <ConnectWalletOne {...connectWalletData} />
            <MintApeOne {...mintData} />
            <BreadcrumbOne {...breadcrumbData} />
            <TableListOne {...tableListData} />
            <ApproveTransactionOne {...approveTransactionData} />
            <RarityOne {...rarityData} />
            <TabsOne {...tabsData} />
            <BlogFeaturedOne {...blogFeatureData} />
            <AuthorDetailsOne {...authorDetailsData} />
            <BlogContentOne {...blogContentData} />
            <TransactionProgressOne {...transactionProgressData} />
            <ArticleOne {...articleData} />
            <MintSuccessOne {...mintSuccessData} />
            <HomeSidebarOne {...homeSidebarData} />
            <IncentiveOne {...incentiveData} />
            <VerticalMenu {...verticalMenuData} />
            <Button {...buttonData} />
            <Avatar {...avatarData} />
        </>
    )
}
