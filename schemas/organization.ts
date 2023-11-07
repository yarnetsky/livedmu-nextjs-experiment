import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'organization',
  title: 'Organization',
  type: 'document',
  fields: [
    defineField({
      name: 'orgName',
      title: 'Organization Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'orgName',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: 'Local Subjects',
      name: 'localSubjects',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'localSubjects' } }],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'markdown',
    }),
    defineField({
      name: 'contentdm',
      title: 'ContentDM-IIIF details',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'contentdm' } }],
    }),
  ],
  preview: {
    select: {
      title: 'orgName',
      media: 'image',
    },
  },
})
