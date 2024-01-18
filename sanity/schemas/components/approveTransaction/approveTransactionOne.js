import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'approveTransactionOne',
    title: 'Approve Transaction',
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
            name: 'product',
            title: 'Product',
            type: 'object',
            fields: [
                defineField({
                    name: 'name',
                    title: 'Name',
                    type: 'string',
                }),
                defineField({
                    name: 'quantityText',
                    title: 'Quantity Text',
                    type: 'string',
                }),
                defineField({
                    name: 'quantity',
                    title: 'Quantity',
                    type: 'number',
                }),
                defineField({
                    name: 'image',
                    title: 'Image',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'src',
                            title: 'Source',
                            type: 'url',
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
            name: 'submitButtonCta',
            title: 'Submit Button CTA',
            type: 'object',
            fields: [
                defineField({
                    name: 'label',
                    title: 'Label',
                    type: 'string',
                }),
            ],
        }),
    ],
})
