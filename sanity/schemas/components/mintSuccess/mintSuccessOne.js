import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'mintSuccessOne',
    title: 'Mint Success',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'imageSrc',
            title: 'Image Source',
            type: 'image',
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
            name: 'openseaButton',
            title: 'OpenSea Button',
            type: 'object',
            fields: [
                defineField({
                    name: 'label',
                    title: 'Label',
                    type: 'string',
                }),
                defineField({
                    name: 'href',
                    title: 'Href',
                    type: 'url',
                }),
            ],
        }),
        defineField({
            name: 'apeName',
            title: 'Ape Name',
            type: 'string',
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
                }),
                defineField({
                    name: 'avatar',
                    title: 'Avatar',
                    type: 'image',
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
                    name: 'ownerName',
                    title: 'Owner Name',
                    type: 'string',
                }),
                defineField({
                    name: 'ownerAddress',
                    title: 'Owner Address',
                    type: 'string',
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
                }),
                defineField({
                    name: 'value',
                    title: 'Value',
                    type: 'string',
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
                }),
                defineField({
                    name: 'value',
                    title: 'Value',
                    type: 'string',
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
                }),
                defineField({
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                }),
            ],
        }),
    ],
})
