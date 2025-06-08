import type { ProjectData } from '../types/project';

export const fingerController: ProjectData = {
  main: {
    id: '003',
    title: 'Finger Controller',
    thumbnail: 'project/finger.jpg',
    video: 'project/finger.mp4',
    image: 'project/finger.jpg',
    category: ['Labs'],
    link: '/works/finger-controller'
  },
  menu: {
    id: 'finger-controller',
    label: 'Finger Controller',
    icon: 'project/icons/finger.png',
    url: '/works/finger-controller'
  },
  detail: {
    projectName: "Finger Controller",
    year: "2024",
    subtitle: "Gesture-Based Interface Control",
    description: `Finger Controller is an innovative gesture recognition system that enables users to control digital interfaces through hand and finger movements. This project explores the potential of natural human gestures as a primary input method for computer interaction.

Using advanced computer vision and machine learning algorithms, the system tracks and interprets finger movements in real-time, translating them into precise control commands. The interface responds to various gestures including pointing, swiping, pinching, and complex finger patterns.

This project aims to create a more intuitive and accessible way of interacting with technology, particularly beneficial for users with mobility limitations or in situations where traditional input methods are impractical. The system demonstrates the future potential of hands-free computing and natural user interfaces.

The technology has applications in virtual reality, augmented reality, smart home control, and accessibility solutions, representing a step towards more human-centered computing experiences.`,
    images: [
      'project/finger.jpg',
      'project/finger.jpg',
      'project/finger.jpg'
    ],
    tools: [
      'OpenCV',
      'MediaPipe',
      'Python',
      'Computer Vision',
      'Machine Learning'
    ]
  }
}; 