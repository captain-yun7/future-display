# 차세대 디스플레이 학습 웹사이트

충북보건과학대학교 - 세계 제미실이

## 프로젝트 소개

디스플레이 기술의 역사와 발전을 학습하는 교육용 웹사이트입니다.
브라운관(CRT)부터 최신 MicroLED까지, 6가지 디스플레이 기술의 작동 원리, 제조 공정, 장단점, 활용 사례를 자세히 설명합니다.

## 디스플레이 종류

1. **CRT (Cathode Ray Tube)** - 브라운관
2. **LCD (Liquid Crystal Display)** - 액정 디스플레이
3. **LED (Light Emitting Diode Display)** - 발광 다이오드
4. **OLED (Organic Light-Emitting Diodes)** - 유기 발광 다이오드
5. **QLED (Quantum Dot LED)** - 퀀텀닷
6. **MicroLED** - 마이크로 LED

## 기술 스택

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (애니메이션)

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 프로젝트 구조

```
src/
├── app/
│   ├── page.tsx              # 메인 페이지
│   ├── displays/
│   │   └── [id]/page.tsx     # 디스플레이 상세 페이지 (동적 라우팅)
│   └── layout.tsx
├── components/
│   ├── displays/             # 디스플레이 관련 컴포넌트
│   │   ├── DisplayCard.tsx
│   │   └── TechSection.tsx
│   └── layout/               # 레이아웃 컴포넌트
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Layout.tsx
├── lib/
│   └── displayData.ts        # 디스플레이 데이터
└── types/
    └── index.ts
```

## 라이선스

교육용 프로젝트
