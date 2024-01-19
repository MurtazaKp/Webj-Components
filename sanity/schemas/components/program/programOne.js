import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'programOne',
    title: 'Program',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'object',
            fields: [
                defineField({
                    name: 'label',
                    title: 'Label',
                    type: 'string',
                }),
                defineField({
                    name: 'href',
                    title: 'Link Href',
                    type: 'url',
                }),
            ],
        }),
        defineField({
            name: 'imageUrl',
            title: 'Image URL',
            type: 'object',
            fields: [
                defineField({
                    name: 'src',
                    title: 'Image Source',
                    type: 'url',
                }),
                defineField({
                    name: 'alt',
                    title: 'Image Alt Text',
                    type: 'string',
                }),
            ],
        }),
        defineField({
            name: 'weeks',
            title: 'Weeks',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Section Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'duration',
                            title: 'Section Duration',
                            type: 'string',
                        }),
                        defineField({
                            name: 'content',
                            title: 'Section Content',
                            type: 'text',
                        }),
                    ],
                },
            ],
        }),
    ],
})
