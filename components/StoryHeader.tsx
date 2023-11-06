import CoverImage from 'components/CoverImage'
import StoryTitle from 'components/StoryTitle'
import type { Story } from 'lib/sanity.queries'

export default function StoryHeader(
  props: Pick<Story, 'title' | 'mainImage' | 'slug'>,
) {
  const { title, mainImage, slug } = props
  return (
    <>
      <StoryTitle>{title}</StoryTitle>
      
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} image={mainImage} priority slug={slug} />
      </div>

    </>
  )
}
