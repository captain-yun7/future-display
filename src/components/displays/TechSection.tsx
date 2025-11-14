'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui';

interface TechSectionProps {
  title: string;
  items: string[];
  variant?: 'primary' | 'secondary' | 'accent';
}

export default function TechSection({
  title,
  items,
  variant = 'primary',
}: TechSectionProps) {
  const variantStyles = {
    primary: 'border-blue-200 bg-blue-50/50',
    secondary: 'border-gray-200 bg-gray-50',
    accent: 'border-red-200 bg-red-50/50',
  };

  const iconColors = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    accent: 'text-red-600',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`${variantStyles[variant]} border rounded-xl p-8`}>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        </div>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-start gap-3"
            >
              <span className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${iconColors[variant]}`} />
              <span className="text-gray-700 leading-relaxed">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
