import { defineField, defineType } from 'sanity'; 
// mainImage.js
export default defineType({
  name: 'mainImage',
  type: 'image',
  title: 'Main Image',
  fields: [
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: `Describe the image for people who can't see it`,
      isHighlighted: true,
    }),
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: `Text that's displayed with the image`,
      isHighlighted: true,
    }),
    defineField({
      name: 'cropOverride',
      type: 'string',
      title: 'Crop Override',
      description: `we'll enter format this needs soon`,
    }),
  ],
  options: {
    hotspot: true,
  },
});
