/**
 * Footer 컴포넌트
 * 충북보건과학대학교 - 세계 제미실이
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        'bg-black border-t-2 border-green/20 relative overflow-hidden',
        className
      )}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green rounded-full blur-3xl" />
      </div>

      <div className="container max-w-container mx-auto px-[15px] lg:px-8 relative z-10">
        <div className="py-8">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © {currentYear} <span className="text-green font-semibold">충북보건과학대학교 - 세계 제미실이</span>
              </p>
              <p className="text-xs text-gray-600 mt-1">
                차세대 디스플레이 학습 웹사이트
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-green text-black rounded-full shadow-glow-green hover:shadow-glow-green-lg transition-all duration-300 hover:scale-110 z-20"
        aria-label="맨 위로 이동"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
