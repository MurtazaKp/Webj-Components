import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'cartOne',
    title: 'Cart ',
    type: 'object',
    fields: [
        defineField({
            name: 'mainHeading',
            title: 'Cart Main Heading',
            type: 'string',
        }),
        defineField({
            name: 'cartItemsText',
            title: 'Cart Items Text',
            type: 'string',
        }),
        defineField({
            name: 'shoppingButton',
            title: 'Shopping Button',
            type: 'object',
            fields: [
                defineField({
                    name: 'label',
                    title: 'Button Label',
                    type: 'string',
                }),
                defineField({
                    name: 'href',
                    title: 'Button Href',
                    type: 'url',
                }),
            ],
        }),
        defineField({
            name: 'paymentButton',
            title: 'Payment Button',
            type: 'object',
            fields: [
                defineField({
                    name: 'label',
                    title: 'Button Label',
                    type: 'string',
                }),
                defineField({
                    name: 'href',
                    title: 'Button Href',
                    type: 'url',
                }),
            ],
        }),
        defineField({
            name: 'itemsInCart',
            title: 'Items in Cart',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'id',
                            title: 'Item ID',
                            type: 'number',
                        }),
                        defineField({
                            name: 'name',
                            title: 'Item Name',
                            type: 'string',
                        }),
                        defineField({
                            name: 'color',
                            title: 'Item Color',
                            type: 'string',
                        }),
                        defineField({
                            name: 'price',
                            title: 'Item Price',
                            type: 'number',
                        }),
                        defineField({
                            name: 'image',
                            title: 'Item Image',
                            type: 'url',
                        }),
                        // Add more fields as needed
                    ],
                },
            ],
        }),
        defineField({
            name: 'paymentDetails',
            title: 'Payment Details',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'item',
                            title: 'Payment Item',
                            type: 'string',
                        }),
                        defineField({
                            name: 'amount',
                            title: 'Payment Amount',
                            type: 'number',
                        }),
                    ],
                },
            ],
        }),
    ],
})
