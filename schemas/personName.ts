import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Person Name',
  name: 'personName',
  type: 'object',
  fieldsets: [
    {
      name: 'personNameFieldset',
      title: 'Person Name',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      options: {
        list: [
          { title: 'Dr.', value: 'Dr.' },
          { title: 'Mr.', value: 'Mr.' },
          { title: 'Mrs.', value: 'Mrs.' },
          { title: 'Ms.', value: 'Ms.' },
          { title: 'Miss.', value: 'Miss.' },
          { title: 'Rev.', value: 'Rev.' },
        ],
      },
    }),
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'middleName',
      title: 'Middle Name',
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    }),
    defineField({
      name: 'preferredName',
      title: 'Preferred Name',
      type: 'string',
    }),
    defineField({
      name: 'maidenName',
      title: 'Maiden Name',
      type: 'string',
    }),
    defineField({
      title: 'Suffix',
      name: 'suffix',
      type: 'string',
      options: {
        list: [
          { title: 'Sr.', value: 'Sr.' },
          { title: 'Jr.', value: 'Jr.' },
          { title: 'I', value: 'I' },
          { title: 'II', value: 'II' },
          { title: 'III', value: 'III' },
          { title: 'IV', value: 'IV' },
          { title: 'Esq.', value: 'Esq.' },
        ],
      },
    }),
  ],
});
