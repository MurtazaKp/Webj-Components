import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'integrationOne',
    title: 'Integrations Component',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            initialValue: 'Integrate with Apps',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            initialValue:
                'Explore a variety of integrations with popular applications to enhance your experience.',
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
                            title: 'Name',
                            type: 'string',
                        }),
                        defineField({
                            name: 'image',
                            title: 'Image',
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
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
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
            initialValue: [
                {
                    name: 'Gmail',

                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    integrationType: 'Direct Integration',
                },
                {
                    name: 'Slack',

                    description:
                        'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    integrationType: 'Direct Integration',
                },
                {
                    name: 'Shopify',

                    description:
                        'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    integrationType: 'Direct Integration',
                },
                {
                    name: 'Intercom',

                    description:
                        'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    integrationType: 'Direct Integration',
                },
                {
                    name: 'Twitter',

                    description:
                        'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    integrationType: 'Direct Integration',
                },
                {
                    name: 'Sketch',

                    description:
                        'Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    integrationType: 'Direct Integration',
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
                    title: 'Href',
                    type: 'string',
                }),
            ],
            initialValue: {
                label: 'Check all Integration',
                href: '#',
            },
        }),
    ],
})
