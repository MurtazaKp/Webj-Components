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
            ],
        }),
    ],
})
