import type { ProjectData } from '../types/project';

export const theBubble: ProjectData = {
  main: {
    id: 'TEMP',
    title: 'the bubble',
    thumbnail: 'project/thebubble.png', // 임시 썸네일 경로
    image: 'project/thebubble.png', // 임시 메인 이미지 경로
    category: ['AI Film'],
    link: '/works/the-bubble'
  },
  menu: {
    id: 'the-bubble',
    label: 'the bubble',
    icon: 'project/icons/thebubble.png', // 임시 아이콘 경로
    url: '/works/the-bubble'
  },
  detail: {
    projectName: 'the bubble',
    year: '2024',
    subtitle: 'AI Short Film',
    description: `Bubbles are the shape of our youth. The colors that change with time and angle capture the diverse expressions of youth, and their delicate, fleeting nature reflects the immaturity of that time.\n\nWe remember our youth through moments like the exhilarating beginnings, beautiful love, heart-pounding voyages, unforgettable freedom, fleeting voids, relentless striving, and the inevitable confrontation with reality.`,
    media: [        { type: 'image', src: 'project/thebubble_main.png' },
        
        
    ],
    media3: [
    ],
    media4: [
      { type: 'image', src: 'project/thebubble-1.png' },
      { type: 'image', src: 'project/thebubble-2.png' },
      { type: 'image', src: 'project/thebubble-4.png' },
      { type: 'image', src: 'project/thebubble-3.png' },
    ],
    link: {
      url: 'https://youtu.be/MAdO7s-JP_Y?si=zTp5xH29Dnu2viZl',
      text: '>> SCR'
    },
    tools: [
      'Runway ML',
      'LUMA AI',
      'Midjourney',
      'Stable diffusion',
      'Udio',
      'Suno',
      'Chat GPT',
      'Claude',
      'Adobe Premiere Pro',
      'After Effects'
    ]
  }
}; 