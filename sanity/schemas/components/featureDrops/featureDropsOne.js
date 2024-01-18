import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'featureDropsOne',
    title: 'Feature Drops ',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Collection Heading',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Collection Description',
            type: 'text',
        }),
        defineField({
            name: 'link',
            title: 'Collection Link',
            type: 'object',
            fields: [
                defineField({
                    name: 'url',
                    title: 'Link URL',
                    type: 'url',
                }),
                defineField({
                    name: 'text',
                    title: 'Link Text',
                    type: 'string',
                }),
            ],
        }),
        defineField({
            name: 'items',
            title: 'Collection Items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'id',
                            title: 'Item ID',
                            type: 'string',
                        }),
                        defineField({
                            name: 'title',
                            title: 'Item Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'imageUrl',
                            title: 'Item Image URL',
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
                            name: 'floor',
                            title: 'Item Floor Price',
                            type: 'string',
                        }),
                        // Add more fields as needed
                    ],
                },
            ],
        }),
    ],
})
