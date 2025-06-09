import type { ProjectData } from '../types/project';

export const reminder: ProjectData = {
  main: {
    id: '004',
    title: 'Samsung Reminder',
    thumbnail: 'project/reminder.png',
    image: 'project/reminder.png',
    category: ['UI', 'Product'],
    link: '/works/reminder'
  },
  menu: {
    id: 'reminder',
    label: 'Samsung Reminder',
    icon: 'project/icons/reminder.png',
    url: '/works/reminder'
  },
  detail: {
    projectName: "Samsung Reminder",
    year: "2024",
    subtitle: "UX Design : Samsung Electronics",
    description: `Reminder remembers and manages important things in your daily life. From automatic categorization to smart suggestions, it offers a variety of features for a productive day.

This comprehensive reminder application is designed for Samsung's ecosystem, providing seamless integration across multiple device types including mobile phones, tablets, smartwatches, and XR devices. The app features intelligent categorization that automatically sorts reminders based on content and context, making it easier for users to organize their daily tasks.

Key features include smart suggestions that learn from user behavior patterns, cross-device synchronization for consistent access across all Samsung devices, and an intuitive interface that follows Samsung's One UI design principles. The app also incorporates advanced notification systems that adapt to user preferences and device capabilities.

The design process focused on creating a unified experience that works seamlessly across different screen sizes and interaction methods, from touch interfaces on mobile devices to voice commands on smartwatches and gesture controls on XR devices.`,
    media: [
    ],
    media3: [
      { type: 'image', src: 'project/reminder_main.png' }
    ],
    reviews: [
      {
        url: 'https://youtu.be/GvUpJwGUqjw?si=aamPL1i013V2dZYe'
      },
      {
        url: 'https://youtu.be/R_6ftHOsXWg?si=KbYYo4o-rbpZObn6'
      },
      {
        url: 'https://www.youtube.com/watch?v=LAyul66fEyM'
      }
    ],
    tools: [
      'Figma',
      'Sketch',
      'Principle',
      'After Effects',
      'Samsung One UI Design System',
      'Android Studio',
      'Tizen Studio'
    ]
  }
}; 