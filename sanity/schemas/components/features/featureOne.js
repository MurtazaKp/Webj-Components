import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'featureOne',
    title: 'feature',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'name',
            type: 'string',
        }),
        defineField({
            name: 'heading',
            title: 'heading',
            type: 'string',
        }),

        defineField({
            name: 'features',
            title: 'features',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'id',
                            title: 'id',
                            type: 'number',
                        }),
                        defineField({
                            name: 'icon',
                            title: 'icon',
                            type: 'string',
                        }),

                        defineField({
                            name: 'title',
                            title: 'title',
                            type: 'string',
                        }),

                        defineField({
                            name: 'description',
                            title: 'description',
                            type: 'string',
                        }),
                    ],
                },
            ],
        }),
    ],
})
