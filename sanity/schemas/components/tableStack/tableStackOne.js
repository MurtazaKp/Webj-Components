import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'tableStackOne',
    title: 'Table Stack',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            initialValue: 'Customer List',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            initialValue: 'Lorem ipsum dolor sit amet, consectetur adipis.',
        }),
        defineField({
            name: 'CustomerList',
            title: 'Customer List',
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
                            name: 'avatar',
                            title: 'Avatar',
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
            initialValue: [
                {
                    id: 1,
                    name: 'Dianne Russell',
                    role: 'Project Manager',
                },
                {
                    id: 2,
                    name: 'Devon Lane',
                    role: 'Ethical Hacker',
                },
                {
                    id: 3,
                    name: 'Ralph Edwards',
                    role: 'UI/UX Designer',
                },
                {
                    id: 4,
                    name: 'Bessie Cooper',
                    role: 'Scrum Master',
                },
            ],
        }),
    ],
})
