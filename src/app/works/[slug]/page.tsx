'use client';

import { notFound } from 'next/navigation';
import { use, useEffect } from 'react';
import ProjectLayout from '../../../components/ProjectLayout';
import { projectDetailData, getProjectIcon } from '../../../data/projects';

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const projectData = projectDetailData[slug];

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

  // 존재하지 않는 프로젝트면 404 페이지로 이동
  if (!projectData) {
    notFound();
  }

  // 아이콘을 자동으로 매칭
  const projectIcon = getProjectIcon(slug);

  return (
    <ProjectLayout
      projectName={projectData.projectName}
      year={projectData.year}
      subtitle={projectData.subtitle}
      description={projectData.description}
      images={projectData.images}
      tools={projectData.tools}
      icon={projectIcon}
    />
  );
} 