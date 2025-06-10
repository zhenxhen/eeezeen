'use client';

import { useNavigation } from './LeftNavigation';

interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  const { isCollapsed, isMobile } = useNavigation();

  return (
    <div 
      className="main-content"
      style={{
        // JavaScript로만 세밀한 조정 (CSS가 기본값 처리)
        ...(typeof window !== 'undefined' && !isMobile && {
          marginLeft: isCollapsed ? 0 : 260,
        })
      }}
    >
      {children}
    </div>
  );
} 