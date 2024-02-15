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
            initialValue: 'Mint an Ape',
        }),
        defineField({
            name: 'subText',
            title: 'Sub Text',
            type: 'string',
            initialValue: 'Osprey - The Smart Ape',
        }),
        defineField({
            name: 'imageSrc',
            title: 'Image Source',
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
                    initialValue: 'Mint Ape Image',
                }),
            ],
        }),
        defineField({
            name: 'selectQuantityText',
            title: 'Select Quantity Text',
            type: 'string',
            initialValue: 'Select Quantity:',
        }),
        defineField({
            name: 'mintCostText',
            title: 'Mint Cost Text',
            type: 'string',
            initialValue: 'Mint Cost:',
        }),
        defineField({
            name: 'mintCostValue',
            title: 'Mint Cost Value',
            type: 'string',
            initialValue: '0.547',
        }),
        defineField({
            name: 'mintCostCurrency',
            title: 'Mint Cost Currency',
            type: 'string',
            initialValue: 'EFT',
        }),
        defineField({
            name: 'mintButton',
            title: 'Mint Button',
            type: 'string',
            initialValue: 'Mint',
        }),
        defineField({
            name: 'walletBalanceText',
            title: 'Wallet Balance Text',
            type: 'string',
            initialValue: 'Wallet Balance:',
        }),
        defineField({
            name: 'walletBalanceValue',
            title: 'Wallet Balance Value',
            type: 'string',
            initialValue: '3.925 EFT',
        }),
    ],
})
