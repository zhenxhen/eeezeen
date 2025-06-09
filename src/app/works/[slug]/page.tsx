import { notFound } from 'next/navigation';
import ProjectLayout from '../../../components/ProjectLayout';
import { projectDetailData, getProjectIcon, allProjects } from '../../../data';
import ProjectPageClient from './ProjectPageClient';

// 정적 사이트 생성을 위한 파라미터 목록
export function generateStaticParams() {
  return Object.keys(allProjects).map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projectData = projectDetailData[slug];

  // 존재하지 않는 프로젝트면 404 페이지로 이동
  if (!projectData) {
    notFound();
  }

  // 아이콘을 자동으로 매칭
  const projectIcon = getProjectIcon(slug);

  return (
    <ProjectPageClient slug={slug}>
      <ProjectLayout
        projectName={projectData.projectName}
        year={projectData.year}
        subtitle={projectData.subtitle}
        description={projectData.description}
        media={projectData.media}
        media2={projectData.media2}
        media3={projectData.media3}
        reviews={projectData.reviews}
        link={projectData.link}
        tools={projectData.tools}
        icon={projectIcon}
      />
    </ProjectPageClient>
  );
} 