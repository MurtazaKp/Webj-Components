import {defineField, defineType} from 'sanity'


export default defineType({
  name: 'footerOne',
  title: 'Footer',
  type: 'object',
  fields: [
    defineField({
        name:"Footer",
        title:"name",
        type:"string"
    }),
   


        defineField({
        name:"logo",
        title:"logo",
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
        name:"socialMediaLinks",
        title:"socialMediaLinks",
        type: 'array',
        of:[
          {
            type:"object",
            fields: [
                defineField({
                    name: 'icon',
                    title: 'icon',
                    type: 'string',
                  }),
                  defineField({
                    name: 'url',
                    title: 'url',
                    type: 'string',
                  }),
                 
            ],
          }
        ],   
      }),

       defineField({
        name:"navigationLinks",
        title:"navigationLinks",
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
                    name: 'href',
                    title: 'href',
                    type: 'string',
                  }),
                  defineField({
                    name: 'target',
                    title: 'Target',
                    type: 'string',
                  }),
            ],
          }
        ],   
      }),

    

      defineField({
        name:"copyright",
        title:"copyright",
        type:"string"
    }),
  ]})