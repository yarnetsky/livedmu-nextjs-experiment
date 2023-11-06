import AuthorAvatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/StoryDate'
import type { Story } from 'lib/sanity.queries'
import Link from 'next/link'

export default function HeroStory(
  props: Pick<
    Story,
    'title' | 'mainImage' | 'excerpt' | 'slug'
  >,
) {
  const { title, mainImage, date, excerpt, author, slug } = props
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage slug={slug} title={title} image={mainImage} priority />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
            <Link href={`/stories/${slug}`} className="hover:underline">
              {title || 'Untitled'}
            </Link>
          </h3>
        </div>
        <div>
          {excerpt && <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>}
        </div>
      </div>
    </section>
  )
}
