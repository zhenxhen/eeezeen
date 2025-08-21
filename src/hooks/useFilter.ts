import { useState, useMemo } from 'react';

/**
 * 제네릭 필터링 로직을 관리하는 커스텀 훅
 * 
 * @param items - 필터링할 아이템 배열
 * @param filterFunction - 필터링 함수 (item, filter) => boolean
 * @param initialFilter - 초기 필터 값 (기본값: 'All')
 * @returns 필터 상태, 필터링된 아이템, 필터 변경 함수
 */
export const useFilter = <T>(
  items: T[],
  filterFunction: (item: T, filter: string) => boolean,
  initialFilter: string = 'All'
) => {
  const [filter, setFilter] = useState(initialFilter);

  const filteredItems = useMemo(() => {
    if (filter === 'All') return items;
    return items.filter(item => filterFunction(item, filter));
  }, [items, filter, filterFunction]);

  return {
    filter,
    setFilter,
    filteredItems
  };
};

/**
 * 프로젝트 필터링에 특화된 함수
 */
export const projectFilterFunction = (project: { category: string | string[] }, filter: string): boolean => {
  if (Array.isArray(project.category)) {
    return project.category.includes(filter);
  }
  return project.category === filter;
}; 