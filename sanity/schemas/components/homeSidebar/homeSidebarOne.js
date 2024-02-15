import { defineField, defineType } from 'sanity'

export default defineField({
    name: 'homeSidebarOne',
    title: 'Home Sidebar',
    type: 'object',
    fields: [
        defineField({
            name: 'blogTitle',
            title: 'Blog Title',
            type: 'string',
            initialValue: 'Clarity Blog',
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'object',
            fields: [
                defineField({
                    name: 'name',
                    title: 'Name',
                    type: 'string',
                    initialValue: 'Atron Calery',
                }),
                defineField({
                    name: 'imageSrc',
                    title: 'Image src',
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
                            initialValue: 'image',
                        }),
                    ],
                }),
                defineField({
                    name: 'description',
                    title: 'Author Description',
                    type: 'string',
                    initialValue:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci commodo.',
                }),
            ],
        }),
        defineField({
            name: 'recentArticles',
            title: 'Recent Articles',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Article Title',
                            type: 'string',
                            initialValue:
                                'How a visual artist redefines success in graphic design',
                        },
                        {
                            name: 'thumbnailSrc',
                            title: 'Thumbnail Src',
                            type: 'object',
                            fields: [
                                {
                                    name: 'src',
                                    title: 'Source',
                                    type: 'image',
                                },
                                {
                                    name: 'alt',
                                    title: 'Alt Text',
                                    type: 'string',
                                },
                            ],
                        },
                        {
                            name: 'link',
                            title: 'Article Link',
                            type: 'string',
                            initialValue: '#',
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: 'newsletter',
            title: 'Newsletter',
            type: 'object',
            fields: [
                defineField({
                    name: 'title',
                    title: 'Newsletter Title',
                    type: 'string',
                    initialValue: 'Join exclusive list',
                }),
                defineField({
                    name: 'newsletterCtaText',
                    title: 'Newsletter CTA Text',
                    type: 'string',
                    initialValue:
                        'Join with2600+ Developers and start getting feedbacks right now',
                }),
                defineField({
                    name: 'newsletterCtaButton',
                    title: 'Newsletter CTA Button',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'label',
                            title: 'Button Label',
                            type: 'string',
                            initialValue: 'Join Now',
                        }),
                    ],
                }),
                defineField({
                    name: 'description',
                    title: 'Description',
                    type: 'string',
                    initialValue:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis auctor.',
                }),
                defineField({
                    name: 'avatars',
                    title: 'Avatars',
                    type: 'array',
                    of: [
                        defineField({
                            name: 'avatar',
                            title: 'Avatar',
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
                defineField({
                    name: 'newsletterForm',
                    title: 'Newsletter Form',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                            initialValue: 'email',
                        }),
                        defineField({
                            name: 'type',
                            title: 'Type',
                            type: 'string',
                            initialValue: 'email',
                        }),
                        defineField({
                            name: 'placeholder',
                            title: 'Placeholder',
                            type: 'string',
                            initialValue: 'Enter a Email Address',
                        }),
                    ],
                }),
                defineField({
                    name: 'privacyText',
                    title: 'Privacy Text',
                    type: 'string',
                    initialValue: 'we do not sell your data',
                }),
            ],
        }),
    ],
})
