import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'integrationOne',
    title: 'Integrations',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'integrations',
            title: 'Integrations',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'name',
                            title: 'Integration Name',
                            type: 'string',
                        }),
                        defineField({
                            name: 'image',
                            title: 'Integration Image',
                            type: 'object',
                            fields: [
                                defineField({
                                    name: 'src',
                                    title: 'Image Source',
                                    type: 'url',
                                }),
                                defineField({
                                    name: 'alt',
                                    title: 'Image Alt Text',
                                    type: 'string',
                                }),
                            ],
                        }),
                        defineField({
                            name: 'description',
                            title: 'Integration Description',
                            type: 'text',
                        }),
                        defineField({
                            name: 'integrationType',
                            title: 'Integration Type',
                            type: 'string',
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'integrationAll',
            title: 'Integration All',
            type: 'object',
            fields: [
                defineField({
                    name: 'label',
                    title: 'Label',
                    type: 'string',
                }),
                defineField({
                    name: 'href',
                    title: 'Link Href',
                    type: 'url',
                }),
            ],
        }),
    ],
})
