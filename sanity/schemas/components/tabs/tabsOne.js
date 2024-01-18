import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'tabsOne',
    title: 'Tabs ',
    type: 'object',
    fields: [
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
        }),
    ],
})
