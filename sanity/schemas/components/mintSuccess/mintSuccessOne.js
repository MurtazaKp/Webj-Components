import { defineField, defineType } from 'sanity'

export default 
    defineField({
    name: 'mintSuccessOne',
    title: 'Mint Success',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            initialValue: 'Mint Successful',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            initialValue: 'This can take a few minutes depending on gas',
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
                    initialValue: 'Nft image',
                }),
            ],
        }),
        defineField({
            name: 'openseaButton',
            title: 'Opensea Button',
            type: 'object',
            fields: [
                defineField({
                    name: 'label',
                    title: 'Button Label',
                    type: 'string',
                    initialValue: 'View on Opensea',
                }),
                defineField({
                    name: 'href',
                    title: 'Button Href',
                    type: 'string',
                    initialValue: '#',
                }),
            ],
        }),
        defineField({
            name: 'apeName',
            title: 'Ape Name',
            type: 'string',
            initialValue: 'Sad Ape #258',
        }),
        defineField({
            name: 'owner',
            title: 'Owner',
            type: 'object',
            fields: [
                defineField({
                    name: 'ownerText',
                    title: 'Owner Text',
                    type: 'string',
                    initialValue: 'Owned by:',
                }),
                defineField({
                    name: 'avatar',
                    title: 'Owner Avatar',
                    type: 'image',
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
                            initialValue: 'Alt',
                        }),
                    ],
                }),
                defineField({
                    name: 'ownerName',
                    title: 'Owner Name',
                    type: 'string',
                    initialValue: 'FA',
                }),
                defineField({
                    name: 'ownerAddress',
                    title: 'Owner Address',
                    type: 'string',
                    initialValue: '0xf99...28C',
                }),
            ],
        }),
        defineField({
            name: 'assetId',
            title: 'Asset Id',
            type: 'object',
            fields: [
                defineField({
                    name: 'label',
                    title: 'Label',
                    type: 'string',
                    initialValue: 'Asset Id',
                }),
                defineField({
                    name: 'value',
                    title: 'Value',
                    type: 'string',
                    initialValue: '1rj949940l1kd0ie095941',
                }),
            ],
        }),
        defineField({
            name: 'currentPrice',
            title: 'Current Price',
            type: 'object',
            fields: [
                defineField({
                    name: 'label',
                    title: 'Label',
                    type: 'string',
                    initialValue: 'Current Price',
                }),
                defineField({
                    name: 'value',
                    title: 'Value',
                    type: 'string',
                    initialValue: 'Ξ 1.9 ETH',
                }),
            ],
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'object',
            fields: [
                defineField({
                    name: 'label',
                    title: 'Label',
                    type: 'string',
                    initialValue: 'Description',
                }),
                defineField({
                    name: 'description',
                    title: 'Description',
                    type: 'string',
                    initialValue:
                        'An NFT is a digital asset that represents real-world objects like art, music, in-game products, and videos.',
                }),
            ],
        }),
    ],
});


