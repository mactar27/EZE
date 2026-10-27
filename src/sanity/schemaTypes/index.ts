import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import service from './service'
import about from './about'
import siteImages from './siteImages'
import clientLogo from './clientLogo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, service, about, siteImages, clientLogo],
}
