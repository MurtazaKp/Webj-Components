import {defineField, defineType} from 'sanity'


export default defineType({
  name: 'heroOne',
  title: 'herosection',
  type: 'object',
  fields: [
    defineField({
        name:"Herosection",
        title:"name",
        type:"string"
    }),

    defineField({
        name:"title",
        title:"title",
        type:"string"
    }),

    defineField({
        name:"subtitle",
        title:"subtitle",
        type:"string"
    }),

     defineField({
        name:"bannerImage",
        title:"bannerImage",
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
        name:"stats",
        title:"stats",
        type: 'array',
        of:[
          {
            type:"object",
            fields: [
                defineField({
                    name: 'label',
                    title: 'Label',
                    type: 'string',
                  }),
                  defineField({
                    name: 'value',
                    title: 'value',
                    type: 'string',
                  }),
                  
            ],
          }
        ],   
      }),

  ]})