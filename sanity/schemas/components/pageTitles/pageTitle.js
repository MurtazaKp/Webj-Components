import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'pageTitleOne',
    title: 'Page Title',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'breadcrumbs',
            title: 'Breadcrumbs',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'icon',
                            title: 'Icon',
                            type: 'boolean',
                        }),
                        defineField({
                            name: 'cta',
                            title: 'CTA',
                            type: 'object',
                            fields: [
                                defineField({
                                    name: 'label',
                                    title: 'Label',
                                    type: 'string',
                                }),
                                defineField({
                                    name: 'href',
                                    title: 'Href',
                                    type: 'string',
                                }),
                            ],
                        }),
                    ],
                },
            ],
        }),
    ],
    initialValue: {
        heading: 'Customer Review',
        breadcrumbs: [
            { icon: true, cta: { label: 'Analytics', href: '/analytics' } },
            {
                icon: true,
                cta: { label: 'Customer Review', href: '/customer-review' },
            },
        ],
    },
})
