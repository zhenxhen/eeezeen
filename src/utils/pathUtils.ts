/**
 * 이미지 경로를 처리하는 통합 함수입니다.
 */
export const getImagePath = (path: string) => {
  // 이미 절대 경로인 경우 그대로 반환
  if (path.startsWith('/')) {
    return path;
  }
  
  // 빈 경로인 경우 그대로 반환
  if (!path || path.trim() === '') {
    return path;
  }
  
  // 상대 경로를 절대 경로로 변환
  return `/${path}`;
};

/**
 * 네비게이션 아이콘용 이미지 경로를 반환합니다.
 */
export const getNavigationImagePath = (path: string) => {
  return getImagePath(path);
};

/**
 * 프로젝트 이미지용 경로를 반환합니다.
 * 기존 ProjectLayout의 getImagePath 대체 함수입니다.
 */
export const getProjectImagePath = (path: string) => {
  return getImagePath(path);
}; 