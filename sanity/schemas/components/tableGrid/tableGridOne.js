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
                            type: 'image',
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
})
