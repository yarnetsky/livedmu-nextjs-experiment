import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  indexQuery,
  type Story,
  storyAndMoreStoriesQuery,
  storyBySlugQuery,
  storySlugsQuery,
  type Settings,
  settingsQuery,
} from 'lib/sanity.queries'
import { createClient, type SanityClient } from 'next-sanity'

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
  })
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}

export const getSanityImageConfig = () => getClient()

export async function getSettings(client: SanityClient): Promise<Settings> {
  return (await client.fetch(settingsQuery)) || {}
}

export async function getAllStories(client: SanityClient): Promise<Story[]> {
  return (await client.fetch(indexQuery)) || []
}

export async function getAllStoriesSlugs(): Promise<Pick<Story, 'slug'>[]> {
  const client = getClient()
  const slugs = (await client.fetch<string[]>(storySlugsQuery)) || []
  return slugs.map((slug) => ({ slug }))
}

export async function getStoryBySlug(
  client: SanityClient,
  slug: string,
): Promise<Story> {
  return (await client.fetch(storyBySlugQuery, { slug })) || ({} as any)
}

export async function getStoryAndMoreStories(
  client: SanityClient,
  slug: string,
): Promise<{ story: Story; moreStories: Story[] }> {
  return await client.fetch(storyAndMoreStoriesQuery, { slug })
}
