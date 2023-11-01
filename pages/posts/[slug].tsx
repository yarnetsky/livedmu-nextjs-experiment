import StoryPage from 'components/StoryPage'
import PreviewStoryPage from 'components/PreviewStoryPage'
import { readToken } from 'lib/sanity.api'
import {
  getAllStoriesSlugs,
  getClient,
  getStoryAndMoreStories,
  getSettings,
} from 'lib/sanity.client'
import { Story, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  story: Story
  moreStories: Story[]
  settings?: Settings
}

interface Query {
  [key: string]: string
}

export default function ProjectSlugRoute(props: PageProps) {
  const { settings, story, moreStories, draftMode } = props

  if (draftMode) {
    return (
      <PreviewStoryPage story={story} moreStories={moreStories} settings={settings} />
    )
  }

  return <StoryPage story={story} moreStories={moreStories} settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, { story, moreStories }] = await Promise.all([
    getSettings(client),
    getStoryAndMoreStories(client, params.slug),
  ])

  if (!story) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      story,
      moreStories,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllStoriesSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/stories/${slug}`) || [],
    fallback: 'blocking',
  }
}
