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
                            title: 'Link',
                            type: 'url',
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
                    type: 'url',
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
                            title: 'Link',
                            type: 'url',
                        }),
                        defineField({
                            name: 'icon',
                            title: 'Icon',
                            type: 'string', // Replace with appropriate icon type or schema
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'text',
        }),
    ],
})
