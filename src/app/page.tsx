'use client';

import { useNavigation } from '../components/LeftNavigation';
import { useVideoHover } from '../hooks/useVideoHover';
import { useFilter, projectFilterFunction } from '../hooks/useFilter';
import { useGridView } from '../hooks/useGridView';
import { useProjectData } from '../hooks/useProjectData';
import Header from '../components/sections/Header';
import HeroSection from '../components/sections/HeroSection';
import WorksSection from '../components/sections/WorksSection';

export default function Home() {
  const { isCollapsed } = useNavigation();
  
  // 커스텀 훅들 사용
  const { projects, filters, views } = useProjectData();
  const { filter, setFilter, filteredItems: filteredProjects } = useFilter(
    projects, 
    projectFilterFunction
  );
  const { view, setView, getGridClass } = useGridView();
  
  // 비디오 호버 훅 사용
  const { handleVideoHover } = useVideoHover([projects, filter, view]);

  return (
    <div className="min-h-screen bg-black text-white">
      <div>
        <Header isCollapsed={isCollapsed} />
        
        <HeroSection isCollapsed={isCollapsed} />
        
        <WorksSection
          isCollapsed={isCollapsed}
          filters={filters}
          views={views}
          filter={filter}
          view={view}
          filteredProjects={filteredProjects}
          getGridClass={getGridClass}
          onFilterChange={setFilter}
          onViewChange={setView}
          onVideoHover={handleVideoHover}
        />
      </div>
    </div>
  );
}