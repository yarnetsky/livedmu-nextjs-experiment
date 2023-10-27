import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Story Metadata',
  name: 'storyMetadata',
  type: 'object',
  fields: [
    defineField({
      name: 'storyEntered',
      title: 'Story Entered',
      type: 'datetime',
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
    }),
  ],
});
