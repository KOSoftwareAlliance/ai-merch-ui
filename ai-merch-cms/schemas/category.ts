import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Kategorie',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nazwa',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Opis',
      type: 'text',
    }),
  ],
})
