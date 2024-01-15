import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'statisticsOne',
    title: 'Statistics',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Stats Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Stats Description',
            type: 'text',
        }),
        defineField({
            name: 'stats',
            title: 'Stats',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'value',
                            title: 'Stat Value',
                            type: 'string',
                        }),
                        defineField({
                            name: 'label',
                            title: 'Stat Label',
                            type: 'string',
                        }),
                        defineField({
                            name: 'description',
                            title: 'Stat Description',
                            type: 'text',
                        }),
                    ],
                },
            ],
        }),
    ],
})
