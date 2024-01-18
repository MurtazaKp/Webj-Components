import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'articleOne',
    title: 'Article',
    type: 'object',
    fields: [
        defineField({
            name: 'subheading',
            title: 'Subheading',
            type: 'string',
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
        }),
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'text',
        }),
    ],
})
