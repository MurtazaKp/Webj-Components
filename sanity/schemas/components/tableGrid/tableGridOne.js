import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'tableGridOne',
    title: 'Table Grid',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'payments',
            title: 'Payments',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'id',
                            title: 'ID',
                            type: 'number',
                        }),
                        defineField({
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                        }),
                        defineField({
                            name: 'avatar',
                            title: 'Avatar',
                            type: 'object',
                            fields: [
                                defineField({
                                    name: 'src',
                                    title: 'Source',
                                    type: 'image',
                                }),
                                defineField({
                                    name: 'alt',
                                    title: 'Alt Text',
                                    type: 'string',
                                }),
                            ],
                        }),
                        defineField({
                            name: 'product',
                            title: 'Product',
                            type: 'string',
                        }),
                        defineField({
                            name: 'amount',
                            title: 'Amount',
                            type: 'string',
                        }),
                        defineField({
                            name: 'status',
                            title: 'Status',
                            type: 'string',
                        }),
                        defineField({
                            name: 'timestamp',
                            title: 'Timestamp',
                            type: 'string',
                        }),
                    ],
                },
            ],
        }),
    ],
    initialValue: {
        heading: 'Latest Payments',
        payments: [
            {
                id: 1,
                name: 'Cody Fisher',
                product: 'Clarity Landing UI Kit',
                amount: '$49.00',
                status: 'Complete',
                timestamp: '2 hours ago',
            },
            {
                id: 2,
                name: 'Floyd Miles',
                product: 'Clarity eCommerce UI Kit',
                amount: '$99.00',
                status: 'Pending',
                timestamp: '3 hours ago',
            },
            {
                id: 3,
                name: 'Savannah Nguyen',
                product: 'Clarity Landing UI Kit',
                amount: '$49.00',
                status: 'Complete',
                timestamp: '5 days ago',
            },
        ],
    },
})
