import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'relatedLinks',
  title: 'Related Links',
  type: 'document',
  preview: {
    select: {
      title: 'urlTitle',
      subtitle: 'featuredURL',
    },
  },
  fields: [
    defineField({
      name: 'urlTitle',
      title: 'Link Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'urlSlug',
      title: 'Link Slug',
      type: 'slug',
      options: {
        source: 'urlTitle',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Featured Link',
      name: 'featuredURL',
      type: 'url',
      validation: (rule) =>
        rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    }),
    defineField({
      name: 'linkDescription',
      title: 'Link description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'linkImage',
      title: 'Link image',
      type: 'mainImage',
    }),
    defineField({
      name: 'publish',
      title: 'Publish',
      type: 'boolean',
    }),
  ],
})
