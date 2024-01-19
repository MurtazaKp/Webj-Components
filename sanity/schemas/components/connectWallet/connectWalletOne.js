import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'connectWalletOne',
    title: 'Connect Wallet',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'walletOptions',
            title: 'Wallet Options',
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
                            name: 'logoSrc',
                            title: 'Logo Source',
                            type: 'image',
                        }),
                        defineField({
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                        }),
                    ],
                },
            ],
        }),
    ],
})
