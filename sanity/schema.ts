import { type SchemaTypeDefinition } from 'sanity'
import { post } from './schemas/post'
import { tag } from './schemas/tag'
import { author } from './schemas/author'
import { location } from './schemas/location'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag,author,location],
}
