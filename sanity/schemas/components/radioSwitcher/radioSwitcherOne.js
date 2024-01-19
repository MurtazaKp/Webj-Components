import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'radioSwitcher',
    title: 'radioSwitcher',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'tools',
            title: 'Tools',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'id',
                            title: 'ID',
                            type: 'string',
                        }),
                        defineField({
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                        }),
                        defineField({
                            name: 'logoSrc',
                            title: 'Logo Source',
                            type: 'image',
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'string',
                        }),
                    ],
                },
            ],
        }),
    ],
})
