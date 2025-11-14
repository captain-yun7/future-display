/**
 * 차세대 디스플레이 학습 웹사이트 - 홈페이지
 * 충북보건과학대학교 - 세계 제미실이
 */

import Image from 'next/image';
import { Layout, Section } from '@/components/layout';
import { DisplayCard } from '@/components/displays';
import { DISPLAY_TYPES } from '@/lib/displayData';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section with sample.webp */}
      <Section background="primary" padding="xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
              세계 제미실이
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              차세대 디스플레이 기술의 원리와 제조 공정을 탐구합니다
            </p>
          </div>

          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/sample.webp"
              alt="차세대 디스플레이"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Section>

      {/* Display Types Grid */}
      <Section background="secondary" padding="xl" id="displays">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900">
            디스플레이 <span className="text-blue-600">기술 종류</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            각 디스플레이 기술의 작동 원리와 특성을 알아보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DISPLAY_TYPES.map((display, index) => (
            <DisplayCard
              key={display.id}
              id={display.id}
              name={display.name}
              fullName={display.fullName}
              description={display.description}
              image={display.image}
              index={index}
            />
          ))}
        </div>
      </Section>
    </Layout>
  );
}
