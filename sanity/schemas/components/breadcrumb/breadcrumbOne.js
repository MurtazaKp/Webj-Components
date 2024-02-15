import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'breadcrumbOne',
    title: 'Breadcrumb ',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'name',
            type: 'string',
        }),
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
            initialValue: [
                {
                    label: 'Reports',
                    link: '#',
                    title: 'View Reports',
                },
                {
                    label: 'Sales',
                    link: '#',
                    title: 'View Sales',
                },
                {
                    label: 'Product Reports',
                    link: '#',
                    title: 'View Product Reports',
                },
            ],
        }),
    ],
})
