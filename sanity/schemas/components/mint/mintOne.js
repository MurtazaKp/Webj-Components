import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'mintOne',
    title: 'Mint ',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'subText',
            title: 'Subtext',
            type: 'string',
        }),
        defineField({
            name: 'imageSrc',
            title: 'Image Source',
            type: 'object',
            fields: [
                defineField({
                    name: 'src',
                    title: 'Source',
                    type: 'url',
                }),
                defineField({
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                }),
            ],
        }),
        defineField({
            name: 'selectQuantityText',
            title: 'Select Quantity Text',
            type: 'string',
        }),
        defineField({
            name: 'mintCostText',
            title: 'Mint Cost Text',
            type: 'string',
        }),
        defineField({
            name: 'mintCostValue',
            title: 'Mint Cost Value',
            type: 'string',
        }),
        defineField({
            name: 'mintCostCurrency',
            title: 'Mint Cost Currency',
            type: 'string',
        }),
        defineField({
            name: 'mintButton',
            title: 'Mint Button',
            type: 'string',
        }),
        defineField({
            name: 'walletBalanceText',
            title: 'Wallet Balance Text',
            type: 'string',
        }),
        defineField({
            name: 'walletBalanceValue',
            title: 'Wallet Balance Value',
            type: 'string',
        }),
    ],
})
