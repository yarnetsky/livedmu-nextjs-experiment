import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'transcript',
  title: 'Transcript',
  type: 'object',
  fields: [
    defineField({
      name: 'transcripts',
      type: 'array',
      title: 'transcripts',
      of: [
        {
          name: 'transcriptFile',
          type: 'file',
          title: 'Transcript File',
          fields: [
            {
              name: 'transcriptTitle',
              type: 'string',
              title: 'Transcript Title-Description',
            },
            {
              name: 'transcriptText',
              title: 'Transcript text',
              type: 'array',
      of: [
        { type: 'block' },
          ]
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
  ],
  preview: {
    select: {
      images: 'transcripts',
      image: 'transcripts.0',
    },
  },
})
