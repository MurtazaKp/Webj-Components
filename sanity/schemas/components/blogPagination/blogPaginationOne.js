import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'blogPaginationOne',
    title: 'Blog Pagination',
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
