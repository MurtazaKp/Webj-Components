import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'transactionProgressOne',
    title: 'Transaction Progress',
    type: 'object',
    fields: [
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        // Add more fields as needed
    ],
})
