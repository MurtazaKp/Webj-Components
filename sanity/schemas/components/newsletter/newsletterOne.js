import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'newsletterOne',
    title: 'Newsletter',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'name',
            type: 'string',
        }),

        defineField({
            name: 'heading',
            title: 'heading',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'description',
            type: 'string',
        }),

        defineField({
            name: 'formPlaceholder',
            title: 'Form Placeholder',
            type: 'string',
        }),

        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
        }),

        defineField({
            name: 'successMessage',
            title: 'Success Message',
            type: 'string',
        }),

        defineField({
            name: 'note',
            title: 'Note',
            type: 'string',
        }),
    ],
})
