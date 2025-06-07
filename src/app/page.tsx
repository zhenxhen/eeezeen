'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useNavigation } from '../components/LeftNavigation';
import { getMainPageProjects } from '../data/projects';

export default function Home() {
  const [filter, setFilter] = useState('All');
  const [view, setView] = useState('3x');
  const { isCollapsed } = useNavigation();

  const filters = ['All', 'AI', 'UI', 'Product', 'Researches', 'Movies', 'Labs'];
  const views = ['3x', '2x'];

  // 통합된 프로젝트 데이터 사용
  const projects = getMainPageProjects() || [];
  
  // 디버깅 로그 추가
  console.log('Total projects:', projects.length);
  console.log('Projects data:', projects);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => {
        if (Array.isArray(project.category)) {
          return project.category.includes(filter);
        }
        return project.category === filter;
      });

  console.log('Filtered projects:', filteredProjects.length);
  console.log('Current filter:', filter);
  console.log('Current view:', view);

  // view에 따른 그리드 컬럼 클래스 결정
  const getGridClass = () => {
    switch(view) {
      case '2x': return 'grid-cols-2';
      case '3x': return 'grid-cols-3';
      default: return 'grid-cols-3';
    }
  };

  // 비디오 호버 이벤트 핸들러
  const handleVideoHover = (videoElement: HTMLVideoElement | null, isHovering: boolean) => {
    if (!videoElement) return;
    
    const container = videoElement.parentElement;
    const imageElement = container?.querySelector('img');
    
    if (isHovering) {
      videoElement.currentTime = 0; // 처음부터 재생
      videoElement.play().catch(console.error);
      videoElement.style.opacity = '1';
      if (imageElement) imageElement.style.opacity = '0';
    } else {
      videoElement.pause();
      videoElement.currentTime = 0; // 정지 후 처음 위치로 리셋
      videoElement.style.opacity = '0';
      if (imageElement) imageElement.style.opacity = '1';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content Area */}
      <div>
        {/* Header */}
        <header 
          className="flex justify-between header-align pr-12 pl-6 py-8"
          style={{
            paddingLeft: isCollapsed ? '6rem' : '1.5rem',
            transition: 'padding-left 0.3s ease'
          }}
        >
          <div className="header-left">
            <h1 className="font-normal">eeezeen</h1>
            <h2 className="text-gray-500 italic" style={{ marginTop: '-5px' }}>Jinwon Lee</h2>
          </div>
          <nav className="flex space-x-12">
            <a href="#" className="nav-link">Instagram</a>
            <a href="#" className="nav-link">Twitter</a>
            <a href="#" className="nav-link">LinkedIn</a>
            <a href="#" className="nav-link">Youtube</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section 
          className="pr-12 pl-6 py-16"
          style={{
            paddingLeft: isCollapsed ? '6rem' : '1.5rem',
            transition: 'padding-left 0.3s ease'
          }}
        >
          <h2 className="font-normal mb-16 text-pink">&quot;Humanizing Technology&quot;</h2>
          <div className="max-w-xl">
            <p className="mb-6 leading-relaxed">
              I&apos;m Jinwon Lee (<a target="_blank" href="https://www.instagram.com/eeezeen/" className="text-blue" style={{ textDecoration: 'underline', margin: '0px' }}>@eeezeen</a>), An AI Design engineer Technology follows where life leads.<br />
              Envisioning a future where computers reflect the essence of humanity.<br />
              Based in Seoul and London.
            </p>
          </div>
        </section>

        {/* Works Section */}
        <section 
          className="pr-12 pl-6 py-8"
          style={{
            paddingLeft: isCollapsed ? '6rem' : '1.5rem',
            transition: 'padding-left 0.3s ease'
          }}
        >
          <h3 className="font-normal mb-12">&lt;<span className="text-blue">Works</span>&gt;</h3>
          
          {/* Filter and View Controls */}
          <div className="filter-view-container">
            {/* Filter Line */}
            <div className="flex items-start">
              <span className="text-blue mr-4 filter-label">filter :</span>
              <div>
                {filters.map((filterItem, index) => (
                  <span key={filterItem}>
                    <span
                      onClick={() => setFilter(filterItem)}
                      className={`cursor-pointer filter-item ${filter === filterItem ? 'active' : ''}`}
                    >
                      {filterItem}
                    </span>
                    {index < filters.length - 1 && <span className="mr-1 filter-comma">, </span>}
                  </span>
                ))}
              </div>
            </div>
            
            {/* View Line */}
            <div className="flex items-start">
              <span className="text-blue mr-2 filter-label">view :</span>
              <div>
                {views.map((viewItem, index) => (
                  <span key={viewItem}>
                    <span
                      onClick={() => setView(viewItem)}
                      className={`cursor-pointer filter-item ${view === viewItem ? 'active' : ''}`}
                    >
                      {viewItem}
                    </span>
                    {index < views.length - 1 && <span className="filter-comma">,</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div 
            className={`grid ${getGridClass()} gap-8`}
            key={`${view}-${filter}`}
          >
            {(filteredProjects || []).map((project) => (
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
                      handleVideoHover(videoElement, true);
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (project.video) {
                      const videoElement = e.currentTarget.querySelector('video') as HTMLVideoElement;
                      handleVideoHover(videoElement, false);
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
                <div 
                  className="flex justify-between items-center"
                >
                  <span className="text-gray-500">{project.id}</span>
                  <span className="text-white">{project.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}