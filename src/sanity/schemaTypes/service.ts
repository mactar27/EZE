import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre du service',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Nom de l\'icône',
      description: 'Choisissez une icône (ex: Camera, Megaphone, Palette, MonitorSmartphone, BarChart3, Target)',
      type: 'string',
      options: {
        list: [
          'Camera',
          'Megaphone',
          'Palette',
          'MonitorSmartphone',
          'BarChart3',
          'Target'
        ]
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Un chiffre pour trier les services (ex: 1, 2, 3...)',
    }),
  ],
  orderings: [
    {
      title: 'Ordre manuel',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    }
  ]
})
