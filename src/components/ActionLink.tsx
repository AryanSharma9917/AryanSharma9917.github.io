import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

export function ActionLink({ href, children, primary = false }: { href: string; children: ReactNode; primary?: boolean }) {
  const external = !href.startsWith('#') && !href.startsWith('mailto:');
  return <a className={primary ? 'button primary' : 'button'} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
    {children}<ArrowUpRight size={16} aria-hidden="true" />
  </a>;
}
