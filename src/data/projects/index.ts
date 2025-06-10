import type { ProjectData } from '../types/project';
import { guansang } from './guansang';
import { review } from './review';
import { fingerController } from './finger-controller';
import { reminder } from './reminder';
import { clock } from './clock';
import { garden } from './garden';
import { bloomy } from './bloomy';
import { view } from './view';
import { aerobox } from './aerobox';
import { wheeling } from './wheeling';

// 프로젝트 순서 정의 (이 순서대로 001, 002, 003... 번호가 매겨집니다)
const projectsInOrder = [
  guansang,
  review,
  fingerController,
  reminder,
  clock,
  garden,  
  bloomy,
  view,
  aerobox,
  wheeling,
];

// 순서에 따라 자동으로 ID 할당
const assignIds = (projects: ProjectData[]): ProjectData[] => {
  return projects.map((project, index) => ({
    ...project,
    main: {
      ...project.main,
      id: String(index + 1).padStart(3, '0'), // 001, 002, 003...
    }
  }));
};

const projectsWithAutoIds = assignIds(projectsInOrder);

// 모든 프로젝트 데이터를 통합 관리
export const allProjects: Record<string, ProjectData> = {
  'guansang': projectsWithAutoIds[0],
  'review': projectsWithAutoIds[1],
  'finger-controller': projectsWithAutoIds[2],
  'reminder': projectsWithAutoIds[3],
  'clock': projectsWithAutoIds[4],
  'garden': projectsWithAutoIds[5],
  'bloomy': projectsWithAutoIds[6],
  'view': projectsWithAutoIds[7],
  'aerobox': projectsWithAutoIds[8],
  'wheeling': projectsWithAutoIds[9],
};

// 개별 프로젝트 export (필요시 직접 접근 가능)
export { guansang, review, fingerController, reminder, clock, garden, bloomy, view, aerobox, wheeling }; 