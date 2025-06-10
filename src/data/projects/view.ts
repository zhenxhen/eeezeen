import type { ProjectData } from '../types/project';

export const view: ProjectData = {
  main: {
    id: '008',
    title: 'View',
    thumbnail: 'project/view.png',
    image: 'project/view.png',
    category: ['AR', 'Product'],
    link: '/works/view'
  },
  menu: {
    id: 'view',
    label: 'View',
    icon: 'project/icons/view.png',
    url: '/works/view'
  },
  detail: {
    projectName: "View",
    year: "2021",
    subtitle: "Personal work",
    description: `View is a new approach to homeschooling. Addressing the challenges of communication with friends and teachers, it builds a metaverse education platform that combines the goal of social education.

This innovative AR product design reimagines the homeschooling experience by creating immersive virtual environments where students can interact with peers and educators in meaningful ways. The platform bridges the gap between traditional home education and social learning, providing a comprehensive solution for modern educational needs.

Key features include virtual classrooms with spatial audio, interactive 3D learning materials, real-time collaboration tools, and personalized learning paths. The AR interface allows students to manipulate educational content in three-dimensional space, making abstract concepts more tangible and engaging.

The design process focused on creating an intuitive and accessible interface that works seamlessly across different AR devices, ensuring that the technology enhances rather than complicates the learning experience. Extensive research with homeschooling families informed the development of features that address real educational challenges.`,
    media: [
    ],
    media3: [
      { type: 'image', src: 'project/view_main.png' }
    ],
    link: {
      url: 'https://www.example.com/grad-show',
      text: '>> View in Grad Show'
    },
    media4: [
      { type: 'video', src: 'project/view-1.mp4' },
      { type: 'video', src: 'project/view-2.mp4' },
      { type: 'video', src: 'project/view-3.mp4' }
    ],
    tools: [
      'Unity',
      'Blender',
      'Figma',
      'Sketch',
      'AR Foundation',
      'User Research',
      'Prototyping',
      'XR Design'
    ]
  }
}; 