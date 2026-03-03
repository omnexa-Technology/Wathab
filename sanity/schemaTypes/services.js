import { defineType, defineField } from 'sanity'

/**
 * Services content type — used for the services listing page (/services).
 * Each document is language-aware (en/ar) and can reference translations
 * (equivalent documents in the other language) via the translations array.
 *
 * @see service-details — full detail pages with slug, content, faq, seo
 */
export default defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    // Language — shown first for visibility in Studio
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Arabic', value: 'ar' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    // title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // description
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    // icon
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // translations — references other services documents (en ↔ ar)
    defineField({
      name: 'translations',
      title: 'Translations',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'services' }],
        },
      ],
      description: 'Link to equivalent documents in other languages (e.g. EN ↔ AR).',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
      media: 'icon',
    },
    prepare({ title, language, media }) {
      const langTag = language ? `[${language.toUpperCase()}]` : '[?]'
      return {
        title: title ? `${langTag} ${title}` : 'Untitled Service',
        media,
      }
    },
  },
})
