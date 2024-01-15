import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'teamOne',
    title: 'Team ',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Team Heading',
            type: 'string',
        }),

        defineField({
            name: 'team',
            title: 'Team Members',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'name',
                            title: 'Team Member Name',
                            type: 'string',
                        }),
                        defineField({
                            name: 'position',
                            title: 'Team Member Position',
                            type: 'string',
                        }),
                        defineField({
                            name: 'image',
                            title: 'Team Member Image',
                            type: 'object',
                            fields: [
                                defineField({
                                    name: 'src',
                                    title: 'Image Source',
                                    type: 'image',
                                }),
                                defineField({
                                    name: 'alt',
                                    title: 'Image Alt Text',
                                    type: 'string',
                                }),
                            ],
                        }),
                    ],
                },
            ],
        }),
    ],
})
