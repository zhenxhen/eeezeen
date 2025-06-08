import { getSectionClasses, getResponsivePadding } from '../../utils/layoutUtils';
import { type GridViewType } from '../../hooks/useGridView';
import { type ProjectMainData } from '../../data';
import FilterControls from './FilterControls';
import ProjectGrid from './ProjectGrid';

interface WorksSectionProps {
  isCollapsed: boolean;
  filters: string[];
  views: string[];
  filter: string;
  view: GridViewType;
  filteredProjects: ProjectMainData[];
  getGridClass: () => string;
  onFilterChange: (filter: string) => void;
  onViewChange: (view: GridViewType) => void;
  onVideoHover: (videoElement: HTMLVideoElement | null, isHovering: boolean) => void;
}

/**
 * 작품 섹션 컴포넌트
 * 필터 컨트롤과 프로젝트 그리드를 포함합니다.
 */
export default function WorksSection({
  isCollapsed,
  filters,
  views,
  filter,
  view,
  filteredProjects,
  getGridClass,
  onFilterChange,
  onViewChange,
  onVideoHover
}: WorksSectionProps) {
  return (
    <section 
      className={getSectionClasses()}
      style={getResponsivePadding(isCollapsed)}
    >
      <h3 className="font-normal mb-12">&lt;<span className="text-blue">Works</span>&gt;</h3>
      
      <FilterControls
        filters={filters}
        views={views}
        filter={filter}
        view={view}
        onFilterChange={onFilterChange}
        onViewChange={onViewChange}
      />

      <ProjectGrid
        projects={filteredProjects}
        gridClass={getGridClass()}
        view={view}
        filter={filter}
        onVideoHover={onVideoHover}
      />
    </section>
  );
} 