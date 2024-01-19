import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'rarityOne',
    title: 'Rarity',
    type: 'object',
    fields: [
        defineField({
            name: 'imageUrl',
            title: 'Image URL',
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
            name: 'rarityRank',
            title: 'Rarity Rank',
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
            name: 'apeId',
            title: 'Ape ID',
            type: 'number',
        }),
        defineField({
            name: 'rarityScore',
            title: 'Rarity Score',
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
            name: 'openSeaButton',
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
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                        }),
                        defineField({
                            name: 'value',
                            title: 'Value',
                            type: 'string',
                        }),
                        defineField({
                            name: 'score',
                            title: 'Score',
                            type: 'string',
                        }),
                        defineField({
                            name: 'count',
                            title: 'Count',
                            type: 'number',
                        }),
                    ],
                },
            ],
        }),
    ],
})
