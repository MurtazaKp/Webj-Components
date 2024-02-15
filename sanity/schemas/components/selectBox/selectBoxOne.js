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
                            title: 'image',
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
        }),
    ],
    initialValue: {
        heading: 'Select your customer',
        customers: [
            {
                id: 1,
                name: 'Arlene McCoy',
                role: 'UI/UX Designer',
            },
            {
                id: 2,
                name: 'Kathryn Murphy',
                role: 'Software Developer',
            },
            {
                id: 3,
                name: 'Wade Warren',
                role: 'Team Leader',
            },
            {
                id: 4,
                name: 'Bessie Cooper',
                role: 'Project Manager',
            },
        ],
    },
})
