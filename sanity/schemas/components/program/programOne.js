// yourComponentSchema.js
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'programOne',
    title: 'Program',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Another Title',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            initialValue: 'Subtitle for Another Component',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            initialValue:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        }),
        defineField({
            name: 'buttonText',
            title: 'Button Text',
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
                label: 'Learn More',
                href: '#',
            },
        }),
        defineField({
            name: 'imageUrl',
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
            name: 'weeks',
            title: 'Weeks',
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
                            name: 'duration',
                            title: 'Duration',
                            type: 'string',
                        }),
                        defineField({
                            name: 'content',
                            title: 'Content',
                            type: 'text',
                        }),
                    ],
                },
            ],
            initialValue: [
                {
                    title: 'SECTION 1',
                    duration: 'Week 1 - Week 2',
                    content:
                        'Etiam orci, tellus vestibulum sem in viverra quisque. Mi massa mauris amet lorem fusce. Iaculis id viverra ut semper mattis pellentesque.',
                },
                {
                    title: 'SECTION 2',
                    duration: 'Week 3 - Week 8',
                    content:
                        'Etiam orci, tellus vestibulum sem in viverra quisque. Mi massa mauris amet lorem fusce. Iaculis id viverra ut semper mattis pellentesque.',
                },
                {
                    title: 'SECTION 3',
                    duration: 'Week 8 - Week 10',
                    content:
                        'Etiam orci, tellus vestibulum sem in viverra quisque. Mi massa mauris amet lorem fusce. Iaculis id viverra ut semper mattis pellentesque.',
                },
            ],
        }),
    ],
})
