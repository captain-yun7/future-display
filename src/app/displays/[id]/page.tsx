/**
 * 디스플레이 상세 페이지
 * 동적 라우팅을 사용하여 모든 디스플레이 기술 정보 표시
 */

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
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
      <Section background="primary" padding="xl">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900">
            {display.name}
          </h1>
          <p className="text-2xl lg:text-3xl font-bold text-blue-600">
            {display.fullName}
          </p>
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {display.description}
          </p>

          {/* 역사 섹션 */}
          {display.history && (
            <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-gray-200 text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {display.name}의 역사
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {display.history}
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* 이미지 갤러리 섹션 */}
      {display.images && display.images.length > 0 && (
        <Section background="secondary" padding="xl">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                상세 <span className="text-blue-600">이미지</span>
              </h2>
              <p className="text-lg text-gray-600">
                {display.name} 디스플레이의 구조와 원리를 시각적으로 살펴보세요
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {display.images.map((imagePath, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-xl overflow-hidden border border-gray-200 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <Image
                    src={imagePath}
                    alt={`${display.name} - 이미지 ${index + 1}`}
                    fill
                    className="object-contain bg-white"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* 작동 원리 섹션 */}
      <Section padding="xl">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              작동 <span className="text-blue-600">원리</span>
            </h2>
            <p className="text-lg text-gray-600">
              {display.name}가 어떻게 작동하는지 단계별로 알아보세요
            </p>
          </div>

          <TechSection
            title="기술 원리"
            items={display.principle}
            variant="primary"
          />
        </div>
      </Section>

      {/* 제조 공정 섹션 */}
      <Section background="secondary" padding="xl">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              제조 <span className="text-blue-600">공정</span>
            </h2>
            <p className="text-lg text-gray-600">
              {display.name} 디스플레이의 제조 과정을 살펴보세요
            </p>
          </div>

          <TechSection
            title="제조 단계"
            items={display.manufacturing}
            variant="secondary"
          />
        </div>
      </Section>

      {/* 장단점 비교 섹션 */}
      <Section padding="xl">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              장단점 <span className="text-blue-600">비교</span>
            </h2>
            <p className="text-lg text-gray-600">
              {display.name}의 강점과 약점을 파악하세요
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TechSection
              title="장점"
              items={display.advantages}
              variant="primary"
            />
            <TechSection
              title="단점"
              items={display.disadvantages}
              variant="accent"
            />
          </div>
        </div>
      </Section>

      {/* 활용 사례 섹션 */}
      <Section background="secondary" padding="xl">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              활용 <span className="text-blue-600">사례</span>
            </h2>
            <p className="text-lg text-gray-600">
              {display.name}가 실제로 사용되는 분야를 알아보세요
            </p>
          </div>

          <TechSection
            title="주요 응용 분야"
            items={display.applications}
            variant="secondary"
          />
        </div>
      </Section>

      {/* 재미있는 사실 섹션 */}
      {display.funFacts && display.funFacts.length > 0 && (
        <Section padding="xl">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                추가 <span className="text-blue-600">정보</span>
              </h2>
              <p className="text-lg text-gray-600">
                {display.name}에 관한 흥미로운 사실
              </p>
            </div>

            <div className="space-y-6">
              {display.funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="p-8 bg-gray-50 border border-gray-200 rounded-xl"
                >
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {fact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}
    </Layout>
  );
}
