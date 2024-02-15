import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'dashboardStepsOne',
    title: 'Dashboard Steps ',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'name',
            type: 'string',
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
                            name: 'id',
                            title: 'ID',
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
