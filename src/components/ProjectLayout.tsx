'use client';

import Link from 'next/link';
import Image from 'next/image';

interface ProjectLayoutProps {
  projectName: string;
  year: string;
  subtitle: string;
  description: string;
  images: string[];
  tools: string[];
  icon?: string;
}

// 이미지 경로를 GitHub Pages 배포에 맞게 조정하는 함수
const getImagePath = (path: string) => {
  // 이미 절대 경로인 경우 그대로 반환
  if (path.startsWith('/')) {
    return path;
  }
  
  // 상대 경로인 경우 basePath를 포함한 절대 경로로 변환
  // 작품 상세 페이지는 /works/[slug]/ 경로에 있으므로 ../../를 추가
  return `../../${path}`;
};

export default function ProjectLayout({
  projectName,
  year,
  subtitle,
  description,
  images,
  tools,
  icon = '📋'
}: ProjectLayoutProps) {
  return (
    <div className="project-page">
      {/* Navigation Header */}
      <div className="project-navigation">
        <Link href="/" style={{ marginRight: '10px', textDecoration: 'underline' }}>
          works
        </Link>
        <span className="text-white mr-4">&gt;</span>
        <span className="text-white inline-flex items-start" style={{ gap: '10px',}}>
          {icon && typeof icon === 'string' && icon.includes('/') ? (
            <Image
              src={getImagePath(icon)}
              alt={projectName}
              width={16}
              height={16}
              className="object-contain"
            />
          ) : (
            <span>{icon}</span>
          )}
          <span>{projectName}</span>
        </span>
      </div>

      {/* Project Images */}
      <div className="project-images-grid">
        {images.map((image, index) => (
          <div key={`${projectName}-image-${index}`} className="project-image-container">
            <Image
              src={getImagePath(image)}
              alt={`${projectName} ${index + 1}`}
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Project Info */}
      <div className="mb-8">
        <h1 className="project-title">
          {projectName.toUpperCase()} ({year})
        </h1>
        <blockquote className="project-subtitle">
          &quot;{subtitle}&quot;
        </blockquote>
        <div className="project-description">
          {description}
        </div>
      </div>

      {/* Tools Section */}
      <div className="project-tools">
        <h3>&lt;Tools&gt;</h3>
        <div className="project-tools-list">
          {tools.map((tool, index) => (
            <div key={`${projectName}-tool-${index}`}>
              {tool}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 