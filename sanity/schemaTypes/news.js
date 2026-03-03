import { defineType, defineField, defineArrayMember } from 'sanity'

/**
 * Custom "Highlight Green" decorator mark.
 * Stored as the mark key `highlightGreen` in portable text.
 * The front-end renderer applies `color: #1B6936; font-weight: 600`.
 */
const highlightGreenDecorator = {
  title: 'Highlight Green',
  value: 'highlightGreen',
  icon: () => (
    <span style={{ color: '#1B6936', fontWeight: 700 }}>H</span>
  ),
}

export default defineType({
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    // ── Core fields (unchanged) ───────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'Arabic', value: 'ar' },
          { title: 'English', value: 'en' },
        ],
        layout: 'radio',
      },
      initialValue: 'ar',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          description: 'Important for SEO and accessibility.',
        },
      ],
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary shown in article cards.',
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),

    // ── Rich content (replaces plain `text`) ─────────────────────────────────
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        // ── Text blocks ──────────────────────────────────────────────────────
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal',     value: 'normal'     },
            { title: 'H2',         value: 'h2'         },
            { title: 'H3',         value: 'h3'         },
            { title: 'Quote',      value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet',     value: 'bullet'  },
            { title: 'Numbered',   value: 'number'  },
          ],
          marks: {
            decorators: [
              { title: 'Bold',            value: 'strong'         },
              { title: 'Italic',          value: 'em'             },
              { title: 'Underline',       value: 'underline'      },
              highlightGreenDecorator,
            ],
            annotations: [
              // Inline hyperlink
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule) =>
                      Rule.uri({ scheme: ['http', 'https', 'mailto', 'tel'] }),
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Open in new tab',
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        }),

        // ── Inline image ─────────────────────────────────────────────────────
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Describe the image for screen readers and SEO.',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Optional caption shown below the image.',
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'translations',
      title: 'Translations',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'news' }],
        },
      ],
    }),
  ],
})
