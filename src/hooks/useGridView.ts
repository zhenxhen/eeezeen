import { useState, useCallback } from 'react';

/**
 * 그리드 뷰 타입 정의
 */
export type GridViewType = '2x' | '3x';

/**
 * 그리드 뷰 설정을 관리하는 커스텀 훅
 * 
 * @param initialView - 초기 뷰 타입 (기본값: '3x')
 * @returns 뷰 상태, 뷰 변경 함수, 그리드 클래스 함수
 */
export const useGridView = (initialView: GridViewType = '3x') => {
  const [view, setView] = useState<GridViewType>(initialView);

  // view에 따른 그리드 컬럼 클래스 결정
  const getGridClass = useCallback(() => {
    switch(view) {
      case '2x': return 'grid-cols-2';
      case '3x': return 'grid-cols-3';
      default: return 'grid-cols-3';
    }
  }, [view]);

  return {
    view,
    setView,
    getGridClass
  };
}; 