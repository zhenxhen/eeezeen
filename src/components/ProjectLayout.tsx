'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getProjectImagePath } from '../utils/pathUtils';
import { fetchMultipleYouTubeInfo } from '../services/youtubeService';
import type { MediaItem, ReviewItem } from '../data/types/project';

interface YouTubeVideoInfo {
  title: string;
  creator: string;
  thumbnail: string;
  videoId: string;
  url: string;
}

interface ProjectLayoutProps {
  projectName: string;
  year: string;
  subtitle: string;
  description: string;
  media: MediaItem[];
  media2?: MediaItem[];
  media3?: MediaItem[];
  reviews?: ReviewItem[];
  tools: string[];
  icon?: string;
}

// 이미지 경로 처리 함수는 utils/pathUtils.ts로 이동됨

export default function ProjectLayout({
  projectName,
  year,
  subtitle,
  description,
  media,
  media2,
  media3,
  reviews,
  tools,
  icon = '📋'
}: ProjectLayoutProps) {
  const [youtubeVideos, setYoutubeVideos] = useState<YouTubeVideoInfo[]>([]);
  const [isLoadingVideos, setIsLoadingVideos] = useState(false);

  // YouTube 비디오 정보 로드
  useEffect(() => {
    if (reviews && reviews.length > 0) {
      setIsLoadingVideos(true);
      const urls = reviews.map(review => review.url);
      
      fetchMultipleYouTubeInfo(urls).then(videoInfos => {
        const videosWithUrls = videoInfos.map((info, index) => ({
          ...info,
          url: urls[index]
        }));
        setYoutubeVideos(videosWithUrls);
        setIsLoadingVideos(false);
      }).catch(error => {
        console.error('Failed to load YouTube videos:', error);
        setIsLoadingVideos(false);
      });
    }
  }, [reviews]);

  return (
    <div className="project-page">
      {/* Navigation Header */}
      <div className="project-navigation">
        <Link href="/" style={{ marginRight: '10px', textDecoration: 'underline' }}>
          works
        </Link>
        <span className="text-white mr-4">&gt;</span>
        <span className="text-white inline-flex items-start" style={{ gap: '10px',}}>
          {icon && typeof icon === 'string' && icon.includes('/') ? (
            <Image
              src={getProjectImagePath(icon)}
              alt={projectName}
              width={16}
              height={16}
              className="object-contain"
            />
          ) : (
            <span>{icon}</span>
          )}
          <span>{projectName}</span>
        </span>
      </div>

      {/* Wide Media at Top (media3) */}
      {media3 && media3.length > 0 && (
        <div className="project-media-wide">
          {media3.map((mediaItem, index) => (
            <div key={`${projectName}-media3-${index}`}>
              {mediaItem.type === 'video' ? (
                <video
                  src={getProjectImagePath(mediaItem.src)}
                  className="w-full h-auto object-contain"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <Image
                  src={getProjectImagePath(mediaItem.src)}
                  alt={`${projectName} wide ${index + 1}`}
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Project Media Grid */}
      {media && media.length > 0 && (
        <div className={`project-media-grid project-media-grid-${media.length}`}>
          {media.map((mediaItem, index) => (
            <div 
              key={`${projectName}-media-${index}`} 
              className="project-media-container"
            >
              {mediaItem.type === 'video' ? (
                <video
                  src={getProjectImagePath(mediaItem.src)}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <Image
                  src={getProjectImagePath(mediaItem.src)}
                  alt={`${projectName} ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Project Info */}
      <div className="mb-8">
        <h1 className="project-title">
          {projectName.toUpperCase()} ({year})
        </h1>
        <blockquote className="project-subtitle">
          &quot;{subtitle}&quot;
        </blockquote>
        <div className="project-description">
          {description}
        </div>
      </div>

      {/* Second Project Media Grid (media2 after description) */}
      {media2 && media2.length > 0 && (
        <div className={`project-media-grid project-media-grid-${media2.length}`}>
          {media2.map((mediaItem, index) => (
            <div 
              key={`${projectName}-media2-${index}`} 
              className="project-media-container"
            >
              {mediaItem.type === 'video' ? (
                <video
                  src={getProjectImagePath(mediaItem.src)}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <Image
                  src={getProjectImagePath(mediaItem.src)}
                  alt={`${projectName} second ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Reviews Section */}
      {reviews && reviews.length > 0 && (
        <div className="project-reviews">
          <h3>&lt;<span className="text-yellow">Reviews</span>&gt;</h3>
          {isLoadingVideos ? (
            <div className="reviews-grid">
              {reviews.map((_, index) => (
                <div key={`loading-${index}`} className="review-card">
                  <div className="review-thumbnail">
                    <div style={{ 
                      width: '100%', 
                      height: '100%', 
                      background: '#1f2937',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9ca3af'
                    }}>
                      Loading...
                    </div>
                  </div>
                  <div className="review-content">
                    <div className="review-title">Loading video info...</div>
                    <div className="review-creator">Please wait...</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="reviews-grid">
              {youtubeVideos.map((video, index) => (
                <a
                  key={`${projectName}-review-${index}`}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="review-card"
                >
                  <div className="review-thumbnail">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      width={320}
                      height={180}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="review-play-button">
                      ▶
                    </div>
                  </div>
                  <div className="review-content">
                    <div className="review-title">{video.title}</div>
                    <div className="review-creator">{video.creator}</div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tools Section */}
      <div className="project-tools">
        <h3>&lt;Tools&gt;</h3>
        <div className="project-tools-list">
          {tools.map((tool, index) => (
            <div key={`${projectName}-tool-${index}`}>
              {tool}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 