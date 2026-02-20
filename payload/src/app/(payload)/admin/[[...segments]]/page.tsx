import { RootPage } from '@payloadcms/next/views'
import config from '@payload-config'
import React from 'react'

export default function AdminPage({ params }: { params: Promise<{ segments: string[] }> }) {
  const { segments } = React.use(params)
  return <RootPage config={config} segment={segments?.join('/') ?? ''} />
}
