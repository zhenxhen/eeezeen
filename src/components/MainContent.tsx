'use client';

import { useNavigation } from './LeftNavigation';

interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  const { isCollapsed } = useNavigation();

  return (
    <div 
      className="flex-1 overflow-auto"
      style={{
        marginLeft: isCollapsed ? 0 : 260,
        height: '100vh',
        transition: 'margin-left 0.3s ease'
      }}
    >
      {children}
    </div>
  );
} 