import { getResponsivePadding } from '../../utils/layoutUtils';
import { useNavigation } from '../LeftNavigation';

interface HeaderProps {
  isCollapsed: boolean;
}

/**
 * 사이트 메인 헤더 컴포넌트
 * 로고와 소셜 네비게이션 링크들을 포함합니다.
 */
export default function Header({ isCollapsed }: HeaderProps) {
  const { isMobile } = useNavigation();
  
  // 모바일에서 헤더 스타일 조정
  const headerStyle = {
    ...getResponsivePadding(isCollapsed),
    ...(isMobile && {
      paddingLeft: '2rem', // 본문 마진과 동일하게 조정
      paddingRight: '2rem', // 우측도 동일하게 조정
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#000000',
      zIndex: 998, // 네비게이션보다 낮지만 본문보다 높게
    })
  };

  return (
    <header 
      className={`flex ${isMobile ? 'justify-start' : 'justify-between'} header-align pr-12 pl-6 py-8`}
      style={headerStyle}
    >
      <div className="header-left">
        <h1 className="font-normal">eeezeen</h1>
        <h2 className="text-gray-500 italic" style={{ marginTop: '-5px' }}>Jinwon Lee</h2>
      </div>
      {/* 모바일에서는 소셜 링크 숨기기 */}
      {!isMobile && (
        <nav className="flex space-x-12">
          <a href="#" className="nav-link">Instagram</a>
          <a href="#" className="nav-link">Twitter</a>
          <a href="#" className="nav-link">LinkedIn</a>
          <a href="#" className="nav-link">Youtube</a>
        </nav>
      )}
    </header>
  );
} 