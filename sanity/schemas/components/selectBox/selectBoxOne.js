import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'selectBoxOne',
    title: 'Select Box',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'customers',
            title: 'Customers',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'id',
                            title: 'ID',
                            type: 'number',
                        }),
                        defineField({
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                        }),
                        defineField({
                            name: 'role',
                            title: 'Role',
                            type: 'string',
                        }),
                        defineField({
                            name: 'imageUrl',
                            title: 'Image URL',
                            type: 'url',
                        }),
                    ],
                },
            ],
        }),
    ],
})
