# Rocket AI FE Assignment

👉 [배포 페이지 바로가기](https://rocket-ai-fe-assignment.vercel.app/)

## 프로젝트 개요

- Next.js (Pages Router) 기반의 프론트엔드 프로젝트
- Zustand를 활용한 전역 상태 관리
- 더미 데이터를 직접 구조화하여 사용
- `/api/saju` API를 통해 클라이언트에서 데이터를 요청하고 화면에 렌더링
- 최소 320px, 최대 448px 너비의 화면 크기에 맞춰 반응형 구현

## 주요 기능

- API를 통해 사용자 이름과 사주 데이터 fetch
- Zustand 전역 스토어에 사용자 이름과 사주 데이터 저장
- 컴포넌트에서 전역 스토어의 데이터를 직접 조회하여 렌더링
- 사주 데이터를 기반으로 동적인 테이블 UI 구성
- 데이터 로딩 중일 때 중앙에 스피너 표시

## 주요 사용 기술

- Next.js (Pages Router)
- TypeScript
- Zustand
- Tailwind CSS

## 디렉토리 구조

```bash
/rocket-ai-fe-assignment
├── components/           # UI 컴포넌트
│   ├── home/
│   └── common/
├── data/                 # 정적 데이터
├── lib/                  # API 호출 등 유틸 함수
│   └── fetchSaju.ts
├── pages/                # 페이지 라우팅
├── public/               # 정적 리소스 관리
├── store/                # 전역 상태 관리
│   └── useSajuStore.ts
└── types/                # 타입 정의
```

## 설치 및 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```
