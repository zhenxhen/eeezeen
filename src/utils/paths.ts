export const getAssetPath = (path: string): string => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path}`;
};

export const getImagePath = (imagePath: string): string => {
  // 이미 절대 경로인 경우 그대로 반환
  if (imagePath.startsWith('http') || imagePath.startsWith('//')) {
    return imagePath;
  }
  
  // basePath를 추가하여 경로 생성
  return getAssetPath(imagePath);
}; 