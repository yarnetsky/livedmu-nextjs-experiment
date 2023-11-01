import IndexPage, { type IndexPageProps } from 'components/IndexPage'
import {
  indexQuery,
  type Story,
  type Settings,
  settingsQuery,
} from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'

export default function PreviewIndexPage(props: IndexPageProps) {
  const [stories, loadingStories] = useLiveQuery<Story[]>(props.stories, indexQuery)
  const [settings, loadingSettings] = useLiveQuery<Settings>(
    props.settings,
    settingsQuery,
  )

  return (
    <IndexPage
      preview
      loading={loadingStories || loadingSettings}
      stories={stories || []}
      settings={settings || {}}
    />
  )
}
