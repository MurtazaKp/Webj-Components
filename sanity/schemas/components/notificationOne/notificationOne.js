import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'notificationOne',
    title: 'Notification ',
    type: 'object',
    fields: [
        defineField({
            name: 'headingText',
            title: 'Heading Text',
            type: 'string',
        }),
        defineField({
            name: 'uploadText',
            title: 'Upload Text',
            type: 'string',
        }),
        defineField({
            name: 'fileName',
            title: 'File Name',
            type: 'string',
        }),
    ],
    initialValue: {
        headingText: 'Upload Successfully',
        uploadText: 'was uploaded successfully',
        fileName: 'logo.png',
    },
})
