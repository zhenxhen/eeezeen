// 프로덕션 환경에서 GitHub Pages basePath 적용
const isProduction = process.env.NODE_ENV === 'production';
const BASE_PATH = isProduction ? '/eeezeen' : '';

export const getAssetPath = (path: string): string => {
  return `${BASE_PATH}${path}`;
};

export const getImagePath = (imagePath: string): string => {
  // 이미 절대 경로인 경우 그대로 반환
  if (imagePath.startsWith('http') || imagePath.startsWith('//')) {
    return imagePath;
  }
  
  // basePath를 추가하여 경로 생성
  return getAssetPath(imagePath);
}; 