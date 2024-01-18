import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'paginationOne',
    title: 'Pagination',
    type: 'object',
    fields: [
        defineField({
            name: 'pageNumbers',
            title: 'Page Numbers',
            type: 'array',
            of: [
                {
                    type: 'number',
                },
            ],
        }),
    ],
})
