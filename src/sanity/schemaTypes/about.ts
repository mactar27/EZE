import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'À Propos & Statistiques',
  type: 'document',
  fields: [
    defineField({
      name: 'aboutText',
      title: 'Texte: Qui sommes-nous ?',
      type: 'text',
    }),
    defineField({
      name: 'visionText',
      title: 'Texte: Notre Vision',
      type: 'text',
    }),
    defineField({
      name: 'missionText',
      title: 'Texte: Notre Mission',
      type: 'text',
    }),
    defineField({
      name: 'statsProjects',
      title: 'Statistique: Projets réalisés',
      type: 'string',
      description: 'Ex: 100+',
    }),
    defineField({
      name: 'statsClients',
      title: 'Statistique: Clients satisfaits',
      type: 'string',
      description: 'Ex: 25+',
    }),
    defineField({
      name: 'statsBrands',
      title: 'Statistique: Marques représentées',
      type: 'string',
      description: 'Ex: 10+',
    }),
    defineField({
      name: 'statsYears',
      title: 'Statistique: Années d\'expérience',
      type: 'string',
      description: 'Ex: 4 ans+',
    }),
  ]
})
