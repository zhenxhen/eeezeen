'use client';

import { useState, createContext, useContext, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { projectMenuItems } from '../data/projects';

// 네비게이션 컨텍스트 생성
interface NavigationContextType {
  isCollapsed: boolean;
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

  const toggleNavigation = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <NavigationContext.Provider value={{ isCollapsed, toggleNavigation }}>
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

const menuItems: MenuItem[] = [
  {
    id: 'about',
    label: 'about me',
    icon: '/project/icons/about.png',
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
    icon: '/project/icons/contact.png',
    url: '/contact',
    isActive: false,
  },
  {
    id: 'visitors',
    label: 'visitors',
    icon: '/project/icons/visitors.png',
    url: '/visitors',
    isActive: false,
  },
];

// 토글 버튼 컴포넌트
export const NavigationToggleButton = () => {
  const { isCollapsed, toggleNavigation } = useNavigation();

  return (
    <motion.button
      onClick={toggleNavigation}
      className="navigation-toggle-btn-inside"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image 
        src={isCollapsed ? "/project/icons/expand.png" : "/project/icons/collaps.png"} 
        alt={isCollapsed ? "메뉴 열기" : "메뉴 접기"} 
        width={12}
        height={12}
        className="object-contain align-middle"
      />
    </motion.button>
  );
};

export default function LeftNavigation() {
  const { isCollapsed, toggleNavigation } = useNavigation();
  const router = useRouter();
  const pathname = usePathname();
  
  // 현재 경로에 따라 초기 expanded 상태 설정
  const getInitialExpanded = useCallback(() => {
    const expanded = new Set<string>();
    if (pathname.startsWith('/works/')) {
      expanded.add('works');
    } else if (pathname === '/') {
      expanded.add('works');
    }
    return expanded;
  }, [pathname]);
  
  const [expandedItems, setExpandedItems] = useState<Set<string>>(getInitialExpanded());

  // pathname이 변경될 때마다 expanded 상태 업데이트
  useEffect(() => {
    setExpandedItems(getInitialExpanded());
  }, [pathname, getInitialExpanded]);

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
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const handleMenuClick = (item: MenuItem) => {
    if (item.url) {
      router.push(item.url);
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
                src="/project/icons/list_arrow.png" 
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
                src={item.icon} 
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
      {/* 접혔을 때 열기 버튼 */}
      {isCollapsed && (
        <motion.button
          onClick={toggleNavigation}
          className="navigation-toggle-btn-collapsed"
          whileHover={{ scale: 1.0 }}
          whileTap={{ scale: 1.0 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{
            type: 'keyframes',
            stiffness: 100,
            damping: 10,
            delay: 0.1
          }}
        >
          <Image 
            src="/project/icons/expand.png" 
            alt="메뉴 열기" 
            width={16}
            height={16}
            className="object-contain align-middle"
          />
        </motion.button>
      )}
      
      <motion.div 
        className="left-nav-container"
        animate={{
          x: isCollapsed ? -260 : 0,
        }}
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