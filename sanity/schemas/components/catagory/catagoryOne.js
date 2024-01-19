import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'catagoryOne',
    title: 'Popular Categories Data',
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
            name: 'allCatagoriesCta',
            title: 'All Categories CTA',
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
            name: 'catagories',
            title: 'Categories',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'imageSrc',
                            title: 'Image Source',
                            type: 'image',
                        }),
                        defineField({
                            name: 'title',
                            title: 'Category Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'link',
                            title: 'Category Link',
                            type: 'string',
                        }),
                    ],
                },
            ],
        }),
    ],
})
