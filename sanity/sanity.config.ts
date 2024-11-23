import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Syed Moinuddin - Blog',

  projectId: 'xwrj0xoe',
  dataset: 'syed',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
