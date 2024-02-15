import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'transactionProgressOne',
    title: 'Transaction Progress',
    type: 'object',
    fields: [
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'object',
            fields: [
                defineField({
                    name: 'label',
                    title: 'Label',
                    type: 'string',
                    initialValue: 'View Status',
                }),
                defineField({
                    name: 'href',
                    title: 'Link Href',
                    type: 'string',
                    initialValue: '#',
                }),
            ],
        }),

        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Transaction in Progress', // Initial value for the title field
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            initialValue:
                'This can take a few minutes depending on gas. Don’t leave this page. You can do whatever you want.', // Initial value for the description field
        }),
    ],
})
