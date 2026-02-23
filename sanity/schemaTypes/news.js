export default {
    name: 'news',
    title: 'News',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative text',
                    type: 'string',
                    description: 'Important for SEO and accessibility.'
                }
            ]
        },
        {
            name: 'content',
            title: 'Content',
            type: 'text'
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime'
        },

    ]
}