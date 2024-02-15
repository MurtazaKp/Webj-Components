import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'avatar',
    title: 'Avatar ',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'name',
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
                    initialValue: 'avatar',
                }),
            ],
        }),
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Small', value: 'small' },
                    { title: 'Medium', value: 'medium' },
                    { title: 'Large', value: 'large' },
                ],
            },
            initialValue: 'small',
        }),
    ],
})
