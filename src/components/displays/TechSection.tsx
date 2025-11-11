'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui';

interface TechSectionProps {
  title: string;
  items: string[];
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
}

export default function TechSection({
  title,
  items,
  icon,
  variant = 'primary',
}: TechSectionProps) {
  const variantStyles = {
    primary: 'border-primary/30 bg-primary/5',
    secondary: 'border-blue-500/30 bg-blue-500/5',
    accent: 'border-purple-500/30 bg-purple-500/5',
  };

  const iconColors = {
    primary: 'text-primary',
    secondary: 'text-blue-500',
    accent: 'text-purple-500',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card variant="elevated" className={`${variantStyles[variant]} border-2`}>
        <div className="p-8">
          <div className="mb-6 flex items-center gap-3">
            {icon && (
              <div className={`${iconColors[variant]} text-2xl`}>{icon}</div>
            )}
            <h3 className="text-2xl font-bold text-white">{title}</h3>
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
                <span className="text-white/90 leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </Card>
    </motion.div>
  );
}
