import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'license',
    title: 'License',
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
            rows: 4,
            validation: Rule => Rule.required()
        }),
        // image
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    validation: Rule => Rule.required()
                }
            ],
            validation: Rule => Rule.required()
        }),
        // order
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Display order (lower numbers appear first)'
        }),
        // translations reference
        defineField({
            name: 'translations',
            title: 'Translations',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'license' }]
                }
            ]
        })
    ],
    preview: {
        select: {
            title: 'title',
            language: 'language',
            media: 'image'
        },
        prepare({ title, language, media }) {
            return {
                title: `${title} (${language.toUpperCase()})`,
                media
            }
        }
    },
    orderings: [
        {
            title: 'Order, Ascending',
            name: 'orderAsc',
            by: [
                { field: 'order', direction: 'asc' },
                { field: '_createdAt', direction: 'desc' }
            ]
        }
    ]
})