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

// 리뷰 아이템 타입 정의
export interface ReviewItem {
  url: string;
  title?: string;
  creator?: string;
  thumbnail?: string;
}

// 링크 아이템 타입 정의
export interface LinkItem {
  url: string;
  text: string;
}

export interface ProjectDetailData {
  projectName: string;
  year: string;
  subtitle: string;
  description: string;
  media: MediaItem[]; // images 배열을 media 배열로 변경
  media2?: MediaItem[]; // 두 번째 미디어 배열 (옵셔널)
  media3?: MediaItem[]; // 세 번째 미디어 배열 (가로 긴 이미지용, 옵셔널)
  reviews?: ReviewItem[]; // YouTube 리뷰 배열 (옵셔널)
  link?: LinkItem; // 외부 링크 (옵셔널)
  media4?: MediaItem[]; // 네 번째 미디어 배열 (1열 가로 긴 이미지/영상용, 최대 3개, 옵셔널)
  tools: string[];
}

export interface ProjectMainData {
  id: string;
  title: string;
  thumbnail: string;
  video?: string;
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