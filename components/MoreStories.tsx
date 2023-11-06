import StoryPreview from 'components/StoryPreview'
import type { Story } from 'lib/sanity.queries'

export default function MoreStories({ stories }: { stories: Story[] }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        More Stories
      </h2>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {stories.map((story) => (
          <StoryPreview
            key={story._id}
            title={story.title}
            mainImage={story.mainImage}
            date={story.date}
            author={story.author}
            slug={story.slug}
            excerpt={story.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
