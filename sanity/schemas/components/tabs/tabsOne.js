import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'tabsOne',
    title: 'Tab',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'name',
            type: 'string',
        }),
        defineField({
            name: 'tabs',
            title: 'Tabs',
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
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                        }),
                    ],
                },
            ],
            initialValue: [
                { id: 1, label: 'Dashboard' },
                { id: 2, label: 'My Account' },
                { id: 3, label: 'Downloads' },
                { id: 4, label: 'Licenses' },
                { id: 5, label: 'Settings' },
            ],
        }),
    ],
})
