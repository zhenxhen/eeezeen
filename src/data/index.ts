// 타입 정의들 re-export
export type {
  ProjectMenuItem,
  ProjectDetailData,
  ProjectMainData,
  ProjectData
} from './types/project';

// 프로젝트 데이터 import
import { allProjects } from './projects';
import type { ProjectMainData, ProjectMenuItem, ProjectDetailData } from './types/project';

// 프로젝트 데이터 export
export { allProjects };

// 헬퍼 함수들 - 각 용도별로 데이터 추출
export const getMainPageProjects = (): ProjectMainData[] => {
  const projects = Object.values(allProjects).map(project => project.main);
  return projects;
};

export const getNavigationMenuItems = (): ProjectMenuItem[] => {
  const menuItems = Object.values(allProjects).map(project => project.menu);
  return menuItems;
};

export const getProjectDetailData = (): Record<string, ProjectDetailData> => {
  const detailData: Record<string, ProjectDetailData> = {};
  Object.keys(allProjects).forEach(key => {
    detailData[key] = allProjects[key].detail;
  });
  return detailData;
};

export const getProjectIcon = (slug: string): string => {
  const project = allProjects[slug];
  return project?.menu.icon || '📋';
};

// 기존 호환성을 위한 export (하위 호환성)
export const projectMenuItems = getNavigationMenuItems();
export const projectDetailData = getProjectDetailData(); 