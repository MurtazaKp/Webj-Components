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
            type: 'string',
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
                            title: 'Source',
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
    initialValue: {
        heading: 'Get access to rare NFTs',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum tortor cum dictum nulla. Ipsum eget faucibus facilisis turpis viverra malesuada tellus.',
    },
})
