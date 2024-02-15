import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'button',
    title: 'Button',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'name',
            type: 'string',
            initialValue: 'Button',
        }),
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
            initialValue: 'Click Me',
        }),
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            initialValue: 'primary',
            options: {
                list: [
                    { title: 'Primary', value: 'primary' },
                    { title: 'Secondary', value: 'secondary' },
                    { title: 'Success', value: 'success' },
                    { title: 'Danger', value: 'danger' },
                ],
            },
        }),
    ],
})
