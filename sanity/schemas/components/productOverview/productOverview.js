import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'productOverviewOne',
    title: 'Product Overview',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'imageUrl',
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
            name: 'productFeatures',
            title: 'Product Features',
            type: 'array',
            of: [
                {
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
                    ],
                },
            ],
            initialValue: [
                {
                    title: 'Get your superpower',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet.',
                },
                {
                    title: 'Superfast 5G, more faster than ever',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet.',
                },
                {
                    title: 'New year, new design',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet.',
                },
            ],
        }),
    ],
})
