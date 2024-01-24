import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'stepOne',
    title: 'Step',
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
                            title: 'Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                        }),
                    ],
                },
            ],
        }),
        // Add more fields as needed
    ],
    initialValue: {
        sectionTitle: 'How does it work?',
        sectionDescription:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.',
        steps: [
            {
                stepNumber: 1,
                title: 'Create a free account',
                description:
                    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            },
            {
                stepNumber: 2,
                title: 'Build your website',
                description:
                    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            },
            {
                stepNumber: 3,
                title: 'Release & Launch',
                description:
                    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            },
        ],
    },
})
