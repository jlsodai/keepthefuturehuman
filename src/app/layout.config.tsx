/* eslint-disable @next/next/no-img-element */
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { FileText, Home, Link } from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img width="24" src="/favicon.png" alt="Keep The Future Human Logo" />
        Keep The Future Human
      </>
    ),
    url: 'https://keepthefuturehuman.ai/',
  },
  links: [
    {
      text: 'Home',
      url: 'https://keepthefuturehuman.ai/',
      icon: <Home />
    },
    {
      text: 'Interactive Summary',
      url: 'https://interactive.keepthefuturehuman.ai/',
      icon: <Link />
    },
    {
      text: 'The Essay',
      url: '/docs',
      icon: <FileText />,
      active: 'nested-url',
    },
  ],
};
