'use client';

import { useNavigation } from './LeftNavigation';
import { useEffect, useState } from 'react';

interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  const { isCollapsed, isMobile } = useNavigation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div 
      className="main-content"
      style={{
        // 클라이언트에서만 동적 스타일 적용
        ...(isClient && !isMobile && {
          marginLeft: isCollapsed ? 0 : 260,
        })
      }}
    >
      {children}
    </div>
  );
} 