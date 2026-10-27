import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'clientLogo',
  title: 'Logos Clients ("Ils nous ont fait confiance")',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom du client / de l\'entreprise',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Image du Logo',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
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
      title: 'name',
      media: 'logo',
    },
  },
})
