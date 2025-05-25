import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import * as lucideIcons from 'lucide-react';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  function Icon({ name, style, strokeWidth = 1.5, ...props }: { name: keyof typeof lucideIcons, style?: React.CSSProperties, strokeWidth?: number } & React.ComponentProps<'svg'>) {
    const LucideIcon = lucideIcons[name];
    if (!LucideIcon || typeof LucideIcon !== 'object' || !('render' in LucideIcon)) return null;
    const Component = LucideIcon as unknown as React.ComponentType<any>;
    return <Component style={{ display: 'inline-block', ...style }} strokeWidth={strokeWidth} {...props} />;
  }

  function Caption({ children, className = '', ...props }: { children: React.ReactNode, className?: string } & React.HTMLAttributes<HTMLSpanElement>) {
    return (
      <span
        className={`block text-center italic my-2 text-sm text-gray-500 ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }

  return {
    ...defaultMdxComponents,
    Icon,
    Caption,
    ...components,
  };
}
