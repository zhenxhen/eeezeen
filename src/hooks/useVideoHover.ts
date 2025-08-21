import React, { useCallback, useEffect } from 'react';

/**
 * 프로젝트 비디오 호버 효과와 초기화를 관리하는 커스텀 훅
 * 
 * @param dependencies - 비디오 초기화를 트리거할 의존성 배열
 * @returns 비디오 호버 핸들러 함수
 */
export const useVideoHover = (dependencies: React.DependencyList = []) => {
  // 비디오 호버 이벤트 핸들러
  const handleVideoHover = useCallback((videoElement: HTMLVideoElement | null, isHovering: boolean) => {
    if (!videoElement) return;
    
    const container = videoElement.parentElement;
    const imageElement = container?.querySelector('img');
    
    if (isHovering) {
      videoElement.currentTime = 0; // 처음부터 재생
      videoElement.play().catch(console.error);
      videoElement.style.opacity = '1';
      if (imageElement) imageElement.style.opacity = '0';
    } else {
      videoElement.pause();
      videoElement.currentTime = 0; // 정지 후 처음 위치로 리셋
      videoElement.style.opacity = '0';
      if (imageElement) imageElement.style.opacity = '1';
    }
  }, []);

  // 컴포넌트 마운트 시 모든 비디오 초기화
  useEffect(() => {
    const initializeVideos = () => {
      const videoElements = document.querySelectorAll('.project-media-container video');
      const imageElements = document.querySelectorAll('.project-media-container img');
      
      videoElements.forEach((video) => {
        const videoEl = video as HTMLVideoElement;
        videoEl.pause();
        videoEl.currentTime = 0;
        videoEl.style.opacity = '0';
      });
      
      imageElements.forEach((image) => {
        const imageEl = image as HTMLImageElement;
        imageEl.style.opacity = '1';
      });
    };

    // DOM이 완전히 렌더링된 후 실행
    const timer = setTimeout(initializeVideos, 100);
    
    return () => clearTimeout(timer);
  }, dependencies);

  return { handleVideoHover };
}; 