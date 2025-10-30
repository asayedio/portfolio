import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { profile } from '@/data/profile'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${profile.name} - ${profile.title}`,
  description: profile.bio,
  keywords: [
    'Ahmed Sayed',
    'Backend Engineer',
    'Software Engineer',
    'C#',
    'ASP.NET Core',
    '.NET',
    'Portfolio',
    'Oman',
],
  authors: [{ name: profile.name, url: profile.social.linkedin }],
  creator: profile.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://asayedio.github.io/',
    title: `${profile.name} - ${profile.title}`,
    description: profile.bio,
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: '/og-image.jpg',
      width: 1200,
        height: 630,
        alt: `${profile.name} - ${profile.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  title: `${profile.name} - ${profile.title}`,
    description: profile.bio,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
   'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
    type="application/ld+json"
          dangerouslySetInnerHTML={{
      __html: JSON.stringify({
 '@context': 'https://schema.org',
        '@type': 'Person',
         name: profile.name,
              jobTitle: profile.title,
    email: profile.email,
    telephone: profile.phone,
     address: {
         '@type': 'PostalAddress',
  addressLocality: profile.location,
      },
           sameAs: [
       profile.social.linkedin,
  profile.social.github,
      profile.social.leetcode,
         ],
       url: 'https://asayedio.github.io/',
      description: profile.bio,
         }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
   {children}
   </ThemeProvider>
      </body>
    </html>
  )
}
