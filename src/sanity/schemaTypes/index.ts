import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import service from './service'
import about from './about'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, service, about],
}
