import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = process.env.GITHUB_PAGES === 'true'
  ? 'https://tylnzgr.github.io/taylan-ozgur-portfolio/'
  : 'https://taylan-ozgur-portfolio.shrewd-haven-4337.chatgpt.site/';
const socialImage = new URL('og.png', siteUrl).toString();
const favicon = new URL('favicon.svg', siteUrl).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Taylan Özgür Taşkırdı | Frontend Engineer',
  description: 'Taylan Özgür Taşkırdı is a frontend engineer building intuitive interfaces for complex products with React, Next.js, and TypeScript.',
  alternates: { canonical: siteUrl },
  icons: { icon: favicon },
  openGraph: {
    title: 'Taylan Özgür Taşkırdı | Frontend Engineer',
    description: 'Frontend engineer building intuitive interfaces for complex products.',
    type: 'website',
    url: siteUrl,
    images: [{ url: socialImage, width: 1200, height: 630, alt: 'Taylan Özgür Taşkırdı — Frontend Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taylan Özgür Taşkırdı | Frontend Engineer',
    description: 'Frontend engineer building intuitive interfaces for complex products.',
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "try{if(localStorage.getItem('portfolio-theme')==='dark')document.documentElement.classList.add('theme-dark')}catch(e){}" }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
