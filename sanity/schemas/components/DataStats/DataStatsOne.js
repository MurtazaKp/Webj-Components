import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'dataStatsOne',
    title: 'Data Stats',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'name',
            type: 'string',
        }),
        defineField({
            name: 'DataStats',
            title: 'Data Stats',
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
            initialValue: [
                {
                    label: "Today's Sale",
                    value: '$12,426',
                    percentage: '+36%',
                },
                {
                    label: 'Active Users',
                    value: '4,395',
                    percentage: '+36%',
                },
                {
                    label: "Today's Revenue",
                    value: '$10,593',
                    percentage: '+36%',
                },
                {
                    label: 'Growth Sale',
                    value: '$1,940',
                    percentage: '+36%',
                },
            ],
        }),
    ],
})
