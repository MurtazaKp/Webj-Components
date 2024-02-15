import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'articleOne',
    title: 'Article ',
    type: 'object',
    fields: [
        defineField({
            name: 'subheading',
            title: 'Subheading',
            type: 'string',
            initialValue: 'Blog', // Initial value for the subheading field
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'string',
            initialValue: 'April 14, 2021', // Initial value for the date field
        }),
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            initialValue:
                'Discover the most solutions for building landing page website.', // Initial value for the heading field
        }),

        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block',
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Numbered', value: 'number' },
                        { title: 'Squared', value: 'square' },
                    ],
                    marks: {
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        title: 'Url',
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: 'image',
                    name: 'image',
                    title: 'Image',
                    options: {
                        hotspot: true,
                    },
                    preview: {
                        select: {
                            imageUrl: 'asset.url',
                            title: 'caption',
                        },
                    },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alt Text',
                            description:
                                'Alternative text for screenreaders. Falls back on caption if not set',
                        },
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption Text',
                            description: 'Caption for image',
                        },
                    ],
                },
                {
                    name: 'customTable',
                    title: 'Custom Table',
                    type: 'object',
                    fields: [
                        {
                            title: 'Table Type',
                            name: 'tableType',
                            type: 'string',
                            initialValue: 'bg-primary',
                            options: {
                                list: [
                                    { title: 'Primary', value: 'bg-primary' },
                                    {
                                        title: 'Secondary',
                                        value: 'bg-secondary',
                                    },
                                    { title: 'Tertiary', value: 'bg-tertiary' },
                                ],
                            },
                        },
                        {
                            name: 'table',
                            type: 'table',
                        },
                    ],
                },
            ],
        }),
    ],
})
