import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'authorOne',
    title: 'Authors Data',
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
            name: 'authors',
            title: 'Authors',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                        }),
                        defineField({
                            name: 'username',
                            title: 'Username',
                            type: 'string',
                        }),
                        defineField({
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                        }),
                        defineField({
                            name: 'bio1',
                            title: 'Bio Line 1',
                            type: 'text',
                        }),
                        defineField({
                            name: 'bio2',
                            title: 'Bio Line 2',
                            type: 'text',
                        }),
                        defineField({
                            name: 'twitterCta',
                            title: 'Twitter CTA',
                            type: 'object',
                            fields: [
                                defineField({
                                    name: 'href',
                                    title: 'Link',
                                    type: 'url',
                                }),
                                defineField({
                                    name: 'label',
                                    title: 'Label',
                                    type: 'string',
                                }),
                            ],
                        }),
                    ],
                },
            ],
        }),
    ],
})
