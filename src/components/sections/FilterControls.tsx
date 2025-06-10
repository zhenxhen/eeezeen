import { type GridViewType } from '../../hooks/useGridView';
import { useNavigation } from '../LeftNavigation';

interface FilterControlsProps {
  filters: string[];
  views: string[];
  filter: string;
  view: GridViewType;
  onFilterChange: (filter: string) => void;
  onViewChange: (view: GridViewType) => void;
}

/**
 * 필터 선택 컨트롤 컴포넌트
 * 프로젝트 필터링 옵션을 제공합니다.
 */
export default function FilterControls({
  filters,
  views,
  filter,
  view,
  onFilterChange,
  onViewChange
}: FilterControlsProps) {
  const { isMobile } = useNavigation();

  return (
    <div className="filter-view-container">
      {/* Filter Line */}
      <div className="flex items-start">
        <span className="text-blue mr-4 filter-label">filter :</span>
        <div>
          {filters.map((filterItem, index) => (
            <span key={filterItem}>
              <span
                onClick={() => onFilterChange(filterItem)}
                className={`cursor-pointer filter-item ${filter === filterItem ? 'active' : ''}`}
              >
                {filterItem}
              </span>
              {index < filters.length - 1 && <span className="mr-1 filter-comma">, </span>}
            </span>
          ))}
        </div>
      </div>
      
      {/* View Line - PC에서만 표시 */}
      {!isMobile && (
        <div className="flex items-start">
          <span className="text-blue mr-2 filter-label">view :</span>
          <div>
            {views.map((viewItem, index) => (
              <span key={viewItem}>
                <span
                  onClick={() => onViewChange(viewItem as GridViewType)}
                  className={`cursor-pointer filter-item ${view === viewItem ? 'active' : ''}`}
                >
                  {viewItem}
                </span>
                {index < views.length - 1 && <span className="filter-comma">,</span>}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 