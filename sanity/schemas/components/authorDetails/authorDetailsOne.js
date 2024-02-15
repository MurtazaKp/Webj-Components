import { defineField, defineType,defineArrayMember } from 'sanity'

export default defineType({
    name: 'authorDetailsOne',
    title: 'Author Details',
    type: 'object',
    fields: [
       

        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            of: [
                {
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
                },
            ],
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
    ],
    initialValue: {
        name: 'Atron Calery',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci commodo, elit sit enim blandit enim sit molestie aana.',
        socialLinks: [
            { label: 'Facebook', href: 'www.facebook.com' },
            { label: 'Twitter', href: 'www.twitter.com' },
            { label: 'Website', href: 'www.example.com' },
        ],
        image: {
            alt: 'Atron Calery Image',
        },
    },
})
