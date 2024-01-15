import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'blogOne',
    title: 'Blog Data',
    type: 'object',
    fields: [
        defineField({
            name: 'blogHeading',
            title: 'Blog Heading',
            type: 'string',
        }),
        defineField({
            name: 'blogs',
            title: 'Blogs',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'id',
                            title: 'Blog ID',
                            type: 'number',
                        }),
                        defineField({
                            name: 'date',
                            title: 'Blog Date',
                            type: 'string',
                        }),
                        defineField({
                            name: 'title',
                            title: 'Blog Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'blogImage',
                            title: 'Blog Image',
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
                            name: 'author',
                            title: 'Author',
                            type: 'object',
                            fields: [
                                defineField({
                                    name: 'name',
                                    title: 'Author Name',
                                    type: 'string',
                                }),
                                defineField({
                                    name: 'avatar',
                                    title: 'Avatar',
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
                            ],
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'allBlogsCta',
            title: 'All Blogs CTA',
            type: 'object',
            fields: [
                defineField({
                    name: 'label',
                    title: 'CTA Label',
                    type: 'string',
                }),
                defineField({
                    name: 'href',
                    title: 'CTA Href',
                    type: 'string',
                }),
                defineField({
                    name: 'target',
                    title: 'CTA Target',
                    type: 'string',
                }),
            ],
        }),
    ],
})
