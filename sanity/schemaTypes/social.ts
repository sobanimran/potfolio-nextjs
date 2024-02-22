import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title : 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description:'platform Name of social media'
    }),
    
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
    }),
    ],

  
})
