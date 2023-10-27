import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'links',
  title: 'Featured Links',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
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
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'linkImage',
      title: 'Link image',
      type: 'mainImage',
    }),
    defineField({
      title: 'Site location',
      name: 'siteLocation',
      type: 'string',
      options: {
        list: [{ title: 'Front page', value: 'front' }],
      },
    }),
    defineField({
      name: 'publish',
      title: 'Publish',
      type: 'boolean',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],
})
