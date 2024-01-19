import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'breadcrumbOne',
    title: 'Breadcrumb ',
    type: 'object',
    fields: [
        defineField({
            name: 'breadcrumbItems',
            title: 'Breadcrumb Items',
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
                            name: 'link',
                            title: 'Link',
                            type: 'string',
                        }),
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        }),
                    ],
                },
            ],
        }),
    ],
})
