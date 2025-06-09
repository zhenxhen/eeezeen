'use client';

import ProjectLayout from '../../../components/ProjectLayout';
import { allProjects } from '../../../data';

export default function ReminderPage() {
  const projectData = allProjects['reminder'];
  
  if (!projectData) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <ProjectLayout
      projectName={projectData.detail.projectName}
      year={projectData.detail.year}
      subtitle={projectData.detail.subtitle}
      description={projectData.detail.description}
      media={projectData.detail.media}
      media2={projectData.detail.media2}
      media3={projectData.detail.media3}
      reviews={projectData.detail.reviews}
      tools={projectData.detail.tools}
      icon={projectData.menu.icon}
    />
  );
} 