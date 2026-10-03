import type { Metadata } from 'next'
import { Shell } from '@/components/Shell'

export const metadata: Metadata = { title: 'QamoosTech | قاموس تك' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Shell lang="ar">{children}</Shell>
}
