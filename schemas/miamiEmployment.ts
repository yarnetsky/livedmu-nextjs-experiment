import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Miami Employment',
  name: 'miamiEmployment',
  type: 'object',
  preview: {
    select: {
      title: 'department',
      subtitle: 'positionTitle',
    },
  },
  fields: [
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
    }),
    defineField({
      name: 'positionTitle',
      title: 'Position Title',
      type: 'string',
    }),
    defineField({
      title: 'Institution',
      name: 'employmentInstitution',
      type: 'string',
      options: {
        list: [
          { title: 'Miami University', value: 'Miami University' },
          { title: 'Ohio College for Women', value: 'Ohio College for Women' },
          {
            title: 'Ohio State Normal School',
            value: 'Ohio State Normal School',
          },
          {
            title: 'Western College for Women',
            value: 'Western College for Women',
          },
        ],
      },
    }),
    defineField({
      name: 'empStartYear',
      title: 'Start Year',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
      },
    }),
    defineField({
      name: 'empEndYear',
      title: 'End Year',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
      },
    }),
  ],
});
