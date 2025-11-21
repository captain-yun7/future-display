'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TechItem } from '@/lib/displayData';

interface TechSectionProps {
  title: string;
  items: TechItem[] | string[];
  variant?: 'primary' | 'secondary' | 'accent';
}

export default function TechSection({
  title,
  items,
  variant = 'primary',
}: TechSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const variantStyles = {
    primary: 'border-blue-200 bg-blue-50/50',
    secondary: 'border-gray-200 bg-gray-50',
    accent: 'border-red-200 bg-red-50/50',
  };

  const tabStyles = {
    primary: {
      active: 'bg-blue-600 text-white',
      inactive: 'bg-white text-gray-700 hover:bg-blue-100 border border-gray-200',
    },
    secondary: {
      active: 'bg-gray-700 text-white',
      inactive: 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200',
    },
    accent: {
      active: 'bg-red-600 text-white',
      inactive: 'bg-white text-gray-700 hover:bg-red-100 border border-gray-200',
    },
  };

  const iconColors = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    accent: 'text-red-600',
  };

  // Check if items are TechItem objects or strings
  const isTechItemArray = items.length > 0 && typeof items[0] === 'object';

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

        {isTechItemArray ? (
          // Tab style for TechItem objects
          <div className="space-y-6">
            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2">
              {(items as TechItem[]).map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedIndex === index
                      ? tabStyles[variant].active
                      : tabStyles[variant].inactive
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Content area */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-white rounded-lg border border-gray-200 min-h-[120px]"
            >
              <p className="text-gray-700 leading-relaxed text-lg">
                {(items as TechItem[])[selectedIndex]?.description}
              </p>
            </motion.div>
          </div>
        ) : (
          // Simple list style for strings
          <ul className="space-y-3">
            {(items as string[]).map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start gap-3"
              >
                <span className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${iconColors[variant]}`} style={{ backgroundColor: 'currentColor' }} />
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
