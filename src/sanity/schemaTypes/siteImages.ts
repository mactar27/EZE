import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteImages',
  title: 'Images du Site (Bannières & Visuels)',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Image Principale du Hero (Accueil)',
      description: 'L\'image du professionnel ou de l\'équipe affichée dans la carte Hero en haut.',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'aboutImage',
      title: 'Image Section À Propos',
      description: 'L\'image de collaboration affichée dans la page et la section À Propos.',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'servicesBanner',
      title: 'Bannière Section Services (NOS SERVICES)',
      description: 'L\'image d\'en-tête de la section et de la page Services.',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'servicesImages',
      title: 'Images des 6 Pôles de Services',
      description: 'Images personnalisées pour illustrer les 6 pôles de services (Création mobile, Réseaux sociaux, Infographie, Webdesign, Consulting, Ads).',
      type: 'object',
      fields: [
        defineField({ name: 'service01Image', title: '01. Création de contenu mobile', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'service02Image', title: '02. Gestion réseaux sociaux', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'service03Image', title: '03. Infographie', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'service04Image', title: '04. Web Design', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'service05Image', title: '05. Consulting Digital', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'service06Image', title: '06. Campagnes Ads', type: 'image', options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: 'realisationsBanner',
      title: 'Bannière Réalisations (Caméra / Trépied)',
      description: 'L\'image d\'en-tête de la page Réalisations.',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'realisationsEndImage',
      title: 'Image de Fin de Réalisations (Ring Light / Créatrice)',
      description: 'L\'image affichée sous les réseaux sociaux en bas de la page Réalisations.',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'methodBanner',
      title: 'Image de Fond "Pourquoi Nous Choisir"',
      description: 'L\'image en arrière-plan de la carte Pourquoi Nous Choisir.',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'statsBanner',
      title: 'Image de Fond "Chiffres Clés / Statistiques"',
      description: 'L\'image en arrière-plan des chiffres clés (100+, 25+, 10+, 4 ans+).',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'contactBanner',
      title: 'Image d\'Introduction Section Contact',
      description: 'L\'image ou bannière d\'introduction affichée dans la section Contact de l\'accueil et de la page contact.',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'contactPhotoCircle',
      title: 'Photo en Cercle (Bandeau Coordonnées Contact)',
      description: 'La photo ronde affichée au centre du bandeau de contact (portrait, équipe ou logo de l\'agence).',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'clientLogos',
      title: 'Logos des Clients ("Ils nous ont fait confiance")',
      description: 'Ajoutez, retirez ou réordonnez les logos des clients qui défilent.',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'clientName',
              title: 'Nom du client',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
})
