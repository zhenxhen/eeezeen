import type { ProjectData } from '../types/project';

export const wheeling: ProjectData = {
  main: {
    id: '007',
    title: 'Wheeling',
    thumbnail: 'project/wheeling.png',
    image: 'project/wheeling.png',
    category: ['Product design'],
    link: '/works/wheeling'
  },
  menu: {
    id: 'wheeling',
    label: 'Wheeling',
    icon: 'project/icons/wheeling.png',
    url: '/works/wheeling'
  },
  detail: {
    projectName: "Wheeling",
    year: "2019",
    subtitle: "Personal work",
    description: `This is a third-party product and service designed to assist and improve wheelchair and mobility driving. It allows users to report inconveniences experienced during travel to public institutions and helps with barrier-free navigation.

The Wheeling project addresses the critical need for accessible mobility solutions in urban environments. By providing a comprehensive platform for wheelchair users and mobility aid users, this service enables real-time reporting of accessibility barriers and navigation challenges.

Key features include location-based barrier reporting, community-driven accessibility mapping, real-time navigation assistance optimized for wheelchair access, and integration with public transportation systems. The service empowers users to contribute to a more inclusive environment while helping others navigate more safely and efficiently.

The design approach focused on creating an intuitive interface that prioritizes accessibility principles, ensuring the service itself is fully accessible to users with various mobility needs. Through user research and collaborative design with disability advocates, the platform serves as both a practical tool and a catalyst for positive change in urban accessibility.`,
    media: [
    ],
      media3: [
        { type: 'image', src: 'project/wheeling_main.png' }
      ],
      media2: [
        { type: 'image', src: 'project/wheeling-1.png' },
        { type: 'image', src: 'project/wheeling-2.png' },
        { type: 'image', src: 'project/wheeling-3.png' }
      ],
    tools: [
      'Figma',
      'Sketch',
      'Rhino',
      'KeyShot',
      'User Research',
      'Prototyping',
      'Service Design'
    ]
  }
}; 