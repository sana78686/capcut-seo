import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { buildConfig } from 'payload'
import sharp from 'sharp'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default buildConfig({
  admin: {
    meta: {
      titleSuffix: ' | CapCut SEO CMS',
    },
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        { name: 'email', type: 'email', required: true, unique: true },
        { name: 'name', type: 'text' },
      ],
    },
    {
      slug: 'pages',
      admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'locale', 'slug', 'updatedAt'],
      },
      access: {
        read: () => true,
      },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'slug', type: 'text', required: true, unique: true },
        {
          name: 'locale',
          type: 'select',
          required: true,
          options: [
            { label: 'English', value: 'en' },
            { label: 'Arabic', value: 'ar' },
            { label: 'Spanish', value: 'es' },
          ],
        },
        {
          type: 'group',
          name: 'seo',
          label: 'SEO',
          fields: [
            { name: 'metaTitle', type: 'text', label: 'Meta Title', admin: { description: 'Recommended 50–60 chars' } },
            { name: 'metaDescription', type: 'textarea', label: 'Meta Description', admin: { description: 'Recommended 150–160 chars' } },
            { name: 'ogImage', type: 'upload', relationTo: 'media', label: 'OG Image' },
            { name: 'twitterCard', type: 'select', options: ['summary', 'summary_large_image'], defaultValue: 'summary_large_image' },
          ],
        },
      ],
    },
    {
      slug: 'media',
      access: { read: () => true },
      upload: {
        staticDir: path.join(dirname, 'media'),
        imageSizes: [
          { name: 'og', width: 1200, height: 630 },
          { name: 'thumbnail', width: 400, height: 300 },
        ],
      },
      fields: [
        { name: 'alt', type: 'text' },
      ],
    },
  ],
  globals: [
    {
      slug: 'site-seo',
      label: 'Site SEO',
      fields: [
        { name: 'defaultMetaTitle', type: 'text', label: 'Default Meta Title' },
        { name: 'defaultMetaDescription', type: 'textarea', label: 'Default Meta Description' },
        { name: 'ogImage', type: 'upload', relationTo: 'media', label: 'Default OG Image' },
      ],
    },
  ],
  secret: process.env.PAYLOAD_SECRET || 'change-me-in-production',
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || 'file:./payload.sqlite',
    },
  }),
  sharp,
})
