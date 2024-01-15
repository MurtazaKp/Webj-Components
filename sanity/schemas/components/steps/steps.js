import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'stepOne',
    title: 'Steps',
    type: 'object',
    fields: [
        defineField({
            name: 'sectionTitle',
            title: 'Section Title',
            type: 'string',
        }),
        defineField({
            name: 'sectionDescription',
            title: 'Section Description',
            type: 'text',
        }),
        defineField({
            name: 'steps',
            title: 'Steps',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'stepNumber',
                            title: 'Step Number',
                            type: 'number',
                        }),
                        defineField({
                            name: 'title',
                            title: 'Step Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'description',
                            title: 'Step Description',
                            type: 'text',
                        }),
                    ],
                },
            ],
        }),
    ],
})
