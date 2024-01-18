import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'productOverviewOne',
    title: 'Product Features Data',
    type: 'object',
    fields: [
        defineField({
            name: 'imageUrl',
            title: 'Image URL',
            type: 'image',
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
                            title: 'Feature Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'description',
                            title: 'Feature Description',
                            type: 'text',
                        }),
                    ],
                },
            ],
        }),
    ],
})
