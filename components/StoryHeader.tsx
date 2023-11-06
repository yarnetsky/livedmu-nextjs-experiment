import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/StoryDate'
import StoryTitle from 'components/StoryTitle'
import type { Story } from 'lib/sanity.queries'

export default function StoryHeader(
  props: Pick<Story, 'title' | 'mainImage' | 'date' | 'author' | 'slug'>,
) {
  const { title, mainImage, date, author, slug } = props
  return (
    <>
      <StoryTitle>{title}</StoryTitle>
      <div className="hidden md:mb-12 md:block">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} image={mainImage} priority slug={slug} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  )
}
