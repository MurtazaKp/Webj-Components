import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'verticalMenuOne',
    title: 'Vertical Menu',
    type: 'object',
    fields: [
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'object',
            fields: [
                defineField({
                    name: 'src',
                    title: 'Image Source',
                    type: 'url',
                    initialValue:
                        'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo.svg',
                }),
                defineField({
                    name: 'alt',
                    title: 'Image Alt',
                    type: 'string',
                    initialValue: 'logo image',
                }),
            ],
        }),
        defineField({
            name: 'menus',
            title: 'Menus',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'id',
                            title: 'ID',
                            type: 'string',
                        }),
                        defineField({
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                        }),
                        defineField({
                            name: 'icon',
                            title: 'Icon',
                            type: 'string',
                        }),
                    ],
                },
            ],
            initialValue: [
                { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
                { id: 'tickets', label: 'Tickets', icon: 'tickets' },
                { id: 'agents', label: 'Agents', icon: 'agents' },
                { id: 'customers', label: 'Customers', icon: 'customers' },
                { id: 'products', label: 'Products', icon: 'products' },
                { id: 'orders', label: 'Orders', icon: 'orders' },
                { id: 'analytics', label: 'Analytics', icon: 'analytics' },
                { id: 'settings', label: 'Settings', icon: 'settings' },
            ],
        }),
        defineField({
            name: 'avatar',
            title: 'Avatar',
            type: 'object',
            fields: [
                defineField({
                    name: 'name',
                    title: 'Name',
                    type: 'string',
                    initialValue: 'Jones Jacob',
                }),
                defineField({
                    name: 'image',
                    title: 'Image',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'src',
                            title: 'Image Source',
                            type: 'url',
                            initialValue:
                                'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/vertical-menu/2/avatar-male.png',
                        }),
                        defineField({
                            name: 'alt',
                            title: 'Image Alt',
                            type: 'string',
                            initialValue: 'avatar image',
                        }),
                    ],
                }),
            ],
        }),
        // Add more fields as needed
    ],
})
