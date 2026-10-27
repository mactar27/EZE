import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Réalisations (Portfolio)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre du projet',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Photos (Création de contenu)', value: 'Photos' },
          { title: 'Vidéos (Création de contenu)', value: 'Videos' },
          { title: 'Infographie', value: 'Infographie' },
          { title: 'Web Design', value: 'Webdesign' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image / Visuel du projet',
      type: 'image',
      options: {
        hotspot: true, // Permet de recadrer l'image dans le studio
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
})
