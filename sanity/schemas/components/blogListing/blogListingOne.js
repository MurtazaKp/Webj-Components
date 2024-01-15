import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'blogListingOne',
    title: 'Blog Listing',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Articles Heading',
            type: 'string',
        }),
        defineField({
            name: 'paragraph',
            title: 'Articles Paragraph',
            type: 'text',
        }),
        defineField({
            name: 'articles',
            title: 'Articles',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'id',
                            title: 'Article ID',
                            type: 'number',
                        }),
                        defineField({
                            name: 'title',
                            title: 'Article Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'image',
                            title: 'Article Image',
                            type: 'object',
                            fields: [
                                defineField({
                                    name: 'src',
                                    title: 'Image Source',
                                    type: 'image',
                                }),
                                defineField({
                                    name: 'alt',
                                    title: 'Image Alt Text',
                                    type: 'string',
                                }),
                            ],
                        }),
                        defineField({
                            name: 'category',
                            title: 'Article Category',
                            type: 'string',
                        }),
                        defineField({
                            name: 'date',
                            title: 'Article Date',
                            type: 'string',
                        }),
                        defineField({
                            name: 'description',
                            title: 'Article Description',
                            type: 'text',
                        }),
                    ],
                },
            ],
        }),
    ],
})
