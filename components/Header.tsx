'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ホーム', href: '/' },
    { label: '事業内容', href: '/#services' },
    { label: '強み', href: '/#strengths' },
    { label: '会社概要', href: '/company' },
    { label: 'お問い合わせ', href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0A1628]/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex flex-col">
              <span className="text-white text-sm tracking-[0.2em] font-light group-hover:text-[#C4A052] transition-colors">
                BIG FOREST
              </span>
              <span className="text-[#C4A052] text-[10px] tracking-[0.15em]">
                TRADING
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/80 hover:text-[#C4A052] text-sm tracking-wider transition-colors duration-300 link-underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/#contact"
              className="bg-[#C4A052] text-white px-6 py-2.5 text-sm tracking-wider hover:bg-[#D4B872] transition-all duration-300 inline-block"
            >
              お問い合わせ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            aria-label="メニュー"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#0A1628]/98 backdrop-blur-md transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-custom py-6">
          <div className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/80 hover:text-[#C4A052] text-base tracking-wider py-2 border-b border-white/10 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#C4A052] text-white px-6 py-3 text-center text-sm tracking-wider mt-4"
            >
              お問い合わせ
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
