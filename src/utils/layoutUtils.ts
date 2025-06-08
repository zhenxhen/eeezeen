/**
 * 네비게이션 상태에 따른 반응형 패딩 스타일을 반환합니다.
 * 프로젝트 전체에서 동일하게 사용되는 레이아웃 로직을 통합합니다.
 */
export const getResponsivePadding = (isCollapsed: boolean) => ({
  paddingLeft: isCollapsed ? '6rem' : '1.5rem',
  transition: 'padding-left 0.3s ease'
});

/**
 * 섹션별 기본 클래스명을 반환합니다.
 */
export const getSectionClasses = (additionalClasses?: string) => {
  const baseClasses = 'pr-12 pl-6 py-8';
  return additionalClasses ? `${baseClasses} ${additionalClasses}` : baseClasses;
};

/**
 * 헤더용 반응형 스타일을 반환합니다.
 */
export const getHeaderResponsiveStyle = (isCollapsed: boolean) => ({
  paddingLeft: isCollapsed ? '6rem' : '1.5rem',
  transition: 'padding-left 0.3s ease'
}); 