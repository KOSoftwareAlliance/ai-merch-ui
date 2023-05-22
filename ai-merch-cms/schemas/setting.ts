import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'setting',
  title: 'Ustawienia produktu',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nazwa',
      type: 'string',
    }),
    defineField({
      name: 'value',
      title: 'Wartości',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
