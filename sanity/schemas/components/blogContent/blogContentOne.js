import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'blogContentOne',
    title: 'Blog Content',
    type: 'object',
    fields: [
        defineField({
            name: 'breadcrumbItems',
            title: 'Breadcrumb Items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                        }),
                        defineField({
                            name: 'link',
                            title: 'href',
                            type: 'string',
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
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
            name: 'socialLinks',
            title: 'Social Links',
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
                            name: 'href',
                            title: 'Href',
                            type: 'string',
                        }),
                        defineField({
                            name: 'icon',
                            title: 'Icon',
                            type: 'string', // This can be a string field or you can store SVG paths directly
                        }),
                    ],
                },
            ],
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
    initialValue: {
        breadcrumbItems: [
            { label: 'Home', link: '#' },
            { label: 'Blog', link: '#' },
            { label: 'Five Pizza Tips', link: '#' },
        ],
        title: 'Five pizza tips you need to learn now',
        category: 'Food',
        date: '2021-11-22',
        image: {
            src: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-content/1/cover.png',
            alt: 'Blog Post Cover Image',
        },
        socialLinks: [
            { title: 'Discord', href: '#', icon: 'facebook' },
            { title: 'Twitter', href: '#', icon: 'instagram' },
            { title: 'Telegram', href: '#', icon: 'twitter' },
            { title: 'LinkedIn', href: '#', icon: 'linkedin' },
        ],
    },
})
