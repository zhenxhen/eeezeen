import type { ProjectData } from '../types/project';
import { guansang } from './guansang';
import { review } from './review';
import { fingerController } from './finger-controller';
import { reminder } from './reminder';

// 모든 프로젝트 데이터를 통합 관리
export const allProjects: Record<string, ProjectData> = {
  'guansang': guansang,
  'review': review,
  'finger-controller': fingerController,
  'reminder': reminder,
};

// 개별 프로젝트 export (필요시 직접 접근 가능)
export { guansang, review, fingerController }; 