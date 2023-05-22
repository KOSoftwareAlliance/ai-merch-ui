import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Produkty',
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
      type: 'slug',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'price',
      title: 'Cena',
      type: 'number',
    }),
    defineField({
      name: 'settings',
      title: 'Ustawienia',
      type: 'reference',
      to: [ { type: 'setting' } ],
      weak: false,
    }),
  ],
})
