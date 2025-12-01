'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1020]/95 backdrop-blur-sm border-b border-white/10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#00D9FF] to-[#0088FF] bg-clip-text text-transparent">
              Astrology
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-white/80 hover:text-[#00D9FF] transition-colors duration-300 font-medium"
            >
              ホーム
            </Link>
            <Link 
              href="/about" 
              className="text-white/80 hover:text-[#00D9FF] transition-colors duration-300 font-medium"
            >
              会社概要
            </Link>
            <Link 
              href="/services" 
              className="text-white/80 hover:text-[#00D9FF] transition-colors duration-300 font-medium"
            >
              サービス
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-2.5 bg-gradient-to-r from-[#06C755] to-[#05B04A] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#06C755]/50 transition-all duration-300"
            >
              お問い合わせ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="メニュー"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-white/10">
            <Link 
              href="/" 
              className="block px-4 py-2 text-white/80 hover:text-[#00D9FF] hover:bg-white/5 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ホーム
            </Link>
            <Link 
              href="/about" 
              className="block px-4 py-2 text-white/80 hover:text-[#00D9FF] hover:bg-white/5 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              会社概要
            </Link>
            <Link 
              href="/services" 
              className="block px-4 py-2 text-white/80 hover:text-[#00D9FF] hover:bg-white/5 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              サービス
            </Link>
            <Link 
              href="/contact" 
              className="block mx-4 px-6 py-2.5 bg-gradient-to-r from-[#06C755] to-[#05B04A] text-white text-center rounded-full font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              お問い合わせ
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
