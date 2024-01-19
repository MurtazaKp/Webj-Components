import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'homeSidebarOne',
    title: 'Home Sidebar',
    type: 'object',
    fields: [
        defineField({
            name: 'blogTitle',
            title: 'Blog Title',
            type: 'string',
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
                }),
                defineField({
                    name: 'imageSrc',
                    title: 'Image Source',
                    type: 'url',
                }),
                defineField({
                    name: 'description',
                    title: 'Description',
                    type: 'text',
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
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'thumbnailSrc',
                            title: 'Thumbnail Source',
                            type: 'url',
                        }),
                        defineField({
                            name: 'link',
                            title: 'Link',
                            type: 'url',
                        }),
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
                    title: 'Title',
                    type: 'string',
                }),
                defineField({
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                }),
                defineField({
                    name: 'avatars',
                    title: 'Avatars',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                defineField({
                                    name: 'src',
                                    title: 'Image Source',
                                    type: 'url',
                                }),
                                defineField({
                                    name: 'alt',
                                    title: 'Image Alt',
                                    type: 'string',
                                }),
                            ],
                        },
                    ],
                }),
            ],
        }),
    ],
})
