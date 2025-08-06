import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wexel - Advanced Workshop CRM Software | Job Card & Customer Management',
  description: 'Transform your workshop with Wexel\'s powerful CRM software. Streamline job cards, manage customers, leverage AI automations, and integrate email, SMS & invoicing. Try free today.',
  keywords: 'workshop CRM, job card management, customer management, automotive CRM, workshop software, AI automation, invoice integration, SMS marketing',
  authors: [{ name: 'Wexel' }],
  creator: 'Wexel',
  publisher: 'Wexel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://wexel.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Wexel - Advanced Workshop CRM Software',
    description: 'Transform your workshop with AI-powered CRM software. Manage job cards, customers, and automate your workflow.',
    url: 'https://wexel.com',
    siteName: 'Wexel',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wexel Workshop CRM Software',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wexel - Advanced Workshop CRM Software',
    description: 'Transform your workshop with AI-powered CRM software. Manage job cards, customers, and automate your workflow.',
    images: ['/twitter-image.jpg'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Wexel',
              description: 'Advanced Workshop CRM Software for job card and customer management',
              url: 'https://wexel.com',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                priceCurrency: 'USD',
                price: '0',
                description: 'Free trial available'
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}