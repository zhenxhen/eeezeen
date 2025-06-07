'use client';

import { useEffect } from 'react';

interface ProjectPageClientProps {
  slug: string;
  children: React.ReactNode;
}

export default function ProjectPageClient({ slug, children }: ProjectPageClientProps) {
  // 페이지 로드 시 스크롤을 맨 위로 초기화
  useEffect(() => {
    // MainContent 컨테이너를 찾아서 스크롤 초기화
    const mainContent = document.querySelector('.flex-1.overflow-auto');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
    
    // 혹시 모를 window 스크롤도 초기화
    window.scrollTo(0, 0);
  }, [slug]);

  return <>{children}</>;
} 