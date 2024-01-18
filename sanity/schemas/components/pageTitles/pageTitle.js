import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'pageTitleOne',
    title: 'PageTitle',
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
                            name: 'text',
                            title: 'Text',
                            type: 'string',
                        }),
                    ],
                },
            ],
        }),
    ],
})
