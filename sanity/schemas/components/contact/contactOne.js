import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'contactOne',
    title: 'Contact ',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Contact Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Contact Description',
            type: 'string',
        }),
        defineField({
            name: 'usaOffice',
            title: 'USA Office',
            type: 'object',
            fields: [
                defineField({
                    name: 'title',
                    title: 'Office Title',
                    type: 'string',
                }),
                defineField({
                    name: 'hours',
                    title: 'Office Hours',
                    type: 'string',
                }),
                defineField({
                    name: 'address',
                    title: 'Office Address',
                    type: 'string',
                }),
            ],
        }),
        defineField({
            name: 'canadaOffice',
            title: 'Canada Office',
            type: 'object',
            fields: [
                defineField({
                    name: 'hours',
                    title: 'Office Hours',
                    type: 'string',
                }),
                defineField({
                    name: 'address',
                    title: 'Office Address',
                    type: 'string',
                }),
            ],
        }),
        defineField({
            name: 'contactInfo',
            title: 'Contact Information',
            type: 'object',
            fields: [
                defineField({
                    name: 'phone1',
                    title: 'Phone Number 1',
                    type: 'string',
                }),
                defineField({
                    name: 'phone2',
                    title: 'Phone Number 2',
                    type: 'string',
                }),
            ],
        }),
        defineField({
            name: 'formFields',
            title: 'Form Fields',
            type: 'object',
            fields: [
                defineField({
                    name: 'title',
                    title: 'Form Title',
                    type: 'string',
                }),
                defineField({
                    name: 'fields',
                    title: 'Form Fields',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                defineField({
                                    name: 'label',
                                    title: 'Field Label',
                                    type: 'string',
                                }),
                                defineField({
                                    name: 'type',
                                    title: 'Field Type',
                                    type: 'string',
                                }),
                                defineField({
                                    name: 'name',
                                    title: 'Field Name',
                                    type: 'string',
                                }),
                                defineField({
                                    name: 'id',
                                    title: 'Field ID',
                                    type: 'string',
                                }),
                                defineField({
                                    name: 'placeholder',
                                    title: 'Field Placeholder',
                                    type: 'string',
                                }),
                            ],
                        },
                    ],
                }),
            ],
        }),
    ],
})
