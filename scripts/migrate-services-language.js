/**
 * Migration script: Add language field to existing services documents.
 *
 * Run with: node scripts/migrate-services-language.js
 *
 * Prerequisites:
 * - SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_TOKEN in env
 * - Or use @sanity/client with token for write access
 *
 * Steps:
 * 1. Fetch all services docs without language: *[_type == "services" && !defined(language)]{ _id }
 * 2. For each: patch with { language: 'en' } (or 'ar' based on your heuristics)
 * 3. Manual step: link translations in Studio (add references between EN/AR pairs)
 *
 * Example usage with @sanity/client:
 *
 *   const client = createClient({
 *     projectId: process.env.SANITY_PROJECT_ID,
 *     dataset: process.env.SANITY_DATASET,
 *     apiVersion: '2024-01-01',
 *     token: process.env.SANITY_API_TOKEN,
 *   })
 *
 *   const docs = await client.fetch('*[_type == "services" && !defined(language)]{ _id, title }')
 *   for (const doc of docs) {
 *     await client.patch(doc._id).set({ language: 'en' }).commit()
 *   }
 */

console.log('Migration script outline. Implement with @sanity/client and run manually.')
