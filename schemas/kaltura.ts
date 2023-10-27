import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'kaltura',
  title: 'Kaltura',
  type: 'document',
  fields: [
    defineField({
      name: 'kalturaTitle',
      title: 'Video file title',
      type: 'string',
    }),
    defineField({
      name: 'citationTitle',
      title: 'Video title for citation',
      type: 'string',
    }),
    defineField({
      name: 'kalturaId',
      title: 'Kaltura ID',
      type: 'string',
    }),
    defineField({
      name: 'kalturaEmbedCode',
      title: 'Kaltura Embed Code',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
});
