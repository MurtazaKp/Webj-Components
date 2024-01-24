import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'dashboardStepsOne',
    title: 'Dashboard Steps',
    type: 'object',
    fields: [
        defineField({
            name: 'steps',
            title: 'Steps',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'id',
                            title: 'Step ID',
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
        steps: [
            {
                id: 1,
                title: 'Create Free Account',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
                id: 2,
                title: 'Setup Your Profile',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
                id: 3,
                title: 'Start Monitoring',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
        ],
    },
})
