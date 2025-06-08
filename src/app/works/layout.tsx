'use client';

import { useNavigation } from '../../components/LeftNavigation';
import { getResponsivePadding, getSectionClasses } from '../../utils/layoutUtils';

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isCollapsed } = useNavigation();

  return (
    <div className="min-h-screen bg-black text-white">
      <div 
        className={getSectionClasses()}
        style={getResponsivePadding(isCollapsed)}
      >
        {children}
      </div>
    </div>
  );
} 