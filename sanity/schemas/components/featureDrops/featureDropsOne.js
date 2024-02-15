import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'featureDropsOne',
    title: 'Featured Drops One ',
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
            name: 'link',
            title: 'Link',
            type: 'object',
            fields: [
                defineField({
                    name: 'href',
                    title: 'href',
                    type: 'text',
                }),
                defineField({
                    name: 'text',
                    title: 'Text',
                    type: 'string',
                }),
            ],
        }),
        defineField({
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'id',
                            title: 'ID',
                            type: 'number',
                        }),
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'imageUrl',
                            title: 'Image URL',
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
                            name: 'floor',
                            title: 'Floor',
                            type: 'string',
                        }),
                        defineField({
                            name: 'avatars',
                            title: 'Avatars',
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
                        defineField({
                            name: 'stock',
                            title: 'Stock',
                            type: 'number',
                        }),
                        defineField({
                            name: 'bid',
                            title: 'Bid',
                            type: 'string',
                        }),
                    ],
                },
            ],
        }),
    ],
    initialValue: {
        heading: 'Latest Collection in Last 7 Days',
        description:
            "We've collected the latest NFTs for you to choose. Start collecting.",
        link: {
            href: '#',
            text: 'See All Collections',
        },
        items: [
            {
                id: 1,
                title: '3D Hand Cross Fingers Premium #94',

                floor: '1.7 ETH',

                stock: 347,
                bid: '2.5 ETH',
            },
            {
                id: 2,
                title: 'Digital Art Waves #112',

                floor: '2.0 ETH',

                stock: 220,
                bid: '3.2 ETH',
            },
            {
                id: 3,
                title: 'Abstract Universe #75',

                floor: '1.5 ETH',

                stock: 180,
                bid: '2.0 ETH',
            },
            {
                id: 4,
                title: 'Nature Harmony #22',

                floor: '1.9 ETH',

                stock: 300,
                bid: '2.8 ETH',
            },
            // Add more items if needed
        ],
    },
})
