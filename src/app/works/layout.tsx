'use client';

import { useNavigation } from '../../components/LeftNavigation';
import { getResponsivePadding, getSectionClasses } from '../../utils/layoutUtils';

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isCollapsed, isMobile } = useNavigation();

  return (
    <div className="min-h-screen bg-black text-white">
      <div 
        className={getSectionClasses()}
        style={{
          ...getResponsivePadding(isCollapsed),
          ...(isMobile && {
            paddingTop: '8rem', // 고정된 헤더 높이만큼 상단 패딩 추가
            paddingLeft: '2rem', // 모바일에서 좌측 마진 줄임
            paddingRight: '2rem', // 모바일에서 우측 마진도 조정
          })
        }}
      >
        {children}
      </div>
    </div>
  );
} 