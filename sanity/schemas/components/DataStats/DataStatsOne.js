import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'dataStatsOne',
    title: 'Data Stats',
    type: 'object',
    fields: [
        defineField({
            name: 'Datastats',
            title: 'Stats',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                        }),
                        defineField({
                            name: 'value',
                            title: 'Value',
                            type: 'string',
                        }),
                        defineField({
                            name: 'percentage',
                            title: 'Percentage',
                            type: 'string',
                        }),
                    ],
                },
            ],
        }),
    ],
})
