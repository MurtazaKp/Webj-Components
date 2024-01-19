import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'Product',
    title: 'Products',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Items Heading',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Items Description',
            type: 'text',
        }),
        defineField({
            name: 'products',
            title: 'Featured Products',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'id',
                            title: 'Product ID',
                            type: 'string',
                        }),
                        defineField({
                            name: 'imageSrc',
                            title: 'Product Image Source',
                            type: 'url',
                        }),
                        defineField({
                            name: 'label',
                            title: 'Product Label',
                            type: 'string',
                        }),
                        defineField({
                            name: 'title',
                            title: 'Product Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'price',
                            title: 'Product Price',
                            type: 'number',
                        }),
                        defineField({
                            name: 'originalPrice',
                            title: 'Product Original Price',
                            type: 'number',
                        }),
                        // Add more fields as needed
                    ],
                },
            ],
        }),
    ],
})
