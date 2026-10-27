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
      name: 'image',
      title: 'Image / Illustration du Pôle de Service',
      description: 'Optionnel : image personnalisée pour illustrer ce pôle de service.',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Un chiffre pour trier les services (ex: 1, 2, 3...)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
})
