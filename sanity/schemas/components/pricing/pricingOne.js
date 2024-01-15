import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'pricingOne',
    title: 'Pricing ',
    type: 'object',
    fields: [
        defineField({
            name: 'planHeading',
            title: 'Plans Heading',
            type: 'string',
        }),
        defineField({
            name: 'planDescription',
            title: 'Plans Description',
            type: 'text',
        }),
        defineField({
            name: 'plans',
            title: 'Plans',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Plan Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'shortDesc',
                            title: 'Plan Short Description',
                            type: 'text',
                        }),
                        defineField({
                            name: 'icon',
                            title: 'Plan Icon',
                            type: 'string',
                        }),
                        defineField({
                            name: 'price',
                            title: 'Plan Price',
                            type: 'number',
                        }),
                        defineField({
                            name: 'savings',
                            title: 'Plan Savings',
                            type: 'number',
                        }),
                        defineField({
                            name: 'planButton',
                            title: 'Plan Button',
                            type: 'object',
                            fields: [
                                defineField({
                                    name: 'buttonText',
                                    title: 'Button Text',
                                    type: 'string',
                                }),
                                defineField({
                                    name: 'href',
                                    title: 'Button Href',
                                    type: 'string',
                                }),
                                defineField({
                                    name: 'target',
                                    title: 'Button Target',
                                    type: 'string',
                                }),
                            ],
                        }),
                        defineField({
                            name: 'features',
                            title: 'Plan Features',
                            type: 'array',
                            of: [
                                defineField({
                                    name: 'features',
                                    title: 'features',
                                    type: 'string',
                                }),
                            ],
                        }),
                    ],
                },
            ],
        }),
    ],
})
