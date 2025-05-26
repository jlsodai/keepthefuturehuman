import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Keep The Future Human',
  description: "Humanity is on the brink of developing artificial general intelligence that exceeds our own. It's time to close the gates on AGI and superintelligence... before we lose control of our future.",
  openGraph: {
    title: 'Keep The Future Human',
    description: "Humanity is on the brink of developing artificial general intelligence that exceeds our own. It's time to close the gates on AGI and superintelligence... before we lose control of our future.",
    images: [
      {
        url: 'https://keepthefuturehuman.ai/wp-content/uploads/2025/03/KTFH-Homepage-Hero-Image.webp',
        width: 1920, // Replace with actual width if different
        height: 1080, // Replace with actual height if different
        alt: 'KTFH Homepage Hero Image',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keep The Future Human',
    description: "Humanity is on the brink of developing artificial general intelligence that exceeds our own. It's time to close the gates on AGI and superintelligence... before we lose control of our future.",
    images: [
      {
        url: 'https://keepthefuturehuman.ai/wp-content/uploads/2025/03/KTFH-Homepage-Hero-Image.webp',
        alt: 'KTFH Homepage Hero Image',
      },
    ],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
        {!isLocalhost && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=G-BDMRBJGSV5`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-BDMRBJGSV5');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
