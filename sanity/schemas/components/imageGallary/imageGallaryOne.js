import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'imageGallaryOne',
    title: 'Image Gallary',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'src',
                            title: 'Image Source',
                            type: 'image',
                        }),
                        defineField({
                            name: 'alt',
                            title: 'Alt Text',
                            type: 'string',
                        }),
                    ],
                },
            ],
        }),
    ],
})
