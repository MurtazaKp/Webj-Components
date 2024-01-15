import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'faqOne',
    title: 'FAQs Data',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'FAQs Heading',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'FAQs Description',
            type: 'text',
        }),
        defineField({
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'question',
                            title: 'FAQ Question',
                            type: 'string',
                        }),
                        defineField({
                            name: 'answer',
                            title: 'FAQ Answer',
                            type: 'text',
                        }),
                    ],
                },
            ],
        }),
    ],
})
