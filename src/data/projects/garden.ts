import type { ProjectData } from '../types/project';

export const garden: ProjectData = {
  main: {
    id: '006',
    title: 'Garden',
    thumbnail: 'project/garden.png',
    image: 'project/garden.png',
    category: ['UI', 'Service'],
    link: '/works/garden'
  },
  menu: {
    id: 'garden',
    label: 'Garden',
    icon: 'project/icons/garden.png',
    url: '/works/garden'
  },
  detail: {
    projectName: "Garden",
    year: "2021",
    subtitle: "Team work",
    description: `Garden is a financial service for children. It helps them learn how to manage and cultivate the concept of money, which is often invisible.

This comprehensive financial education application is designed to make abstract financial concepts tangible and understandable for young users. Through gamification and visual metaphors, children can learn fundamental money management skills in an engaging and age-appropriate way.

Key features include interactive savings goals, spending tracking with visual feedback, educational content about money concepts, and parental oversight tools. The app transforms complex financial literacy into simple, digestible lessons that children can easily understand and apply.

The design process focused on creating an intuitive interface that combines educational content with playful interactions, helping children develop healthy financial habits from an early age while maintaining engagement through colorful visuals and interactive elements.`,
    media: [
      { type: 'image', src: 'project/garden-1.png' },
      { type: 'image', src: 'project/garden-2.png' },
      { type: 'image', src: 'project/garden-3.png' }
    ],
    link: {
      url: 'https://www.behance.net/gallery/110296243/Garden-cultivate-your-budget-UX-UI',
      text: '>> view in Behance'
    },
    tools: [
      'Figma',
      'Sketch',
      'Principle',
      'After Effects',
      'User Research',
      'Prototyping'
    ]
  }
}; 