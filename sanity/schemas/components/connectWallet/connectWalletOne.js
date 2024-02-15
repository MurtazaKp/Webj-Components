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
            initialValue: 'Connect your wallet',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            initialValue: 'Lorem ipsum dolor sit amet, consectetur.',
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
                        defineField({
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                        }),
                    ],
                    initialValue: [
                        {
                            id: 1,
                            name: 'Metamask',
                        },
                        {
                            id: 2,
                            name: 'Coinbase Wallet',
                        },
                        {
                            id: 3,
                            name: 'Fortmatic',
                        },
                        {
                            id: 4,
                            name: 'Wallet Connect',
                        },
                    ],
                },
            ],
        }),
    ],
})
