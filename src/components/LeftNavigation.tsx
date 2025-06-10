'use client';

import { useState, createContext, useContext, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { projectMenuItems } from '../data';
import { getNavigationImagePath } from '../utils/pathUtils';

// 네비게이션 컨텍스트 생성
interface NavigationContextType {
  isCollapsed: boolean;
  isMobile: boolean;
  toggleNavigation: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // 화면 크기 변화 감지 및 태블릿 크기 이하에서 네비게이션 자동 접기
  useEffect(() => {
    const checkScreenSize = () => {
      const isTabletOrBelow = window.innerWidth <= 1024; // 태블릿 이하 크기
      const prevIsMobile = isMobile;
      
      setIsMobile(isTabletOrBelow);
      
      // 초기화 시에는 즉시 적절한 상태로 설정
      if (!isInitialized) {
        setIsCollapsed(isTabletOrBelow);
        setIsInitialized(true);
        return;
      }
      
      // 태블릿 이하로 전환될 때만 자동으로 접기
      if (isTabletOrBelow && !prevIsMobile) {
        setIsCollapsed(true);
      }
      // 데스크톱으로 전환될 때 네비게이션 펼치기
      else if (!isTabletOrBelow && prevIsMobile) {
        setIsCollapsed(false);
      }
    };

    // 초기 크기 체크
    checkScreenSize();

    // 리사이즈 이벤트 리스너 추가
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [isMobile, isInitialized]);

  const toggleNavigation = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <NavigationContext.Provider value={{ isCollapsed, isMobile, toggleNavigation }}>
      {children}
    </NavigationContext.Provider>
  );
};

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  url?: string;
  isActive?: boolean;
  children?: MenuItem[];
}

// 이미지 경로 처리 함수는 utils/pathUtils.ts로 이동됨

const menuItems: MenuItem[] = [
  {
    id: 'about',
    label: 'about me',
    icon: 'project/icons/about.png',
    url: '/about',
    isActive: false,
  },
  {
    id: 'works',
    label: 'works',
    icon: '',
    url: '/',
    isActive: true,
    children: projectMenuItems || [],
  },
  {
    id: 'contact',
    label: 'contact',
    icon: 'project/icons/contact.png',
    url: '/contact',
    isActive: false,
  },
];

// 토글 버튼 컴포넌트
export const NavigationToggleButton = () => {
  const { isCollapsed, isMobile, toggleNavigation } = useNavigation();

  // 모바일/태블릿에서는 close.png, PC에서는 기존 collaps.png 사용
  const getToggleIcon = () => {
    if (isCollapsed) {
      return "project/icons/expand.png";
    } else {
      return isMobile ? "project/icons/close.png" : "project/icons/collaps.png";
    }
  };

  return (
    <motion.button
      onClick={toggleNavigation}
      className="navigation-toggle-btn-inside"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image 
        src={getNavigationImagePath(getToggleIcon())} 
        alt={isCollapsed ? "메뉴 열기" : "메뉴 접기"} 
        width={12}
        height={12}
        className="object-contain align-middle"
      />
    </motion.button>
  );
};

export default function LeftNavigation() {
  const { isCollapsed, isMobile, toggleNavigation } = useNavigation();
  const router = useRouter();
  const pathname = usePathname();
  
  // localStorage에서 사용자의 works 접기/펼치기 상태를 불러오기
  const getInitialExpanded = useCallback(() => {
    const expanded = new Set<string>();
    
    // localStorage에서 저장된 상태 확인
    if (typeof window !== 'undefined') {
      const savedWorksState = localStorage.getItem('worksExpanded');
      if (savedWorksState !== null) {
        // 사용자가 이전에 설정한 상태가 있으면 그것을 사용
        if (savedWorksState === 'true') {
          expanded.add('works');
        }
      } else {
        // 처음 방문하는 경우 기본적으로 works는 열려있음
        expanded.add('works');
        localStorage.setItem('worksExpanded', 'true');
      }
    } else {
      // 서버 사이드에서는 기본적으로 열림
      expanded.add('works');
    }
    
    return expanded;
  }, []);
  
  const [expandedItems, setExpandedItems] = useState<Set<string>>(getInitialExpanded());

  // pathname 변경 시에는 사용자 상태를 유지 (더 이상 강제로 works를 열지 않음)
  useEffect(() => {
    // pathname이 변경되어도 사용자가 설정한 상태를 유지
    // 아무것도 하지 않음
  }, [pathname]);

  const isMenuActive = (item: MenuItem) => {
    // 정확한 경로 매칭
    if (item.url === pathname) {
      return true;
    }
    
    // works 메인 페이지인 경우
    if (item.url === '/' && pathname === '/') {
      return true;
    }
    
    // 하위 프로젝트 페이지에서 해당 프로젝트 메뉴 active
    if (item.url && pathname === item.url) {
      return true;
    }
    
    return false;
  };

  const toggleExpand = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
      // works의 경우 localStorage에 상태 저장
      if (itemId === 'works') {
        localStorage.setItem('worksExpanded', 'false');
      }
    } else {
      newExpanded.add(itemId);
      // works의 경우 localStorage에 상태 저장
      if (itemId === 'works') {
        localStorage.setItem('worksExpanded', 'true');
      }
    }
    setExpandedItems(newExpanded);
  };

  const handleMenuClick = (item: MenuItem) => {
    if (item.url) {
      router.push(item.url);
      // 모바일/태블릿에서 메뉴 클릭 시 네비게이션 닫기
      if (isMobile) {
        toggleNavigation();
      }
    }
  };

  const handleExpandClick = (itemId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    toggleExpand(itemId);
  };

  const renderMenuItem = (item: MenuItem, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);
    const isActive = isMenuActive(item);
    const paddingLeft = depth === 0 ? '20px' : '0px';
    
    // works 메뉴에 대한 특별한 처리
    const isWorksWithProjectPage = item.id === 'works' && pathname.startsWith('/works/');
    const shouldShowActive = isActive && !isWorksWithProjectPage;
    const textOpacity = isWorksWithProjectPage ? 'opacity-100' : (!isActive ? 'opacity-50 hover:opacity-100' : 'opacity-100');

    return (
      <div key={item.id}>
        <div
          className={`left-nav-menu-item ${shouldShowActive ? 'active' : ''} ${textOpacity} transition-opacity duration-200`}
          style={{ paddingLeft }}
          onClick={() => handleMenuClick(item)}
        >
          {hasChildren && (
            <span 
              className={`left-nav-expand-icon ${isExpanded ? 'expanded' : ''}`}
              onClick={(e) => handleExpandClick(item.id, e)}
            >
              <Image 
                src={getNavigationImagePath("project/icons/list_arrow.png")} 
                alt="펼치기/접기" 
                width={14}
                height={14}
                className="object-contain align-middle"
              />
            </span>
          )}
          {!hasChildren && depth > 0 && <span className="w-3"></span>}
          {item.icon && item.icon.trim() !== '' && (
            <span className="left-nav-item-icon inline-block">
              <Image 
                src={getNavigationImagePath(item.icon)} 
                alt={item.label} 
                width={16}
                height={16}
                className="object-contain align-middle"
              />
            </span>
          )}
          <span 
            className="left-nav-item-label"
            style={item.id === 'works' ? { marginLeft: '-5px' } : {}}
          >
            {item.label}
          </span>
        </div>
        
        {hasChildren && isExpanded && item.children && (
          <div className="left-nav-submenu">
            {(item.children || []).map((child) => renderMenuItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* 모바일/태블릿에서 네비게이션이 열렸을 때 배경 오버레이 */}
      {isMobile && !isCollapsed && (
        <motion.div
          className="mobile-nav-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleNavigation}
        />
      )}

      {/* 접혔을 때 열기 버튼 */}
      {isCollapsed && (
        <motion.button
          onClick={toggleNavigation}
          className="navigation-toggle-btn-collapsed"
          whileHover={{ scale: 1.0 }}
          whileTap={{ scale: 1.0 }}
          initial={{ 
            opacity: 0, 
            x: isMobile ? 100 : -100  // 태블릿/모바일에서는 오른쪽에서, PC에서는 왼쪽에서
          }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ 
            opacity: 0, 
            x: isMobile ? 10 : -10  // 태블릿/모바일에서는 오른쪽으로, PC에서는 왼쪽으로
          }}
          transition={{
            type: 'keyframes',
            stiffness: 100,
            damping: 10,
            delay: 0.1
          }}
        >
          <Image 
            src={getNavigationImagePath("project/icons/expand.png")} 
            alt="메뉴 열기" 
            width={16}
            height={16}
            className="object-contain align-middle"
          />
        </motion.button>
      )}
      
      <motion.div 
        className="left-nav-container"
        animate={
          isMobile 
            ? { 
                scale: isCollapsed ? 0 : 1,
                opacity: isCollapsed ? 0 : 1,
                x: "-50%",
                y: "-50%"
              }
            : { 
                x: isCollapsed ? -260 : 0 
              }
        }
        initial={
          isMobile 
            ? { 
                scale: 0, 
                opacity: 0,
                x: "-50%",
                y: "-50%"
              }
            : { x: 0 }
        }
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
      >
        {/* Header */}
        <div className="left-nav-header">
          <div className="flex items-start justify-between">
            <h1 className="text-white font-bold">eeezeen</h1>
            <NavigationToggleButton />
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="left-nav-menu">
          {menuItems.map((item) => renderMenuItem(item))}
        </div>
      </motion.div>
    </>
  );
} 