/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import {
  apiVersion,
  dataset,
  DRAFT_MODE_ROUTE,
  previewSecretId,
  projectId,
} from 'lib/sanity.api'
import { previewDocumentNode } from 'plugins/previewPane'
import { settingsPlugin, settingsStructure } from 'plugins/settings'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { previewUrl } from 'sanity-plugin-iframe-pane/preview-url'
import authorType from 'schemas/author'
import story from 'schemas/story';
import contentdm from 'schemas/contentdm';
import demographics from 'schemas/demographics';
import featuredLinks from 'schemas/featuredLinks';
import gallery from 'schemas/gallery';
import kaltura from 'schemas/kaltura';
import localSubjects from 'schemas/localSubjects';
import mainImage from 'schemas/mainImage';
import major from 'schemas/major';
import miamiEducation from 'schemas/miamiEducation';
import miamiEmployment from 'schemas/miamiEmployment';
import miamiProfile from 'schemas/miamiProfile';
import organization from 'schemas/organization';
import person from 'schemas/person';
import personName from 'schemas/personName';

import relatedLinks from 'schemas/relatedLinks';
import settingsType from 'schemas/settings'
import storyMetadata from 'schemas/storyMetadata';
import theme from 'schemas/theme';
import transcript from 'schemas/transcript';

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Next.js Blog with Sanity.io'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [settingsType, authorType, story, contentdm, demographics, featuredLinks, gallery, kaltura, localSubjects, mainImage, major, miamiEducation, miamiEmployment, miamiProfile, organization, person, personName, relatedLinks, storyMetadata, theme, transcript],
  },
  plugins: [
    deskTool({
      structure: settingsStructure(settingsType),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode(),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    settingsPlugin({ type: settingsType.name }),
    // Add the "Open preview" action
    previewUrl({
      base: DRAFT_MODE_ROUTE,
      urlSecretId: previewSecretId,
      matchTypes: [story.name, settingsType.name],
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
