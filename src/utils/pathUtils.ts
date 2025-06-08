/**
 * 이미지 경로를 GitHub Pages 배포에 맞게 조정하는 통합 함수입니다.
 * 기존의 getImagePath와 getNavigationImagePath를 통합합니다.
 */
export const getImagePath = (path: string, basePath: string = '/eeezeen/') => {
  // 이미 절대 경로인 경우 그대로 반환
  if (path.startsWith('/')) {
    return path;
  }
  
  // 빈 경로인 경우 그대로 반환
  if (!path || path.trim() === '') {
    return path;
  }
  
  // basePath를 포함한 절대 경로로 통일
  return `${basePath}${path}`;
};

/**
 * 네비게이션 아이콘용 이미지 경로를 반환합니다.
 * 기존 getNavigationImagePath의 대체 함수입니다.
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