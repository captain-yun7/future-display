'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui';

interface DisplayCardProps {
  id: string;
  name: string;
  fullName: string;
  description: string;
  image?: string;
  index: number;
}

export default function DisplayCard({
  id,
  name,
  fullName,
  description,
  image,
  index,
}: DisplayCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/displays/${id}`}>
        <Card
          variant="elevated"
          className="h-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-glow-green overflow-hidden"
        >
          {image && (
            <div className="relative h-48 w-full">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
          <div className="p-8">
            <h3 className="mb-2 text-4xl font-bold text-primary">{name}</h3>
            <p className="mb-4 text-sm text-white-off">{fullName}</p>
            <p className="text-white/80 leading-relaxed line-clamp-3">
              {description}
            </p>
            <div className="mt-6 flex items-center text-primary">
              <span className="text-sm font-semibold">자세히 보기</span>
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
