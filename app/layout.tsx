import './globals.css';

import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Space_Grotesk, Sora } from 'next/font/google';

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display'
});

const body = Sora({
  subsets: ['latin'],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: {
    default: 'Konexdrone',
    template: '%s | Konexdrone'
  },
  description: 'FPV racing, custom flight controllers, and indoor drone light shows.',
  metadataBase: new URL('https://konexdrone.com')
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const headerList = await headers();
  const locale = headerList.get('x-locale') ?? 'es';

  return (
    <html lang={locale} className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
