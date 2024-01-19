import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'tableListOne',
    title: 'Table List',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'headers',
            title: 'Headers',
            type: 'array',
            of: [
                {
                    type: 'string',
                },
            ],
        }),
        defineField({
            name: 'transactions',
            title: 'Transactions',
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
                            name: 'plan',
                            title: 'Plan',
                            type: 'string',
                        }),
                        defineField({
                            name: 'date',
                            title: 'Date',
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
                            name: 'statusColor',
                            title: 'Status Color',
                            type: 'string',
                        }),
                    ],
                },
            ],
        }),
    ],
})
