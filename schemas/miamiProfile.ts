import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Miami Profile',
  name: 'miamiProfile',
  type: 'object',
  fields: [
    defineField({
      title: 'Miami Status',
      name: 'status',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'grid',
        list: [
          { title: 'Student', value: 'Student' },
          { title: 'Staff', value: 'Staff' },
          { title: 'Faculty', value: 'Faculty' },
          { title: 'Community Member', value: 'Community Member' },
        ],
      },
    }),
    defineField({
      title: 'Miami Education',
      name: 'miamiEducation',
      type: 'array',
      of: [{ type: 'miamiEducation' }],
    }),
    defineField({
      title: 'Miami Employment',
      name: 'miamiEmployment',
      type: 'array',
      of: [{ type: 'miamiEmployment' }],
    }),
  ],
});
