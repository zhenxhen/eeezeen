import { getResponsivePadding } from '../../utils/layoutUtils';
import { useNavigation } from '../LeftNavigation';

interface HeroSectionProps {
  isCollapsed: boolean;
}

/**
 * 메인 페이지 히어로 섹션 컴포넌트
 * 브랜드 메시지와 소개글을 표시합니다.
 */
export default function HeroSection({ isCollapsed }: HeroSectionProps) {
  const { isMobile } = useNavigation();
  
  const heroStyle = {
    ...getResponsivePadding(isCollapsed),
    ...(isMobile && {
      paddingTop: '8rem', // 고정된 헤더 높이만큼 상단 패딩 추가
      paddingLeft: '2rem', // 모바일에서 좌측 마진 줄임
      paddingRight: '2rem', // 모바일에서 우측 마진도 조정
    })
  };

  return (
    <section 
      className="pr-12 pl-6 py-16"
      style={heroStyle}
    >
      <h2 className="font-normal mb-16 text-pink">&quot;Humanizing Technology&quot;</h2>
      <div className="max-w-xl">
        <p className="mb-6 leading-relaxed">
          I&apos;m Jinwon Lee (
          <a 
            target="_blank" 
            href="https://www.instagram.com/eeezeen/" 
            className="text-blue" 
            style={{ textDecoration: 'underline', margin: '0px' }}
          >
            @eeezeen
          </a>
          ), An AI Design engineer Technology follows where life leads.<br />
          Envisioning a future where computers reflect the essence of humanity.<br />
          Based in Seoul and London.
        </p>
      </div>
    </section>
  );
} 