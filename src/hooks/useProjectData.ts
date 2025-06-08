import { useMemo } from 'react';
import { getMainPageProjects } from '../data';

/**
 * 프로젝트 데이터 관리를 담당하는 커스텀 훅
 * 
 * @returns 프로젝트 데이터와 관련 상수들
 */
export const useProjectData = () => {
  // 통합된 프로젝트 데이터 사용
  const projects = useMemo(() => getMainPageProjects() || [], []);

  // 필터 옵션들
  const filters = ['All', 'AI', 'UI', 'Product', 'Researches', 'Movies', 'Labs'];
  
  // 뷰 옵션들
  const views = ['3x', '2x'];

  return {
    projects,
    filters,
    views
  };
}; 