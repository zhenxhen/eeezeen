import type { ProjectData } from '../types/project';

export const saju: ProjectData = {
  main: {
    id: 'TEMP',
    title: 'SAJU',
    thumbnail: 'project/saju.png', // 임시 썸네일 경로
    image: 'project/saju.png', // 임시 메인 이미지 경로
    category: ['GPT project'],
    link: '/works/saju'
  },
  menu: {
    id: 'saju',
    label: 'SAJU',
    icon: 'project/icons/saju.png', // 임시 아이콘 경로
    url: '/works/saju'
  },
  detail: {
    projectName: 'SAJU',
    year: '2024',
    subtitle: 'AI Korean Fortune Teller GPT',
    description: `In Korea, it is a common tradition to check one's fortune for the coming year through a SAJU reading. By analysing a person's name, year, month, day, and time of birth, the Saju method, based on the principles of Myeongrihak (study of destiny and fortune), is used to determine their fortune. It's a cultural practice where individuals share their concerns and seek guidance on their life path.\n\nThis traditional concept has been taught to GPT, creating a chatbot that allows you to engage in a conversation online. Check your Saju fortune and share your worries.`,
    media: [
     
    ],
    media3: [
      { type: 'image', src: 'project/saju-main.png' },
    ],
    media4: [
      { type: 'image', src: 'project/saju-1.png' },
    ],
    link: {
      url: 'https://www.leejinwon.com/saju',
      text: '>> Web'
    },
    tools: [
      'Open AI API',
      'Python',
      'Pytorch',
      'Firebase',
      'Stable diffusion',
      'Midjourney',
      'React, Typescript, Tailwind CSS',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Chat GPT 4o',
      'Claude 3.5'
    ]
  }
}; 