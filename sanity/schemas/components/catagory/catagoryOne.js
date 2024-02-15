import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'catagoryOne',
    title: 'Catagory',
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
            type: 'string',
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
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'link',
                            title: 'Link',
                            type: 'string',
                        }),
                        defineField({
                            name: 'imageSrc',
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
                    ],
                },
            ],
            initialValue: [
                {
                    title: 'Smart Watches',
                    link: '#',
                },
                {
                    title: 'True Wireless Earphone',
                    link: '#',
                },
                {
                    title: 'Wireless Headphone',
                    link: '#',
                },
                {
                    title: 'Smart Phones',
                    link: '#',
                },
                {
                    title: 'Running Shoes',
                    link: '#',
                },
                {
                    title: 'Leather Items',
                    link: '#',
                },
            ],
        }),
    ],
})
