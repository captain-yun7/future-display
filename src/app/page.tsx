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
      <Section background="primary" padding="none">
        <div className="relative h-[600px] lg:h-[700px]">
          <Image
            src="/sample.webp"
            alt="차세대 디스플레이"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent">
            <div className="container max-w-container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center">
              <div className="max-w-3xl space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight">
                  차세대 <span className="text-green">디스플레이</span> 기술
                </h1>
                <p className="text-lg lg:text-2xl text-white/90 leading-relaxed">
                  CRT부터 MicroLED까지, 디스플레이 기술의 원리와 제조 공정을 탐구합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Display Types Grid */}
      <Section background="secondary" padding="xl" id="displays">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white">
            디스플레이 <span className="text-green">기술 종류</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
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
              index={index}
            />
          ))}
        </div>
      </Section>
    </Layout>
  );
}
