/* eslint-disable @next/next/no-img-element */
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

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
        <img width="24" src="https://keepthefuturehuman.ai/wp-content/uploads/2025/03/KTFH-Logo-Dark.png" alt="Keep The Future Human Logo" />
        Keep The Future Human
      </>
    ),
  },
  links: [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'Interactive Summary',
      url: 'https://interactive.keepthefuturehuman.ai/',
    },
    {
      text: 'The Essay',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};
