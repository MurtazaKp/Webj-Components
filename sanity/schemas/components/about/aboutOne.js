import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'aboutOne',
    title: 'About Us ',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'About Us Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'About Us Description',
            type: 'text',
        }),
        defineField({
            name: 'aboutImage',
            title: 'About Us Image',
            type: 'object',
            fields: [
                defineField({
                    name: 'src',
                    title: 'Image Source',
                    type: 'image',
                }),
                defineField({
                    name: 'alt',
                    title: 'Image Alt Text',
                    type: 'string',
                }),
            ],
        }),
    ],
})
