'use client';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Header() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  return (
    <Navbar className="fixed top-0 left-0 right-0 z-50 border-b-1 border-black border-opacity-20">
      <NavbarBrand>
        <Link href="/">
          <AcmeLogo />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link
            color="black"
            className={cn('hover:text-[#ff8cb8] text-lg', isActive('/cv') && 'text-[#ff8cb8]')}
            href="/cv"
          >
            CV
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="black"
            className={cn('hover:text-[#ff8cb8] text-lg', isActive('/about') && 'text-[#ff8cb8]')}
            href="/about"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="black"
            className={cn('hover:text-[#ff8cb8] text-lg', isActive('/contact') && 'text-[#ff8cb8]')}
            href="/contact"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
