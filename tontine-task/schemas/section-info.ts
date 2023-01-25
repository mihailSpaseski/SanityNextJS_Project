import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'section-info',
    title: "Section Info",
    type: 'document',
    fields: [
        defineField({
            name: 'address',
            title: 'Address',
            type: 'string'
        }),
        defineField({
            name: 'zipCode',
            title: 'Zip Code',
            type: 'string'
        }),
        defineField({
            name: 'phoneNum',
            title: 'Phone Number',
            type: 'number'
        }),
    ],
    preview: {
        select: {
          title: 'address',
        },
      },

})