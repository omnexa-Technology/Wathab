import { defineType, defineField } from 'sanity'

/**
 * Service Details content type — full detail pages at /services/[slug].
 * Each document is language-aware (en/ar) and can reference translations
 * (equivalent service-details documents in the other language).
 *
 * @see services — listing cards on /services page
 */
export default defineType({
    name: 'service-details',
    title: 'Service Details',
    type: 'document',
    fields: [
        // title
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        // slug
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: Rule => Rule.required()
        }),
        // language
        defineField({
            name: 'language',
            title: 'Language',
            type: 'string',
            options: {
                list: [
                    { title: 'English', value: 'en' },
                    { title: 'Arabic', value: 'ar' }
                ],
                layout: 'radio'
            },
            validation: Rule => Rule.required()
        }),
        // description
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 4
        }),
        // rich content
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
        }),
        // FAQ
        defineField({
            name: 'faq',
            title: 'FAQ',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'question',
                            title: 'Question',
                            type: 'string',
                            validation: Rule => Rule.required()
                        },
                        {
                            name: 'answer',
                            title: 'Answer',
                            type: 'text',
                            validation: Rule => Rule.required()
                        }
                    ]
                }
            ]
        }),

        // SEO

        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'object',
            fields: [
                {
                    name: 'metaTitle',
                    title: 'Meta Title',
                    type: 'string'
                },
                {
                    name: 'metaDescription',
                    title: 'Meta Description',
                    type: 'text'
                },
                {
                    name: 'keywords',
                    title: 'Keywords',
                    type: 'array',
                    of: [{ type: 'string' }]
                },
                {
                    name: 'ogImage',
                    title: 'OG Image',
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                },
                {
                    name: 'noIndex',
                    title: 'No Index',
                    type: 'boolean',
                    initialValue: false
                }
            ]
        }),
        // translations — references other service-details documents (en ↔ ar)
        defineField({
            name: 'translations',
            title: 'Translations',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'service-details' }]
                }
            ],
            description: 'Link to equivalent documents in other languages (e.g. EN ↔ AR).'
        })
    ],
    preview: {
        select: {
            title: 'title',
            language: 'language',
            media: 'seo.ogImage'
        },
        prepare({ title, language, media }) {
            const langTag = language ? `[${language.toUpperCase()}]` : '[?]'
            return {
                title: title ? `${langTag} ${title}` : 'Untitled Service Detail',
                media
            }
        }
    }
})