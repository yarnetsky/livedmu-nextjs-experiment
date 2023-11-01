import { defineField, defineType } from 'sanity';
// import AssetSource from 'part:sanity-plugin-media-library/asset-source';

export default defineType({
  name: 'story',
  title: 'Story',
  icon: BookIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'descriptiveTitle',
      title: 'Descriptive Title',
      description:
        'Story-telling summary of the story. Can be used as a teaser for Read More',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description:
        'customize story url here or click generate for automated slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'storyType',
      title: 'Story Type',
      type: 'string',
      options: {
        list: [
          { title: 'Biography', value: 'Biography' },
          { title: 'Documentary', value: 'Documentary' },
          { title: 'Oral History', value: 'Oral History' },
        ],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Person(s) Featured',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'person' } }],
    }),
    defineField({
      name: 'author',
      title: 'Author-Interviewer-Creation Team',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'person' } }],
    }),
    defineField({
      name: 'body',
      title: 'Story or Story Description',
      description: 'This is the primary text of the story',
      type: 'array',
      of: [{ type: 'block' },
      {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Image caption',
              description: 'Caption displayed below the image.',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessiblity.',
            },
          ],
        },
    ],
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      description: 'Primary story categorization',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'theme' } }],
    }),
    defineField({
      name: 'localSubjects',
      title: 'Local Subjects',
      description: 'Tag story with all relevant subjects',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'localSubjects' } }],
    }),
    defineField({
      name: 'seeAlso',
      title: 'Related Articles',
      description:
        'Allows for links to specific articles (as opposed to the broad categories and subjects above)',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'story' } }],
    }),
    defineField({
      name: 'learnMore',
      title: 'Learn More',
      description: 'External links related to the story',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'relatedLinks' } }],
    }),
    defineField({
      name: 'decades',
      title: 'Decades covered',
      description: 'Check every decade in the story',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'grid',
        list: [
          { title: '1900s', value: '1900s' },
          { title: '1910s', value: '1910s' },
          { title: '1920s', value: '1920s' },
          { title: '1930s', value: '1930s' },
          { title: '1940s', value: '1940s' },
          { title: '1950s', value: '1950s' },
          { title: '1960s', value: '1960s' },
          { title: '1970s', value: '1970s' },
          { title: '1980s', value: '1980s' },
          { title: '1990s', value: '1990s' },
          { title: '2000s', value: '2000s' },
          { title: '2010s', value: '2010s' },
          { title: '2020s', value: '2020s' },
        ],
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Hero or Primary Image',
      type: 'mainImage',
    }),
    defineField({
      name: 'storyGallery',
      title: 'Story Gallery',
      type: 'gallery',
    }),
    defineField({
      name: 'productionCredits',
      title: 'Production Credits',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publication/Release Date',
      type: 'date',
    }),
    defineField({
      name: 'interviewDate',
      title: 'Interview Date',
      type: 'date',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      description: 'Duration of the interview or documentary. hh:mm',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Related Location',
      type: 'string',
    }),
    defineField({
      name: 'kaltura',
      title: 'Kaltura details',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'kaltura' } }],
    }),
    defineField({
      name: 'contentdm',
      title: 'ContentDM-IIIF details',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'contentdm' } }],
    }),
    defineField({
      name: 'transcriptLink',
      title: 'Transcription Download Link',
      type: 'string',
    }),
    defineField({
      name: 'citations',
      title: 'Citations',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'storyMetadata',
      title: 'Story Metadata',
      type: 'storyMetadata',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      person: 'person.name',
      media: 'image',
    },
    prepare(selection) {
      const { person } = selection
      return Object.assign({}, selection, {
        subtitle: person && `by ${person}`,
      })
    },
  },
})
