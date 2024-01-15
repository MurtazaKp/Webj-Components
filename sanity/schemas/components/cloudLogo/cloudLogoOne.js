import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'cloudLogoOne',
    title: 'cloudLogoOne',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'name',
            type: 'string',
        }),
        defineField({
            name: 'title',
            title: 'title',
            type: 'string',
        }),

        defineField({
            name: 'companyLogos',
            title: 'companyLogos',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'src',
                            title: 'Source',
                            type: 'image',
                        }),
                        defineField({
                            name: 'alt',
                            title: 'Alt Text',
                            type: 'string',
                        }),
                    ],
                },
            ],
        }),
    ],
})
