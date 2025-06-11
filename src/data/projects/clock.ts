import type { ProjectData } from '../types/project';

export const clock: ProjectData = {
  main: {
    id: '005',
    title: 'Samsung Clock',
    thumbnail: 'project/clock.png',
    image: 'project/clock.png',
    category: ['UI', 'Product'],
    link: '/works/clock'
  },
  menu: {
    id: 'clock',
    label: 'Samsung Clock',
    icon: 'project/icons/clock.png',
    url: '/works/clock'
  },
  detail: {
    projectName: "Samsung Clock",
    year: "2024",
    subtitle: "UX Design : Samsung Electronics",
    description: `It allows you to set alarms and manage your time smartly. With a timer and stopwatch, you can spend your time efficiently. Smart suggestions help you find ways to make the most of your time.

This comprehensive clock application is designed for Samsung's ecosystem, providing seamless integration across multiple device types including mobile phones, tablets, smartwatches, and XR devices. The app features intelligent functionality that learns from user's daily patterns to provide personalized alarm and timer suggestions.

Key features include smart suggestions that learn from user behavior patterns, cross-device synchronization for consistent access across all Samsung devices, and an intuitive interface that follows Samsung's One UI design principles. The app also incorporates advanced notification systems that adapt to user preferences and device capabilities.

The design process focused on creating a unified experience that works seamlessly across different screen sizes and interaction methods, from touch interfaces on mobile devices to voice commands on smartwatches and gesture controls on XR devices.`,
    media: [
    ],
    media3: [
      { type: 'image', src: 'project/clock_main.png' }
    ],
    reviews: [
      {
        url: 'https://youtu.be/P4AEIu3V6F4?si=JCzrYfEFQ5NHY3tw'
      },
      {
        url: 'https://youtu.be/dvvU0-_3aic?si=xjfkc5fvH-DhCiNb'
      },
      {
        url: 'https://youtu.be/KYaQeaw8yRM?si=DqbBwye0hQGuTWwz'
      },
      {
        url: 'https://www.youtube.com/watch?v=Ps_dMLIpO6c'
      }
    ],
    tools: [
      'Sketch',
      'BigData Research',
      'Samsung One UI Design System',
      'Android Studio'
    ]
  }
}; 