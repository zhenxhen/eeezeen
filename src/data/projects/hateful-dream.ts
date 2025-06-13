import type { ProjectData } from '../types/project';

export const hatefulDream: ProjectData = {
  main: {
    id: 'TEMP',
    title: 'Hateful Dream',
    thumbnail: 'project/hatefuldream.png', // 임시 썸네일 경로
    image: 'project/hatefuldream.png', // 임시 메인 이미지 경로
    category: ['AI Film'],
    link: '/works/hateful-dream'
  },
  menu: {
    id: 'hateful-dream',
    label: 'Hateful Dream',
    icon: 'project/icons/hatefuldream.png', // 임시 아이콘 경로
    url: '/works/hateful-dream'
  },
  detail: {
    projectName: 'Hateful Dream',
    year: '2024',
    subtitle: 'AI Short Film',
    description: `In the dream, I found myself in a forest I could not explain—alien, yet strangely familiar. Towering trees blocked my way, their branches reaching toward the sky. A crimson glow flickered before my eyes. This place did not exist. The harder I struggled to escape, the more disoriented I became, with every path leading to a dead end.\n\nWhen I finally woke up, I could remember nothing, yet the feeling lingered with me throughout the day.`,
    media: [
        { type: 'image', src: 'project/hatefuldream-main.png' },
    ],
    media3: [
    ],
    media4: [
        { type: 'image', src: 'project/hatefuldream-1.png' },
        { type: 'image', src: 'project/hatefuldream-2.png' },
        { type: 'image', src: 'project/hatefuldream-3.png' },
      ],
      link: {
        url: 'https://youtu.be/Kg4L_AF3dmo?si=iSmrDpJ9N4QhlEHq/',
        text: '>> SCR'
      },
    tools: [
      'Runway ML',
      'Midjourney',
      'Chat GPT',
      'Claude',
      'Adobe Premiere Pro'
    ]
  }
}; 