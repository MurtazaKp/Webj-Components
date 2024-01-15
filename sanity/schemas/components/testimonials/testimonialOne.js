import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'testimonialOne',
    title: 'Testimonial',
    type: 'object',
    fields: [
        defineField({
            name: 'subheading',
            title: 'Subheading',
            type: 'string',
        }),
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'testimonials',
            title: 'Testimonials',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'reviewerImage',
                            title: 'Reviewer Image',
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
                            name: 'reviewerName',
                            title: 'Reviewer Name',
                            type: 'string',
                        }),
                        defineField({
                            name: 'reviewerCompany',
                            title: 'Reviewer Company',
                            type: 'string',
                        }),
                        defineField({
                            name: 'quote',
                            title: 'Testimonial Quote',
                            type: 'string',
                        }),
                    ],
                },
            ],
        }),
    ],
})
