import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Gestion du Contenu EZK Agency')
    .items([
      // Accès direct en Singleton pour les images du site
      S.listItem()
        .title('Images du Site (Bannières & Visuels)')
        .id('siteImages')
        .child(
          S.document()
            .schemaType('siteImages')
            .documentId('siteImages')
            .title('Images du Site (Bannières & Visuels)')
        ),
      // Accès direct en Singleton pour À Propos & Statistiques
      S.listItem()
        .title('À Propos & Statistiques')
        .id('about')
        .child(
          S.document()
            .schemaType('about')
            .documentId('about')
            .title('À Propos & Statistiques')
        ),
      S.divider(),
      // Collections récurrentes
      S.documentTypeListItem('project').title('Réalisations (Portfolio)'),
      S.documentTypeListItem('service').title('Services'),
    ])
