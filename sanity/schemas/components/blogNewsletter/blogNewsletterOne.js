import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'blogNewsletterOne',
    title: 'Blog Newsletter',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'name',
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
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
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
    initialValue: {
        title: 'Download free eBook of best growth tips.',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa enim.',

        email: {
            label: 'Email',
            type: 'email',
            placeholder: 'Enter email address',
            initialEmail: '',
        },
        DownloadButtonText: 'Download E-Book',
    },
})
