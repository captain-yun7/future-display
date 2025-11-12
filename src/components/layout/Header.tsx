/**
 * Header 컴포넌트
 * 충북보건과학대학교 - 세계 제미실이
 */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { DISPLAY_MENU } from '@/lib/displayData';

interface HeaderProps {
  className?: string;
}

/**
 * 모바일 메뉴 아이콘 컴포넌트
 */
const MenuIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <motion.div
    className="w-6 h-6 flex flex-col justify-center items-center gap-1.5"
    animate={isOpen ? 'open' : 'closed'}
  >
    <motion.span
      className="block w-6 h-0.5 bg-current rounded-full"
      variants={{
        closed: { rotate: 0, y: 0 },
        open: { rotate: 45, y: 8 }
      }}
      transition={{ duration: 0.3 }}
    />
    <motion.span
      className="block w-6 h-0.5 bg-current rounded-full"
      variants={{
        closed: { opacity: 1 },
        open: { opacity: 0 }
      }}
      transition={{ duration: 0.3 }}
    />
    <motion.span
      className="block w-6 h-0.5 bg-current rounded-full"
      variants={{
        closed: { rotate: 0, y: 0 },
        open: { rotate: -45, y: -8 }
      }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
);

/**
 * 로고 컴포넌트
 */
const Logo: React.FC = () => (
  <Link
    href="/"
    className="flex items-center space-x-2 lg:space-x-3 group"
  >
    <motion.div
      className="flex flex-col leading-tight"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-sm lg:text-base font-bold text-white/70">
        충북보건과학대학교
      </span>
      <span className="text-xl lg:text-2xl font-black text-white group-hover:text-green transition-colors duration-300">
        세계 제미실이
      </span>
    </motion.div>
  </Link>
);

/**
 * 네비게이션 링크 컴포넌트
 */
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'relative px-4 py-2 text-base font-medium transition-colors duration-300 group',
        'hover:text-green',
        isActive ? 'text-green' : 'text-white',
        className
      )}
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 h-0.5 bg-green"
        initial={{ width: isActive ? '100%' : '0%' }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
};

/**
 * 데스크톱 네비게이션
 */
const DesktopNavigation: React.FC = () => (
  <nav className="hidden lg:flex items-center space-x-2">
    <NavLink href="/">홈</NavLink>
    {DISPLAY_MENU.map((item) => (
      <NavLink key={item.id} href={item.path}>
        {item.name}
      </NavLink>
    ))}
  </nav>
);

/**
 * 모바일 메뉴
 */
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.div
        className="fixed top-0 right-0 w-80 max-w-[90vw] h-full bg-black border-l-2 border-green/20 z-50 lg:hidden"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <Logo />
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-green transition-colors"
              aria-label="메뉴 닫기"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 py-8 overflow-y-auto">
            <div className="space-y-2 px-6">
              <NavLink href="/" onClick={onClose} className="block px-6 py-4">
                홈
              </NavLink>
              {DISPLAY_MENU.map((item) => (
                <NavLink
                  key={item.id}
                  href={item.path}
                  onClick={onClose}
                  className="block px-6 py-4"
                >
                  <div className="font-bold">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.fullName}</div>
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </motion.div>
    </>
  );
};

/**
 * Header 메인
 */
export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0.8, 0.98]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-30',
          'h-[57px] lg:h-[90px]',
          'border-b transition-all duration-300',
          isScrolled ? 'border-green/30 shadow-glow-green-sm' : 'border-gray-800/50',
          className
        )}
        style={{
          backgroundColor: `rgba(21, 21, 23, ${backgroundOpacity})`,
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="container max-w-container mx-auto h-full px-[15px] lg:px-8">
          <div className="flex items-center justify-between h-full">
            <Logo />
            <DesktopNavigation />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-green transition-colors"
              aria-label="메뉴 열기"
            >
              <MenuIcon isOpen={isMobileMenuOpen} />
            </button>
          </div>
        </div>
      </motion.header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <div className="h-[57px] lg:h-[90px]" />
    </>
  );
};

export default Header;
