import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'signUpOne',
    title: 'Signup Component',
    type: 'object',
    fields: [
        defineField({
            name: 'logo',
            title: 'logo',
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
            name: 'sectionTitle',
            title: 'Section Title',
            type: 'string',
        }),
        defineField({
            name: 'sectionDescription',
            title: 'Section Description',
            type: 'string',
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
                            title: 'Label',
                            type: 'string',
                        }),
                        defineField({
                            name: 'placeholder',
                            title: 'Placeholder',
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
            ],
        }),
        // Add more fields as needed
    ],
    initialValue: {
        logo: {
            src: 'https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg',
            alt: 'logo',
        },
        sectionTitle: 'Get started your 14 days free trial now',
        sectionDescription: 'Already have an account?',
        formFields: [
            {
                type: 'text',
                label: 'Email',
                placeholder: 'Username',
            },
            {
                type: 'password',
                label: 'Password',
                placeholder: 'Password (min. 8 characters)',
            },
        ],
        agreeTermsLabel: 'I agree with Terms & Conditions',
        joinButtonLabel: 'Join Rareblocks',
        loginLink: {
            label: 'Login Now',
            href: '/login',
        },
        loginLinkLabel: 'Already have an account? Login now',
        testimonial: {
            quote: '“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”',
            authorName: 'Leslie Alexander',
            authorRole: 'React Developer',
            authorAvatar: {
                src: 'https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/4/avatar-female.png',
                alt: 'Leslie Alexander Avatar',
            },
        },
    },
})
