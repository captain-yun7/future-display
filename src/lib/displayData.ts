/**
 * 차세대 디스플레이 기술 데이터
 */

export interface TechItem {
  title: string;
  description: string;
}

export interface DisplayTech {
  id: string;
  name: string;
  fullName: string;
  description: string;
  history?: string;
  principle: TechItem[];
  manufacturing: TechItem[];
  advantages: string[];
  disadvantages: string[];
  applications: string[];
  funFacts?: string[];
  image?: string;
  images?: string[];
}

export const DISPLAY_TYPES: DisplayTech[] = [
  {
    id: 'crt',
    name: 'CRT',
    fullName: 'Cathode Ray Tube (음극선관)',
    description:
      '브라운관(CRT)은 Cathode Ray Tube(음극선관)의 약자로, 예전 TV나 컴퓨터 모니터에서 사용되던 두꺼운 디스플레이입니다. 한때 저렴한 가격과 뛰어난 해상도 덕분에 디스플레이의 대표 기술이었지만, 디스플레이가 점점 얇고 가벼워지는 평판형으로 발전하면서 현재는 거의 사용되지 않습니다.',
    history:
      '1897년, 독일의 과학자 카를 페르디난트 브라운(Karl Ferdinand Braun)이 전자(음극선)를 진공관 안에서 쏘면 형광체가 빛을 내는 현상을 발견하면서 이 기술이 개발되었고, 그의 이름을 따서 "브라운관"이라고 부르게 되었습니다.',
    image: '/requirement1/9d083dfb-c074-4a98-b3a6-c9b4bad247f9.webp',
    images: [
      '/displays/crt/image1.BMP',
      '/displays/crt/image2.BMP',
      '/displays/crt/image3.BMP',
    ],
    principle: [
      { title: '전자총(Electron Gun)', description: '전자를 만들어 쏘는 장치로, 뒤쪽에 위치해 있으며 전원이 인가되면 음극(Cathode)에서 전자가 방출됩니다' },
      { title: '편향코일(Deflection Coil)', description: '코일에 흐르는 전류가 만들어내는 자기장으로 전자빔의 방향을 위·아래·좌·우로 휘게하여 화면 전체를 스캔합니다' },
      { title: '관/깔때기(Tube/Funnel)', description: '진공 상태의 유리관으로, 전자가 공기와 부딪히지 않고 형광면까지 이동하도록 돕습니다' },
      { title: '형광면(Fluorescent Screen)', description: '전자빔이 도달하는 면으로, 형광체가 발라져 있으며, 전자가 충돌하면 빛을 냅니다' },
      { title: '섀도우 마스크(Shadow Mask)', description: '형광면 바로 앞에 있는 작은 구멍이 촘촘히 뚫려 있는 얇은 금속판으로, 전자빔이 정확히 맞는 색의 형광체에 닿도록 안내합니다' },
    ],
    manufacturing: [
      { title: '유리 부품 제작', description: '브라운관은 앞면 화면 부분(패널), 깔때기 모양의 중간 부분(퍼널), 가늘고 긴 목 부분(넥), 총 3부분으로 나뉘고, 각각의 유리 부품을 제작한 뒤 하나로 붙입니다' },
      { title: '형광체 도포', description: '패널의 안쪽 면에 전자가 부딪혀 빛을 내는 형광체(Phosphor)를 얇게 칠합니다. 그 위에는 얇은 알루미늄 막을 입혀 빛이 뒤로 새지 않고 화면 앞으로 반사되도록 합니다' },
      { title: '섀도우 마스크 / 애퍼처 그릴 부착', description: '형광면 뒤에는 전자빔이 정확히 각 색의 형광체에 도달하도록 돕는 섀도우 마스크(금속판) 또는 애퍼처 그릴을 고정합니다. 이 부품은 전자의 통로를 안내하는 필터 역할을 하며, 색이 섞이는 것을 방지해 선명한 색상 표현을 가능하게 합니다' },
      { title: '전자총 조립', description: '넥 부분에는 전자총을 조립합니다. 전자총은 히터(Heater), 음극(Cathode), 여러 단계의 전극(Electrode)으로 구성되어 있으며, 전자를 방출하고, 모으고, 가속시켜 화면으로 쏘는 역할입니다' },
      { title: '진공 형성', description: '유리관 내부의 공기를 완전히 제거하여 고진공 상태를 만듭니다. 진공 상태가 되어야 전자빔이 공기 분자에 부딪히지 않고 원활히 이동할 수 있습니다' },
      { title: '게터 증착', description: '진공 형성이 끝난 후, 관 내부에 아주 미세한 잔류 가스가 남아있을 가능성을 제거하기 위해 게터(Getter)라는 물질을 관 안쪽에 증착합니다. 게터는 남은 가스를 흡착해 장시간 안정적인 진공 유지를 돕습니다' },
      { title: '편향코일 부착 및 최종 테스트', description: '완성된 진공관 외부에 편향 코일을 부착합니다. 편향 코일은 전자빔의 방향을 제어해 화면 전체를 스캔하도록 합니다. 마지막으로 전기적 특성, 색상, 해상도, 화면 품질 등을 테스트하고 완성품으로 출하합니다' },
    ],
    advantages: [
      '색 재현력 우수 - 형광체를 직접 자극하기에 선명하고 자연스러운 색감을 구현합니다',
      '명암비(Contrast Ratio) 높음 - 완전한 검정색을 표현할 수 있어 화질의 깊이감이 뛰어납니다',
      '응답 속도 빠름 - 전자빔이 즉시 반응하기에 잔상이 거의 없습니다',
      '시야각이 넓음 - 어느 방향에서 봐도 밝기나 색 왜곡이 적습니다',
    ],
    disadvantages: [
      '부피와 무게가 큼 - 진공관 구조로 인해 두껍고 무겁습니다',
      '전력 소모가 많음 - 전자빔 가속을 위해 고전압이 필요합니다',
      '발열 및 방사선 발생 - 작동 시 열과 소량의 X선이 발생합니다',
      '대형화·슬림화 한계 - 구조적 제약으로 얇은 평면 디스플레이 구현이 어렵습니다',
    ],
    applications: [
      '과거 텔레비전',
      '과거 컴퓨터 모니터',
      '오실로스코프',
      '레트로 게임용 디스플레이',
      '일부 전문 방송 장비',
    ],
    funFacts: [
      '자석과 브라운관 - 자석을 브라운관 TV나 모니터 근처에 가져다 대면 화면의 색이 뒤틀리거나 무지개처럼 퍼지는 현상이 나타납니다. 이것은 브라운관 내부에서 쏘는 전자빔이 형광체에 정확히 닿아야 하는데, 자석의 자기장이 이 경로를 방해해 전자가 엉뚱한 곳으로 가버리기 때문입니다.',
      '브라운관과 정전기 - 브라운관 화면을 손으로 만지면 유독 정전기가 많이 발생합니다. 이는 브라운관 안에 있는 전자총이 수천~수만 볼트(V)의 고전압으로 작동하기 때문입니다. 이렇게 가속된 엄청난 수의 전자가 화면의 유리면에 계속 부딪히며 다량의 음전하를 축적하게 되고, 이 축적된 전하가 화면을 만졌을 때 찌릿하게 느끼는 정전기입니다. 그래서 브라운관 모니터에는 먼지가 많이 달라붙고, 플러그를 뽑아도 몇 주 동안 남아있을 수 있습니다.',
    ],
  },
  {
    id: 'lcd',
    name: 'LCD',
    fullName: 'Liquid Crystal Display',
    description:
      '액정 디스플레이는 액정의 광학적 성질을 이용하여 빛을 제어하는 평판 디스플레이입니다. 백라이트에서 나온 빛이 액정을 통과하면서 이미지를 만들어냅니다.',
    image: '/requirement1/82c99311-8d99-427c-b8c9-69470d77ebab.webp',
    images: [
      '/displays/lcd/image1.bmp',
      '/displays/lcd/image2.GIF',
    ],
    principle: [
      { title: '백라이트 유닛', description: '백라이트 유닛에서 빛이 발생하여 디스플레이 전체에 균일한 광원을 제공합니다' },
      { title: '편광 필터 통과', description: '편광 필터를 통과하여 빛의 진동 방향을 일정하게 제어합니다' },
      { title: '액정 셀 배열', description: '액정 셀이 전기 신호에 따라 배열을 변경하여 빛의 경로를 조절합니다' },
      { title: '빛의 투과량 조절', description: '변경된 액정 배열에 따라 빛의 투과량이 조절됩니다' },
      { title: '컬러 필터', description: '컬러 필터를 통해 RGB 색상이 구현됩니다' },
      { title: '최종 이미지 출력', description: '두 번째 편광 필터를 거쳐 최종 이미지가 출력됩니다' },
    ],
    manufacturing: [
      { title: 'TFT 기판 제작', description: 'TFT(박막 트랜지스터) 기판을 제작하여 각 픽셀을 개별적으로 제어할 수 있는 스위칭 소자를 형성합니다' },
      { title: '컬러 필터 기판 제작', description: '컬러 필터 기판을 제작하여 RGB 색상을 구현할 수 있는 필터층을 형성합니다' },
      { title: '액정 주입 및 셀 조립', description: '두 기판 사이에 액정을 주입하고 셀을 조립합니다' },
      { title: '편광판 부착', description: '상하단에 편광판을 부착하여 빛의 편광 방향을 제어합니다' },
      { title: '백라이트 유닛 조립', description: '백라이트 유닛을 조립하여 광원을 제공합니다' },
      { title: '최종 검사 및 패키징', description: '최종 검사를 수행하고 패키징하여 제품을 완성합니다' },
    ],
    advantages: [
      '저렴한 생산 비용',
      '안정적이고 성숙한 기술',
      '밝은 화면 구현 가능',
      '긴 수명',
      '다양한 크기로 제작 가능',
    ],
    disadvantages: [
      '시야각 제한',
      '낮은 명암비',
      '느린 응답 속도',
      '완전한 검은색 구현 어려움',
      '백라이트로 인한 전력 소모',
    ],
    applications: [
      '모니터 및 노트북 디스플레이',
      '텔레비전',
      '스마트폰 (저가형)',
      '산업용 디스플레이',
      '계기판',
    ],
  },
  {
    id: 'led',
    name: 'LED',
    fullName: 'Light Emitting Diode Display',
    description:
      'LED 디스플레이는 발광 다이오드를 직접 사용하여 빛을 발생시키는 디스플레이입니다. 각 픽셀이 독립적으로 빛을 내어 밝고 선명한 화면을 만듭니다.',
    image: '/requirement1/26275649-cc0c-444a-9ec9-fbb96057d680.webp',
    images: [
      '/displays/led/image1.bmp',
      '/displays/led/image2.bmp',
    ],
    principle: [
      { title: '반도체 PN 접합', description: '반도체 PN 접합에 전류를 인가하여 발광 현상을 유도합니다' },
      { title: '전자-정공 재결합', description: '전자와 정공의 재결합으로 빛이 발생합니다' },
      { title: 'RGB LED 조합', description: 'RGB LED의 조합으로 다양한 색상을 구현합니다' },
      { title: '독립적 밝기 제어', description: '각 LED의 밝기를 독립적으로 제어합니다' },
      { title: 'PWM 밝기 조절', description: 'PWM(펄스 폭 변조) 방식으로 밝기를 조절합니다' },
      { title: '매트릭스 구조', description: '매트릭스 구조로 이미지를 형성합니다' },
    ],
    manufacturing: [
      { title: '웨이퍼 성장', description: 'MOCVD 공정을 통해 웨이퍼를 성장시킵니다' },
      { title: '칩 제조 및 다이싱', description: '칩을 제조하고 다이싱하여 개별 LED 칩으로 분리합니다' },
      { title: 'LED 칩 패키징', description: 'LED 칩을 패키징하여 보호하고 방열 구조를 형성합니다' },
      { title: 'SMD 공정', description: 'SMD(표면 실장) 공정을 통해 LED를 기판에 실장합니다' },
      { title: 'PCB 기판 실장', description: 'PCB 기판에 LED를 실장하여 회로를 구성합니다' },
      { title: '광학 렌즈 부착 및 최종 조립', description: '광학 렌즈를 부착하고 최종 조립을 완료합니다' },
    ],
    advantages: [
      '매우 높은 밝기',
      '우수한 내구성',
      '긴 수명 (50,000시간 이상)',
      '낮은 전력 소모',
      '뛰어난 색재현율',
      '다양한 크기로 확장 가능',
    ],
    disadvantages: [
      '픽셀 피치가 큰 경우 해상도 제한',
      '고해상도 제품의 높은 가격',
      '열 관리 필요',
      '가까운 거리에서 픽셀이 보일 수 있음',
    ],
    applications: [
      '대형 옥외 광고판',
      '스포츠 경기장 전광판',
      '무대 배경 스크린',
      '건물 외벽 미디어 파사드',
      '교통 정보 표시판',
    ],
  },
  {
    id: 'oled',
    name: 'OLED',
    fullName: 'Organic Light-Emitting Diodes',
    description:
      '유기 발광 다이오드는 유기 화합물을 사용하여 빛을 발생시키는 자체 발광 디스플레이입니다. 백라이트 없이 각 픽셀이 독립적으로 빛을 내어 완벽한 검은색과 높은 명암비를 구현합니다.',
    image: '/requirement1/f05ec1d6-3e61-4752-aeeb-5ee4b744aae6.webp',
    images: [
      '/displays/oled/image1.bmp',
      '/displays/oled/image2.bmp',
      '/displays/oled/image3.bmp',
    ],
    principle: [
      { title: '양극 정공 주입', description: '양극(애노드)에서 정공을 주입합니다' },
      { title: '음극 전자 주입', description: '음극(캐소드)에서 전자를 주입합니다' },
      { title: '전자-정공 재결합', description: '유기 발광층에서 전자와 정공이 재결합합니다' },
      { title: '빛 발생', description: '여기된 분자가 안정 상태로 돌아가며 빛이 발생합니다' },
      { title: 'RGB 색상 구현', description: 'RGB 유기 재료의 조합으로 색상을 구현합니다' },
      { title: '픽셀 독립 제어', description: '각 픽셀의 독립적 점등/소등을 제어합니다' },
    ],
    manufacturing: [
      { title: '기판 세척 및 전처리', description: '기판을 세척하고 전처리하여 표면을 준비합니다' },
      { title: '투명 전극 증착', description: '투명 전극(ITO)을 증착하여 양극을 형성합니다' },
      { title: '정공 주입층 형성', description: '정공 주입층을 형성하여 정공의 이동을 원활하게 합니다' },
      { title: '유기 발광층 증착', description: '유기 발광층을 RGB로 증착하여 색상을 구현합니다' },
      { title: '전자 주입층 및 음극 증착', description: '전자 주입층과 음극을 증착하여 전자 공급 경로를 형성합니다' },
      { title: '봉지 공정', description: '봉지(Encapsulation) 공정을 통해 외부 습기와 산소로부터 보호합니다' },
      { title: '검사 및 패널 절단', description: '검사를 수행하고 패널을 절단하여 완성합니다' },
    ],
    advantages: [
      '완벽한 블랙 레벨 (픽셀 개별 소등)',
      '무한대에 가까운 명암비',
      '빠른 응답 속도 (0.1ms 이하)',
      '넓은 시야각 (거의 180도)',
      '얇고 가벼운 구조',
      '플렉서블 디스플레이 구현 가능',
      '우수한 색재현율',
    ],
    disadvantages: [
      '번인(Burn-in) 현상 가능성',
      '유기 재료의 수명 제한 (특히 블루)',
      '높은 제조 비용',
      'LCD 대비 낮은 최대 밝기',
      '습기에 민감하여 봉지 공정 중요',
    ],
    applications: [
      '프리미엄 스마트폰',
      '고급 텔레비전',
      '웨어러블 기기 (스마트워치)',
      'VR/AR 헤드셋',
      '자동차 계기판 및 인포테인먼트',
      '플렉서블 디스플레이',
    ],
  },
  {
    id: 'qled',
    name: 'QLED',
    fullName: 'Quantum Dot Light Emitting Diode',
    description:
      '퀀텀닷 디스플레이는 나노 크기의 반도체 결정(퀀텀닷)을 사용하여 색순도가 매우 높은 빛을 만들어내는 디스플레이입니다. LCD 백라이트에 퀀텀닷 필름을 적용하여 색재현율을 극대적으로 향상시킵니다.',
    image: '/requirement1/d77c9ee1-4e9c-464c-bd34-23bf666b1338.webp',
    principle: [
      { title: '청색 빛 발생', description: 'LED 백라이트에서 청색 빛이 발생합니다' },
      { title: '퀀텀닷 필름 조사', description: '퀀텀닷 필름에 청색 빛을 조사합니다' },
      { title: '파장별 빛 방출', description: '퀀텀닷 크기에 따라 특정 파장의 빛이 방출됩니다' },
      { title: '작은 퀀텀닷', description: '작은 퀀텀닷에서 청색 빛이 방출됩니다' },
      { title: '중간 크기 퀀텀닷', description: '중간 크기 퀀텀닷에서 녹색 빛이 방출됩니다' },
      { title: '큰 퀀텀닷', description: '큰 퀀텀닷에서 적색 빛이 방출됩니다' },
      { title: 'RGB 색상 구현', description: 'RGB 빛의 조합으로 순수한 색상을 구현합니다' },
      { title: '빛의 양 조절', description: '액정을 통해 빛의 양을 조절합니다' },
    ],
    manufacturing: [
      { title: '퀀텀닷 나노입자 합성', description: '퀀텀닷 나노입자를 합성하여 원하는 크기와 특성을 가진 입자를 제조합니다' },
      { title: '퀀텀닷 필름 제작', description: '퀀텀닷 필름을 제작하여 색변환층을 형성합니다' },
      { title: 'LED 백라이트 유닛 조립', description: 'LED 백라이트 유닛을 조립합니다' },
      { title: '퀀텀닷 필름 통합', description: '퀀텀닷 필름을 백라이트에 통합하여 색변환 기능을 부여합니다' },
      { title: 'LCD 제조 공정', description: '기존 LCD 제조 공정(TFT, 컬러 필터)을 수행합니다' },
      { title: '최종 조립 및 캘리브레이션', description: '최종 조립과 캘리브레이션을 수행하여 제품을 완성합니다' },
    ],
    advantages: [
      '뛰어난 색재현율 (DCI-P3 90% 이상)',
      '높은 밝기 (1000 nits 이상)',
      '긴 수명 (번인 현상 없음)',
      '넓은 색역',
      'OLED 대비 저렴한 가격',
      '다양한 크기로 제작 용이',
    ],
    disadvantages: [
      'LCD 기반이므로 완전한 블랙 구현 어려움',
      'OLED보다 낮은 명암비',
      'OLED보다 두꺼운 구조',
      '백라이트로 인한 전력 소모',
      '시야각 제한 (LCD 대비 개선되었지만 OLED보다 좁음)',
    ],
    applications: [
      '프리미엄 텔레비전',
      '고급 모니터 (게이밍, 전문가용)',
      '디지털 사이니지',
      '의료용 디스플레이',
      '상업용 대형 디스플레이',
    ],
  },
  {
    id: 'microled',
    name: 'MicroLED',
    fullName: 'Micro Light Emitting Diode',
    description:
      'MicroLED는 마이크로미터 크기의 초소형 LED를 픽셀로 사용하는 차세대 디스플레이 기술입니다. 자체 발광 방식으로 OLED의 장점을 가지면서도 더 높은 밝기와 긴 수명을 자랑합니다.',
    image: '/requirement1/ebfc854f-ab95-4c63-83dd-48687156b11a.webp',
    images: [
      '/displays/microled/image1.bmp',
    ],
    principle: [
      { title: '초소형 LED 픽셀', description: '각 픽셀이 독립적인 초소형 LED로 구성됩니다' },
      { title: '무기 반도체 발광', description: '무기 반도체(GaN 등)에서 직접 빛이 발생합니다' },
      { title: 'RGB 서브픽셀 배열', description: 'RGB LED 칩을 서브픽셀로 배열합니다' },
      { title: '독립적 점등/소등', description: '각 LED가 독립적으로 점등/소등됩니다' },
      { title: '전류 제어 밝기 조절', description: '전류 제어를 통해 밝기를 조절합니다' },
      { title: '매트릭스 구조', description: '매트릭스 구조로 고해상도를 구현합니다' },
    ],
    manufacturing: [
      { title: 'LED 웨이퍼 성장 및 가공', description: 'LED 웨이퍼를 성장시키고 가공합니다' },
      { title: '초소형 LED 칩 제작', description: '수십 마이크로미터 크기의 초소형 LED 칩을 제작합니다' },
      { title: '매스 트랜스퍼', description: '매스 트랜스퍼 기술로 LED 칩을 이동시킵니다' },
      { title: 'TFT 백플레인 전사', description: 'TFT 백플레인에 LED를 전사합니다' },
      { title: '전극 연결 및 회로 형성', description: '전극을 연결하고 회로를 형성합니다' },
      { title: '검사 및 수율 최적화', description: '검사를 수행하고 수율을 최적화합니다' },
      { title: '보호층 형성 및 패키징', description: '보호층을 형성하고 패키징하여 완성합니다' },
    ],
    advantages: [
      '매우 높은 밝기 (5000 nits 이상)',
      '완벽한 블랙 레벨',
      '무한대에 가까운 명암비',
      '매우 긴 수명 (100,000시간 이상)',
      '번인 현상 없음',
      '빠른 응답 속도',
      '낮은 전력 소모',
      '넓은 색역과 색재현율',
      '모듈형 설계로 대형 디스플레이 제작 용이',
    ],
    disadvantages: [
      '매우 높은 제조 비용',
      '대량 전사(Mass Transfer) 기술의 어려움',
      '낮은 수율',
      '아직 상용화 초기 단계',
      '소형 디스플레이 제작의 기술적 난이도',
    ],
    applications: [
      '프리미엄 대형 TV (110인치 이상)',
      '실내 대형 전광판',
      '고급 스마트워치',
      'AR/VR 디스플레이',
      '자동차 헤드업 디스플레이',
      '웨어러블 기기',
      '프리미엄 스마트폰 (미래)',
    ],
  },
];

export const DISPLAY_MENU = DISPLAY_TYPES.map((display) => ({
  id: display.id,
  name: display.name,
  fullName: display.fullName,
  path: `/displays/${display.id}`,
}));

export const getDisplayById = (id: string): DisplayTech | undefined => {
  return DISPLAY_TYPES.find((display) => display.id === id);
};
