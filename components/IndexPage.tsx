import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import HeroStory from 'components/HeroStory'
import IndexPageHead from 'components/IndexPageHead'
import MoreStories from 'components/MoreStories'
import IntroTemplate from 'intro-template'
import * as demo from 'lib/demo.data'
import type { Story, Settings } from 'lib/sanity.queries'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  stories: Story[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, stories, settings } = props
  const [heroStory, ...moreStories] = stories || []
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} description={description} level={1} />
          {heroStory && (
            <HeroStory
              title={heroStory.title}
              mainImage={heroStory.mainImage}
              date={heroStory.date}
              author={heroStory.author}
              slug={heroStory.slug}
              excerpt={heroStory.excerpt}
            />
          )}
          {moreStories.length > 0 && <MoreStories stories={moreStories} />}
        </Container>
        <IntroTemplate />
      </Layout>
    </>
  )
}
