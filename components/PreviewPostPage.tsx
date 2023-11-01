import StoryPage, { StoryPageProps } from 'components/StoryPage'
import {
  type Story,
  storyAndMoreStoriesQuery,
  Settings,
  settingsQuery,
} from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'

export default function PreviewStoryPage(props: StoryPageProps) {
  const [{ story: storyPreview, moreStories }, loadingStory] = useLiveQuery<{
    story: Story
    moreStories: Story[]
  }>(
    { story: props.story, moreStories: props.moreStories },
    storyAndMoreStoriesQuery,
    {
      slug: props.story.slug,
    },
  )
  const [settings, loadingSettings] = useLiveQuery<Settings>(
    props.settings,
    settingsQuery,
  )

  return (
    <StoryPage
      preview
      loading={loadingStory || loadingSettings}
      story={storyPreview}
      moreStories={moreStories}
      settings={settings}
    />
  )
}
