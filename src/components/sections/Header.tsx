import { getResponsivePadding } from '../../utils/layoutUtils';

interface HeaderProps {
  isCollapsed: boolean;
}

/**
 * 사이트 메인 헤더 컴포넌트
 * 로고와 소셜 네비게이션 링크들을 포함합니다.
 */
export default function Header({ isCollapsed }: HeaderProps) {
  return (
    <header 
      className="flex justify-between header-align pr-12 pl-6 py-8"
      style={getResponsivePadding(isCollapsed)}
    >
      <div className="header-left">
        <h1 className="font-normal">eeezeen</h1>
        <h2 className="text-gray-500 italic" style={{ marginTop: '-5px' }}>Jinwon Lee</h2>
      </div>
      <nav className="flex space-x-12">
        <a href="#" className="nav-link">Instagram</a>
        <a href="#" className="nav-link">Twitter</a>
        <a href="#" className="nav-link">LinkedIn</a>
        <a href="#" className="nav-link">Youtube</a>
      </nav>
    </header>
  );
} 