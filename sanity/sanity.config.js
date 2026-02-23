// import { defineConfig } from 'sanity'
// import { structureTool } from 'sanity/structure'
// import { visionTool } from '@sanity/vision'
// import { schemaTypes } from './schemaTypes'

// export default defineConfig({
//     name: 'default',
//     title: 'Wathab',

//     projectId: '3zrna7h5',
//     dataset: 'production',

//     plugins: [structureTool(), visionTool()],

//     schema: {
//         types: schemaTypes,
//     },
// })


'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
    name: 'default',

    title: 'Wathab',

    projectId: '3zrna7h5',

    dataset: 'production',

    basePath: '/studio',   

    plugins: [
        structureTool(),
        visionTool(),
    ],

    schema: {
        types: schemaTypes,
    },

})