import BlogMeta from 'components/BlogMeta'
import * as demo from 'lib/demo.data'
import { urlForImage } from 'lib/sanity.image'
import { Story, Settings } from 'lib/sanity.queries'
import Head from 'next/head'

export interface StoryPageHeadProps {
  settings: Settings
  story: Story
}

export default function StoryPageHead({ settings, story }: StoryPageHeadProps) {
  const title = settings.title ?? demo.title
  return (
    <Head>
      <title>{story.title ? `${story.title} | ${title}` : title}</title>
      <BlogMeta />
      {story.mainImage?.asset?._ref && (
        <meta
          property="og:image"
          content={urlForImage(story.mainImage)
            .width(1200)
            .height(627)
            .fit('crop')
            .url()}
        />
      )}
    </Head>
  )
}
