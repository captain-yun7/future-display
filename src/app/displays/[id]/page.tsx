/**
 * 디스플레이 상세 페이지
 * 동적 라우팅을 사용하여 모든 디스플레이 기술 정보 표시
 */

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Layout, Section } from '@/components/layout';
import { TechSection } from '@/components/displays';
import { getDisplayById, DISPLAY_TYPES } from '@/lib/displayData';

interface DisplayPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return DISPLAY_TYPES.map((display) => ({
    id: display.id,
  }));
}

export async function generateMetadata({ params }: DisplayPageProps) {
  const display = getDisplayById(params.id);

  if (!display) {
    return {
      title: '페이지를 찾을 수 없습니다',
    };
  }

  return {
    title: `${display.name} (${display.fullName}) - 차세대 디스플레이`,
    description: display.description,
  };
}

export default function DisplayPage({ params }: DisplayPageProps) {
  const display = getDisplayById(params.id);

  if (!display) {
    notFound();
  }

  return (
    <Layout>
      {/* Hero Section */}
      <Section background="primary" padding="xl" className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <Link
            href="/"
            className="inline-flex items-center text-green hover:text-green-light transition-colors duration-300 mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            홈으로 돌아가기
          </Link>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white">
            {display.name}
          </h1>
          <p className="text-2xl lg:text-3xl font-bold text-green">
            {display.fullName}
          </p>
          <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            {display.description}
          </p>
        </div>
      </Section>

      {/* 작동 원리 섹션 */}
      <Section background="secondary" padding="xl">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              작동 <span className="text-green">원리</span>
            </h2>
            <p className="text-lg text-gray-400">
              {display.name}가 어떻게 작동하는지 단계별로 알아보세요
            </p>
          </div>

          <TechSection
            title="기술 원리"
            items={display.principle}
            icon="⚡"
            variant="primary"
          />
        </div>
      </Section>

      {/* 제조 공정 섹션 */}
      <Section padding="xl">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              제조 <span className="text-green">공정</span>
            </h2>
            <p className="text-lg text-gray-400">
              {display.name} 디스플레이의 제조 과정을 살펴보세요
            </p>
          </div>

          <TechSection
            title="제조 단계"
            items={display.manufacturing}
            icon="🏭"
            variant="secondary"
          />
        </div>
      </Section>

      {/* 장단점 비교 섹션 */}
      <Section background="secondary" padding="xl">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              장단점 <span className="text-green">비교</span>
            </h2>
            <p className="text-lg text-gray-400">
              {display.name}의 강점과 약점을 파악하세요
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TechSection
              title="장점"
              items={display.advantages}
              icon="✅"
              variant="primary"
            />
            <TechSection
              title="단점"
              items={display.disadvantages}
              icon="⚠️"
              variant="accent"
            />
          </div>
        </div>
      </Section>

      {/* 활용 사례 섹션 */}
      <Section padding="xl">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              활용 <span className="text-green">사례</span>
            </h2>
            <p className="text-lg text-gray-400">
              {display.name}가 실제로 사용되는 분야를 알아보세요
            </p>
          </div>

          <TechSection
            title="주요 응용 분야"
            items={display.applications}
            icon="🎯"
            variant="secondary"
          />
        </div>
      </Section>

      {/* 다른 디스플레이 보기 */}
      <Section background="secondary" padding="xl">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black text-white">
            다른 <span className="text-green">디스플레이</span> 보기
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {DISPLAY_TYPES.filter((d) => d.id !== display.id).map((d) => (
              <Link
                key={d.id}
                href={`/displays/${d.id}`}
                className="px-6 py-3 bg-black-light border-2 border-gray-800 hover:border-green text-white hover:text-green rounded-lg font-bold transition-all duration-300 hover:shadow-glow-green-sm"
              >
                {d.name}
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
}
