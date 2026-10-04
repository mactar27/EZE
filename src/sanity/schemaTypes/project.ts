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
          { title: 'Création de contenu (Photos)', value: 'Photos' },
          { title: 'Création de contenu (Vidéos)', value: 'Videos' },
          { title: 'Infographie', value: 'Infographie' },
          { title: 'Web Design', value: 'Webdesign' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image Principale',
      type: 'image',
      options: {
        hotspot: true, // Permet de recadrer l'image dans le studio
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
