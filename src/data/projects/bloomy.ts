import type { ProjectData } from '../types/project';

export const bloomy: ProjectData = {
  main: {
    id: '007',
    title: 'Bloomy',
    thumbnail: 'project/bloomy.png',
    image: 'project/bloomy.png',
    category: ['AI', 'Product'],
    link: '/works/bloomy'
  },
  menu: {
    id: 'bloomy',
    label: 'Bloomy',
    icon: 'project/icons/bloomy.png',
    url: '/works/bloomy'
  },
  detail: {
    projectName: "Bloomy",
    year: "2020",
    subtitle: "Universal Smartwatch",
    description: `The AI smartwatch is designed for the hearing impaired and those who have difficulty in conversations. Seamlessly integrates into the context of conversations, records, and displays them. Bridges the gap in communication between people.

This innovative accessibility-focused smartwatch leverages artificial intelligence to break down communication barriers for the hearing impaired community. By using advanced speech recognition and natural language processing, Bloomy captures spoken conversations in real-time and presents them in a clear, readable format on the watch display.

Key features include real-time conversation transcription, contextual understanding of dialogue flow, multi-language support, and adaptive text sizing for optimal readability. The device also incorporates haptic feedback to alert users when new conversations begin or when they are being directly addressed.

The design process emphasized universal design principles, ensuring that the technology is not only functional but also aesthetically pleasing and socially inclusive. Extensive user research with the hearing impaired community informed every aspect of the interface design and interaction patterns.`,
    media: [
    ],
    media3: [
      { type: 'image', src: 'project/bloomy_main.png' }
    ],
    media2: [
        { type: 'image', src: 'project/bloomy-1.png' },
        { type: 'image', src: 'project/bloomy-2.png' },
        { type: 'image', src: 'project/bloomy-3.png' }
      ],
    link: {
      url: 'https://adp.dcb.or.kr/ibda/winner?category&key&keyword&command=awards&url=%2Fibda%2Fwinner&year=2020&page=1',
      text: '>> View in Awards page'
    },
    tools: [
      'Figma',
      'Sketch',
      'Rhino',
      'KeyShot',
      'Figma',
      'Sketch',
      'User Research',
      'Prototyping',
      'Product Development',
      'Prototyping'
    ]
  }
}; 