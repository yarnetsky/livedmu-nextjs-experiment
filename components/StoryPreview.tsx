import CoverImage from 'components/CoverImage'
import type { Story } from 'lib/sanity.queries'
import Link from 'next/link'

export default function StoryPreview({
  title,
  mainImage,
  excerpt,
  slug,
}: Omit<Story, '_id'>) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={mainImage}
          priority={false}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/stories/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      {excerpt && <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>}
    </div>
  )
}
