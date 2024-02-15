import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'rarityOne',
    title: 'Rarity',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'name',
            type: 'string',
           
        }),
        defineField({
            name: 'imageUrl',
            title: 'Image URL',
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
                    initialValue: 'rarity image',
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
                    initialValue: 'Rarity Rank #',
                }),
                defineField({
                    name: 'value',
                    title: 'Value',
                    type: 'string',
                    initialValue: '3',
                }),
            ],
        }),
        defineField({
            name: 'apeId',
            title: 'Ape ID',
            type: 'number',
            initialValue: 41066,
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
                    initialValue: 'Rarity Score',
                }),
                defineField({
                    name: 'value',
                    title: 'Value',
                    type: 'string',
                    initialValue: '3023',
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
                    initialValue: 'view on opensea',
                }),
                defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'string',
                    initialValue: '#',
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
            initialValue: [
                {
                    name: 'Background',
                    value: 'Orange',
                    score: '+17.44',
                    count: 30,
                },
                { name: 'Mouth', value: 'Rage', score: '+21.91', count: 94 },
                { name: 'Hair', value: 'Top Hat', score: '+37.49', count: 146 },
                {
                    name: 'Facial Hair',
                    value: 'Big Beard',
                    score: '+68.03',
                    count: 385,
                },
                {
                    name: 'Eyes',
                    value: 'Colorful Sunglass',
                    score: '+89.01',
                    count: 542,
                },
                { name: 'Flur', value: 'Regular', score: '+7.35', count: 43 },
                {
                    name: 'Mouth Prop',
                    value: 'Laces',
                    score: '+14.25',
                    count: 58,
                },
                {
                    name: 'Hat',
                    value: 'Colorful Bandana',
                    score: '+35.14',
                    count: 267,
                },
                {
                    name: 'Props',
                    value: '3 Arrows',
                    score: '+155.23',
                    count: 391,
                },
                { name: 'Body', value: 'Slim', score: '+16.07', count: 104 },
                {
                    name: 'Shirt',
                    value: 'Black Polo',
                    score: '+55.10',
                    count: 219,
                },
                {
                    name: 'Tattoo',
                    value: 'Red Circle',
                    score: '+47.56',
                    count: 105,
                },
            ],
        }),
    ],
})
