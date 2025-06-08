export interface ProjectMenuItem {
  id: string;
  label: string;
  icon: string;
  url: string;
}

// 미디어 아이템 타입 정의
export interface MediaItem {
  type: 'image' | 'video';
  src: string;
}

export interface ProjectDetailData {
  projectName: string;
  year: string;
  subtitle: string;
  description: string;
  media: MediaItem[]; // images 배열을 media 배열로 변경
  tools: string[];
}

export interface ProjectMainData {
  id: string;
  title: string;
  thumbnail: string;
  video: string;
  image: string;
  category: string[];
  link: string;
}

// 통합 프로젝트 데이터 인터페이스
export interface ProjectData {
  // 메인 페이지용 데이터
  main: ProjectMainData;
  // 네비게이션용 데이터
  menu: ProjectMenuItem;
  // 상세 페이지용 데이터
  detail: ProjectDetailData;
} 