import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'incentivesOne',
    title: 'Incentives',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'name',
            type: 'string',
        }),
        defineField({
            name: 'incentives',
            title: 'Incentives',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'string',
                        }),
                        defineField({
                            name: 'icon',
                            title: 'Icon',
                            type: 'string',
                        }),
                    ],
                },
            ],
            initialValue: [
                {
                    title: 'Secured Payments',
                    description: 'Make payment with ease',
                    icon: 'secure',
                },
                {
                    title: 'Shop for Anyone',
                    description: 'You can shop for any category',
                    icon: 'shop',
                },
                {
                    title: 'Free Delivery',
                    description: 'Get 100% free delivery',
                    icon: 'delivery',
                },
                {
                    title: 'Quality Products',
                    description: 'Made with highest care',
                    icon: 'quality',
                },
            ],
        }),
    ],
})
