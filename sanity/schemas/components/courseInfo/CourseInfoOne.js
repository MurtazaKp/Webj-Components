import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'courseInfoOne',
    title: 'Course Info Data',
    type: 'object',
    fields: [
        defineField({
            name: 'mainTitle',
            title: 'Main Title',
            type: 'string',
        }),
        defineField({
            name: 'mainParagraph',
            title: 'Main Paragraph',
            type: 'text',
        }),
        defineField({
            name: 'communities',
            title: 'Communities',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Community Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'description',
                            title: 'Community Description',
                            type: 'text',
                        }),
                    ],
                },
            ],
        }),
    ],
})
