import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'landing-page',
    title: 'Landing Page',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string'
      }),
      defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      }),
      defineField({
      name: 'cta',
      title: 'CTA',
      type: 'reference',
      to: {type: 'section-cta'},
      }),
      defineField({
        name: 'info',
        title: 'Info',
        type: 'reference',
        to: {type: 'section-info'},
      }),
    ],
    preview: {
      select: {
        title: 'title',
        media: 'image',
      },
    },
  })