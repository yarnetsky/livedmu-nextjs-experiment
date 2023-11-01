import IndexPage from 'components/IndexPage'
import PreviewIndexPage from 'components/PreviewIndexPage'
import { readToken } from 'lib/sanity.api'
import { getAllStories, getClient, getSettings } from 'lib/sanity.client'
import { Story, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  stories: Story[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { stories, settings, draftMode } = props

  if (draftMode) {
    return <PreviewIndexPage stories={stories} settings={settings} />
  }

  return <IndexPage stories={stories} settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, stories = []] = await Promise.all([
    getSettings(client),
    getAllStories(client),
  ])

  return {
    props: {
      stories,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
