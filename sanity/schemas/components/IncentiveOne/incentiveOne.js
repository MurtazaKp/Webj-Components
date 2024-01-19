import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'incentivesOne',
    title: 'Incentives',
    type: 'object',
    fields: [
        defineField({
            name: 'incentives',
            title: 'Incentives',
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
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                        }),
                        defineField({
                            name: 'icon',
                            title: 'Icon',
                            type: 'string',
                        }),
                    ],
                },
            ],
        }),
    ],
})
