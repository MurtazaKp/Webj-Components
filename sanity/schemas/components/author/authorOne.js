import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'authorOne',
    title: 'Author',
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
            name: 'authors',
            title: 'Authors',
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
                            name: 'username',
                            title: 'Username',
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
                            name: 'bio1',
                            title: 'Bio Part 1',
                            type: 'text',
                        }),
                        defineField({
                            name: 'bio2',
                            title: 'Bio Part 2',
                            type: 'text',
                        }),
                        defineField({
                            name: 'twitterCta',
                            title: 'Twitter CTA',
                            type: 'object',
                            fields: [
                                defineField({
                                    name: 'href',
                                    title: 'Twitter Href',
                                    type: 'string',
                                }),
                                defineField({
                                    name: 'label',
                                    title: 'Twitter Label',
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
        heading: 'Our Authors',
        description:
            'In a creative workplace, employees responsibly try different solutions.',
        authors: [
            {
                name: 'HungerGames',
                username: 'creativeGig',
                bio1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit elit posuere morbi laoreet tortor auctor.',
                bio2: 'Aliquam sit elit posuere morbi laoreet tortor auctor. Urna integer enim id neque.',
                twitterCta: {
                    href: '#',
                    label: 'Follow on Twitter',
                },
            },
            {
                name: 'CodeMaster',
                username: 'codeWizard',
                bio1: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                bio2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                twitterCta: {
                    href: '#',
                    label: 'Follow on Twitter',
                },
            },
        ],
    },
})
