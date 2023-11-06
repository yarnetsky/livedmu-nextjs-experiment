import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import MoreStories from 'components/MoreStories'
import StoryBody from 'components/StoryBody'
import StoryHeader from 'components/StoryHeader'
import StoryPageHead from 'components/StoryPageHead'
import StoryTitle from 'components/StoryTitle'
import SectionSeparator from 'components/SectionSeparator'
import * as demo from 'lib/demo.data'
import type { Story, Settings } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'

export interface StoryPageProps {
  preview?: boolean
  loading?: boolean
  story: Story
  moreStories: Story[]
  settings: Settings
}

const NO_POSTS: Story[] = []

export default function StoryPage(props: StoryPageProps) {
  const { preview, loading, moreStories = NO_POSTS, story, settings } = props
  const { title = demo.title } = settings || {}

  const slug = story?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <>
      <StoryPageHead settings={settings} story={story} />

      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} level={2} />
          {preview && !story ? (
            <StoryTitle>Loading…</StoryTitle>
          ) : (
            <>
              <article>
                <StoryHeader
                  title={story.title}
                  mainImage={story.mainImage}
                />
                <StoryBody content={story.content} />
              </article>
              <SectionSeparator />
              {moreStories?.length > 0 && <MoreStories stories={moreStories} />}
            </>
          )}
        </Container>
      </Layout>
    </>
  )
}
