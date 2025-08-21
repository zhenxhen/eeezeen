import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
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
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  
  // 모바일/태블릿 감지
  useEffect(() => {
    const checkDevice = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        setResponsiveGridClass(width <= 768 ? 'grid-cols-1' : width <= 1024 ? 'grid-cols-2' : 'grid-cols-3');
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  // 비디오 자동 재생 설정
  useEffect(() => {
    const handleResize = () => {
      const isTabletOrMobile = window.innerWidth <= 1024;
      
      // 모든 비디오 요소에 대해 설정 적용
      Object.values(videoRefs.current).forEach((video) => {
        if (video) {
          if (isTabletOrMobile) {
            video.play().catch(() => {
              // 자동 재생이 실패할 경우 무시
            });
            video.style.opacity = '1';
          } else {
            video.pause();
            video.style.opacity = '0';
          }
        }
      });
    };

    // 초기 설정
    handleResize();
    
    // 리사이즈 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
              if (project.video && window.innerWidth > 1024) {
                const videoElement = e.currentTarget.querySelector('video') as HTMLVideoElement;
                onVideoHover(videoElement, true);
              }
            }}
            onMouseLeave={(e) => {
              if (project.video && window.innerWidth > 1024) {
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* 비디오 */}
                <video
                  ref={(el) => {
                    videoRefs.current[project.id] = el;
                  }}
                  src={project.video}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                  muted
                  playsInline
                  preload="none"
                  loop
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
