interface YouTubeVideoInfo {
  title: string;
  creator: string;
  thumbnail: string;
  videoId: string;
}

/**
 * YouTube URL에서 Video ID를 추출합니다
 */
export function extractVideoId(url: string): string | null {
  const patterns = [
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?.*v=([^&\n?#]+)/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  return null;
}

/**
 * Video ID로 썸네일 URL을 생성합니다
 */
export function getThumbnailUrl(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

/**
 * YouTube oEmbed API를 사용하여 비디오 정보를 가져옵니다
 */
export async function fetchYouTubeInfo(url: string): Promise<YouTubeVideoInfo | null> {
  try {
    const videoId = extractVideoId(url);
    if (!videoId) {
      throw new Error('Invalid YouTube URL');
    }

    // YouTube oEmbed API 호출
    const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`;
    const response = await fetch(oembedUrl);
    
    if (!response.ok) {
      throw new Error('Failed to fetch video info');
    }

    const data = await response.json();
    
    return {
      title: data.title || 'Unknown Title',
      creator: data.author_name || 'Unknown Creator',
      thumbnail: getThumbnailUrl(videoId),
      videoId: videoId
    };
  } catch (error) {
    console.error('Error fetching YouTube info:', error);
    return null;
  }
}

/**
 * 여러 YouTube URL들의 정보를 한번에 가져옵니다
 */
export async function fetchMultipleYouTubeInfo(urls: string[]): Promise<YouTubeVideoInfo[]> {
  const promises = urls.map(url => fetchYouTubeInfo(url));
  const results = await Promise.all(promises);
  
  // null 값 필터링
  return results.filter((info): info is YouTubeVideoInfo => info !== null);
}

/**
 * YouTube URL 유효성을 검사합니다
 */
export function isValidYouTubeUrl(url: string): boolean {
  return extractVideoId(url) !== null;
} 