import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Display Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'personalNames',
      title: 'Personal Names',
      type: 'personName',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Primary Image',
      type: 'mainImage',
    }),
    defineField({
      title: 'Person Type',
      name: 'personType',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'grid',
        list: [
          { title: 'Story Subject', value: 'Story Subject' },
          { title: 'Interviewee', value: 'Interviewee' },
          { title: 'Interviewer', value: 'interviewer' },
          { title: 'Editor', value: 'Editor' },
          { title: 'Assistant Editor', value: 'Assistant Editor' },
          { title: 'Author', value: 'Author' },
          { title: 'Photographer', value: 'Photographer' },
          { title: 'Producer', value: 'Producer' },
          { title: 'Director', value: 'Director' },
          { title: 'Production Assistant', value: 'Production Assistant' },
        ],
      },
    }),
    defineField({
      name: 'miamiInformation',
      title: 'Miami Profile',
      type: 'miamiProfile',
    }),
    defineField({
      name: 'demographicInformation',
      title: 'Demographic Information',
      type: 'demographics',
    }),
    defineField({
      title: 'Local Subjects',
      name: 'localSubjects',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'localSubjects' } }],
    }),
    defineField({
      name: 'bio',
      title: 'Brief Bio',
      type: 'markdown',
    }),
    defineField({
      name: 'learnMore',
      title: 'Learn More',
      description: 'These are external links related to the person',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'relatedLinks' } }],
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
      title: 'name',
      media: 'image',
    },
  },
})
