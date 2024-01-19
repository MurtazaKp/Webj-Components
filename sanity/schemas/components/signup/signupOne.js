import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'signUpOne',
    title: 'Signup Form Data',
    type: 'object',
    fields: [
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'object',
            fields: [
                defineField({
                    name: 'src',
                    title: 'Logo Source',
                    type: 'url',
                }),
                defineField({
                    name: 'alt',
                    title: 'Logo Alt Text',
                    type: 'string',
                }),
            ],
        }),
        defineField({
            name: 'sectionTitle',
            title: 'Section Title',
            type: 'string',
        }),
        defineField({
            name: 'sectionDescription',
            title: 'Section Description',
            type: 'text',
        }),
        defineField({
            name: 'formFields',
            title: 'Form Fields',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'type',
                            title: 'Field Type',
                            type: 'string',
                        }),
                        defineField({
                            name: 'label',
                            title: 'Field Label',
                            type: 'string',
                        }),
                        defineField({
                            name: 'placeholder',
                            title: 'Field Placeholder',
                            type: 'string',
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'agreeTermsLabel',
            title: 'Agree Terms Label',
            type: 'string',
        }),
        defineField({
            name: 'joinButtonLabel',
            title: 'Join Button Label',
            type: 'string',
        }),
        defineField({
            name: 'loginLink',
            title: 'Login Link',
            type: 'object',
            fields: [
                defineField({
                    name: 'label',
                    title: 'Link Label',
                    type: 'string',
                }),
                defineField({
                    name: 'href',
                    title: 'Link Href',
                    type: 'url',
                }),
            ],
        }),
        defineField({
            name: 'loginLinkLabel',
            title: 'Login Link Label',
            type: 'string',
        }),
        defineField({
            name: 'testimonial',
            title: 'Testimonial',
            type: 'object',
            fields: [
                defineField({
                    name: 'quote',
                    title: 'Testimonial Quote',
                    type: 'text',
                }),
                defineField({
                    name: 'authorName',
                    title: 'Author Name',
                    type: 'string',
                }),
                defineField({
                    name: 'authorRole',
                    title: 'Author Role',
                    type: 'string',
                }),
                defineField({
                    name: 'authorAvatar',
                    title: 'Author Avatar',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'src',
                            title: 'Avatar Source',
                            type: 'url',
                        }),
                        defineField({
                            name: 'alt',
                            title: 'Avatar Alt Text',
                            type: 'string',
                        }),
                    ],
                }),
            ],
        }),
    ],
})
