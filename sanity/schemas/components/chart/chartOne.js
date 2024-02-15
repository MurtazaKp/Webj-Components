import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'salesReport',
    title: 'Sales Report',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            initialValue: 'Sales Report',
        }),
        defineField({
            name: 'exportChart',
            title: 'Export Chart',
            type: 'object',
            fields: [
                defineField({
                    name: 'label',
                    title: 'Label',
                    type: 'string',
                    initialValue: 'Export to csv',
                }),
            ],
        }),
        defineField({
            name: 'month',
            title: 'Month',
            type: 'array',
            of: [{ type: 'string' }],
            initialValue: ['12 Month', '6 Month', '3 Month', '7 Days'],
        }),
        defineField({
            name: 'seriesData',
            title: 'Series Data',
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
                            name: 'data',
                            title: 'Data',
                            type: 'array',
                            of: [{ type: 'number' }],
                        }),
                    ],
                },
            ],
            initialValue: [
                {
                    name: 'New user',
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 76, 85, 101],
                },
                {
                    name: 'Returning user',
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 44, 55, 57],
                },
            ],
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'string' }],
            initialValue: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ],
        }),
    ],
})
