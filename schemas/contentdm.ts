import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contentdm',
  title: 'ContentDM-IIIF',
  type: 'document',
  fields: [
    defineField({
      name: 'contentdmTitle',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'contentdmItem',
      title: 'ContentDM Related Item',
      type: 'string',
    }),
    defineField({
      name: 'contentdmManifest',
      title: 'ContentDM IIIF Manifest',
      type: 'string',
    }),
    defineField({
      name: 'contentdmImage',
      title: 'ContentDM Image',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
});
