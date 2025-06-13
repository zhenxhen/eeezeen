import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useNavigation } from '../LeftNavigation';
import { type ProjectMainData } from '../../data';

interface ProjectGridProps {
  projects: ProjectMainData[];
  gridClass: string;
  view: string;
  filter: string;
  onVideoHover: (videoElement: HTMLVideoElement | null, isHovering: boolean) => void;
}

/**
 * 프로젝트 그리드 컴포넌트
 * 프로젝트 목록을 그리드 형태로 표시합니다.
 */
export default function ProjectGrid({
  projects,
  gridClass,
  view,
  filter,
  onVideoHover
}: ProjectGridProps) {
  const { isMobile } = useNavigation();
  const [responsiveGridClass, setResponsiveGridClass] = useState('grid-cols-3');
  
  // 모바일/태블릿에서만 반응형 그리드 클래스 결정
  useEffect(() => {
    if (isMobile) {
      const updateGridClass = () => {
        if (typeof window !== 'undefined') {
          const width = window.innerWidth;
          if (width <= 768) {
            setResponsiveGridClass('grid-cols-1'); // 모바일: 1단
          } else if (width <= 1024) {
            setResponsiveGridClass('grid-cols-2'); // 태블릿: 2단
          }
        }
      };

      updateGridClass();
      window.addEventListener('resize', updateGridClass);
      
      return () => {
        window.removeEventListener('resize', updateGridClass);
      };
    }
  }, [isMobile]);

  // PC에서는 props의 gridClass 사용, 모바일에서는 반응형 클래스 사용
  const finalGridClass = isMobile ? responsiveGridClass : gridClass;

  return (
    <div 
      className={`grid ${finalGridClass} gap-8`}
      key={`${view}-${filter}`}
    >
      {(projects || []).map((project: ProjectMainData) => (
        <Link
          key={project.id}
          href={project.link}
          className="group cursor-pointer hover:scale-105 transition-transform duration-200"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div 
            className="aspect-square bg-gray-900 rounded-lg overflow-hidden mb-4 relative project-media-container"
            onMouseEnter={(e) => {
              if (project.video) {
                const videoElement = e.currentTarget.querySelector('video') as HTMLVideoElement;
                onVideoHover(videoElement, true);
              }
            }}
            onMouseLeave={(e) => {
              if (project.video) {
                const videoElement = e.currentTarget.querySelector('video') as HTMLVideoElement;
                onVideoHover(videoElement, false);
              }
            }}
          >
            {project.thumbnail && project.video ? (
              <>
                {/* 썸네일 이미지 */}
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
                {/* 호버 시 비디오 */}
                <video
                  src={project.video}
                  className="absolute inset-0 w-full h-full object-cover opacity-0"
                  muted
                  playsInline
                  preload="metadata"
                />
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <span className="text-gray-500">Project Image</span>
                )}
              </div>
            )}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">{project.id}</span>
            <span className="text-white">{project.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
