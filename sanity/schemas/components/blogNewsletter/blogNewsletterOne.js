import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'blogNewsletterOne',
    title: 'Blog Newsletter',
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
            type: 'text',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'object',
            fields: [
                defineField({
                    name: 'label',
                    title: 'Label',
                    type: 'string',
                }),
                defineField({
                    name: 'type',
                    title: 'Type',
                    type: 'string',
                }),
                defineField({
                    name: 'placeholder',
                    title: 'Placeholder',
                    type: 'string',
                }),
                defineField({
                    name: 'initialEmail',
                    title: 'Initial Email',
                    type: 'string',
                }),
            ],
        }),
        defineField({
            name: 'DownloadButtonText',
            title: 'Download Button Text',
            type: 'string',
        }),
    ],
})
