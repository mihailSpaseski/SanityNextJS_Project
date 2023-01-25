import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'section-cta',
    title: "Section CTA",
    type: 'document',
    fields: [
        defineField({
            name: 'fullname',
            title: 'Full Name',
            type: 'string'
        }),
        defineField({
            name: 'lasrname',
            title: 'Last Name',
            type: 'string'
        }),
        defineField({
            name: 'age',
            title: 'Age',
            type: 'number'
        }),
    ],
    preview: {
        select: {
          title: 'fullname',
          media: 'image',
        },
      },

})