import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'o6xc6gj5', 
  apiVersion: '2021-10-21', 
  dataset: 'production', 
  useCdn: true
})