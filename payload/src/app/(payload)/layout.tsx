import config from '@payload-config'
import '@payloadcms/next/css'
import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'
import './custom.scss'

export default function PayloadLayout({ children }: { children: React.ReactNode }) {
  return <RootLayout config={config}>{children}</RootLayout>
}
