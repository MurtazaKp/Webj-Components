import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'component',
    title: 'component',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'name',
            type: 'string',
        }),
        // Sections
        defineField({
            name: 'sections',
            title: 'Sections',
            type: 'array',
            of: [
                { type: 'headerOne' },
                { type: 'footerOne' },
                { type: 'heroOne' },
                { type: 'featureOne' },
                { type: 'cloudLogoOne' },
                { type: 'newsletterOne' },
                { type: 'blogOne' },
                { type: 'testimonialOne' },
                { type: 'contactOne' },
                { type: 'aboutOne' },
                { type: 'teamOne' },
                { type: 'blogListingOne' },
                { type: 'statisticsOne' },
                { type: 'pricingOne' },
                { type: 'faqOne' },
                { type: 'stepOne' },
                { type: 'signUpOne' },
                { type: 'featureDropsOne' },
                { type: 'loginOne' },
                { type: 'cartOne' },
                { type: 'integrationOne' },
                { type: 'programOne' },
                { type: 'tableStackOne' },
                { type: 'productOverviewOne' },
                { type: 'catagoryOne' },
                { type: 'dataStatsOne' },
                { type: 'blogNewsletterOne' },
                { type: 'notificationOne' },
                { type: 'dashboardStepsOne' },
                { type: 'pageTitleOne' },
                { type: 'imageGallaryOne' },
                { type: 'authorOne' },
                { type: 'courseInfoOne' },
                { type: 'selectBoxOne' },
                { type: 'tableGridOne' },
                { type: 'connectWalletOne' },
                { type: 'mintOne' },
                { type: 'blogPaginationOne' },
                { type: 'paginationOne' },
                { type: 'breadcrumbOne' },
                { type: 'tableListOne' },
                { type: 'approveTransactionOne' },
                { type: 'rarityOne' },
                { type: 'tabsOne' },
                { type: 'blogFeaturedOne' },
                { type: 'blogAuthorOne' },
                { type: 'blogContentOne' },
                { type: 'articleOne' },
                { type: 'transactionProgressOne' },
                { type: 'mintSuccessOne' },
                { type: 'homeSidebarOne' },
                { type: 'verticalMenuOne' },
                { type: 'incentivesOne' },
            ],
        }),
    ],
})
