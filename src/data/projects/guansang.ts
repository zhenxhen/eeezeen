import type { ProjectData } from '../types/project';

export const guansang: ProjectData = {
  main: {
    id: '001',
    title: 'Guansang',
    thumbnail: 'project/guansang2.png',
    video: 'project/guansang_video.mp4',
    image: 'project/guansang2.png',
    category: ['AI', 'UI', 'Labs'],
    link: '/works/guansang'
  },
  menu: {
    id: 'guansang',
    label: 'Guansang',
    icon: 'project/icons/guansang.png',
    url: '/works/guansang'
  },
  detail: {
    projectName: "Guansang",
    year: "2025",
    subtitle: "AI-Powered Physiognomy Interface",
    description: `Guansang is an experimental AI interface that explores the intersection of traditional physiognomy and modern machine learning. The project investigates how artificial intelligence can interpret human facial features and expressions to provide insights into personality traits and emotional states.

This project questions the boundaries between ancient wisdom and contemporary technology, examining how AI can be used to digitize and analyze traditional face-reading practices. Through machine learning algorithms, Guansang attempts to create a modern interpretation of physiognomy while addressing the ethical implications of such technology.

The interface provides real-time facial analysis and generates interpretative results based on traditional physiognomy principles, enhanced by AI processing capabilities. This project serves as both a technological experiment and a cultural commentary on the digitization of ancient practices.`,
    media: [
      { type: 'video', src: 'project/guansang6.mp4' },
      { type: 'video', src: 'project/guansang2.mp4' },
      { type: 'video', src: 'project/guansang1.mp4' }
    ],
    media2: [
      { type: 'image', src: 'project/guansang3.png' },
      { type: 'video', src: 'project/guansang4.mov' },
      { type: 'image', src: 'project/guansang5.png' }
    ],
    tools: [
      'OpenAI API',
      'Google AI',
      'Machine Learning',
      'React',
      'Typescript',
      'Python',
      'TensorFlow'
    ]
  }
}; 