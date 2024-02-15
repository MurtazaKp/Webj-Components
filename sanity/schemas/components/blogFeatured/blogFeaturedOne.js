import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'blogFeaturedOne',
    title: 'Blog Feature',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'name',
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
            name: 'category',
            title: 'Category',
            type: 'string',
        }),

        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'text',
        }),
        defineField({
            name: 'buttonLink',
            title: 'Button Link',
            type: 'object',
            fields: [
                defineField({
                    name: 'label',
                    title: 'Label',
                    type: 'string',
                }),
                defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'string',
                }),
            ],
        }),
    ],
    initialValue: {
      
        category: 'Featured',
        title: 'How to write content about your photographs',
        date: 'April 09, 2022',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis commodo magna risus maecenas nisl sed cras lacus, vestibulum. Dictum nisi amet.',
        buttonLink: { label: 'Read Full Article', href: '#' },
    },
})