'use client';

import { useNavigation } from '../../components/LeftNavigation';

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isCollapsed } = useNavigation();

  return (
    <div className="min-h-screen bg-black text-white">
      <div 
        className="pr-12 pl-6 py-8"
        style={{
          paddingLeft: isCollapsed ? '6rem' : '1.5rem',
          transition: 'padding-left 0.3s ease'
        }}
      >
        {children}
      </div>
    </div>
  );
} 