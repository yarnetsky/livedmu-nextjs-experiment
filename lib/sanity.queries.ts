import { groq } from 'next-sanity'

const storyFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  excerpt,
  mainImage,
  "slug": slug.current,
  "author": author->{name, picture},
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "story"] | order(date desc, _updatedAt desc) {
  ${storyFields}
}`

export const storyAndMoreStoriesQuery = groq`
{
  "story": *[_type == "story" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${storyFields}
  },
  "moreStories": *[_type == "story" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${storyFields}
  }
}`

/*
export const storySlugsQuery = groq`
*[_type == "story" && defined(slug.current)][].slug.current
`
*/

export const storyBySlugQuery = groq`
*[_type == "story" && slug.current == $slug][0] {
  ${storyFields}
}
`
export const storiesQuery = groq`
*[_type == "story"]{
  "slug": slug.current,
  "gender": array::unique(array::compact(featured[]->demographicInformation.gender)),
  "raceOrEthnicity": array::unique(array::compact((featured[]->demographicInformation.race[]))),
  "thumbImage": coalesce(featured[0]->mainImage.asset->url, storyGallery.images[0].asset->url, mainImage.asset->url),
  "bestImage": coalesce(mainImage.asset->url, storyGallery.images[0].asset->url, featured[0]->mainImage.asset->url),
  "bestImageCaption": coalesce(mainImage.caption, storyGallery.images[0].caption, featured[0]->mainImage.caption),
  "theme": array::unique(array::compact(theme[]->title)),
  "status": array::unique(array::compact(featured[0]->miamiInformation.status[])),
  "featuredPerson": featured[],
  "featuredDemographics": featured[0]->demographicInformation,
  "featuredMiamiInfo": featured[0]->miamiInformation,
  "personalNames": featured[]->personalNames,
  "briefBio": coalesce(array::join(string::split(body," ")[0..100]," ")+'...',array::join(string::split(featured[0]->bio," ")[0..100]," ")+'...'),
  title,
  duration,
  location,
  storyType,
  decades,
  descriptiveTitle,
}
`

export interface Story {
  _id: string
  title?: string
  descriptiveTitle?: string
  slug?: string
  storyType?: string
  featuredPerson?: any[]
  author?: Author
  body?: any
  theme?: string[]
  localSubjects?: any[]
  seeAlso?: any[]
  learnMore?: any[]
  decades?: string
  mainImage?: any
  storyGallery?: any
  productionCredits?: any
  publishedAt?: string
  interviewDate?: string
  duration?: string
  location?: string
  kaltura?: any[]
  contentdm?: any[]
  transcriptLink?: string
  citations?: any[]
  storyMetadata?: any[]
  date?: string
  _updatedAt?: string
  excerpt?: string
  status?: string[]
}

export interface Author {
  name?: string
  picture?: any
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}



/*

*/