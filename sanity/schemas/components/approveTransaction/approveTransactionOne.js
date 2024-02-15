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
            initialValue: 'Approve This Transaction?',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
            initialValue:
                'Are you sure minting this token? You must be awesome.',
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
                    initialValue: 'Easy Sweep',
                }),
                defineField({
                    name: 'quantityText',
                    title: 'Quantity Text',
                    type: 'string',
                    initialValue: 'Quantity',
                }),
                defineField({
                    name: 'quantity',
                    title: 'Quantity',
                    type: 'number',
                    initialValue: 1,
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
                            initialValue: {
                                src: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/approve-transaction/2/product-thumbnail.png',
                                alt: 'Product Thumbnail',
                            },
                        }),
                        defineField({
                            name: 'alt',
                            title: 'Alt',
                            type: 'string',
                            initialValue: 'avatar',
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
                    initialValue: 'Submit',
                }),
            ],
        }),
    ],
})
