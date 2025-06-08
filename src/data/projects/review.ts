import type { ProjectData } from '../types/project';

export const review: ProjectData = {
  main: {
    id: '002',
    title: 'REVIEW',
    thumbnail: 'project/REVIEW.jpg',
    video: 'project/REVIEW.mp4',
    image: 'project/REVIEW.jpg',
    category: ['AI', 'Product'],
    link: '/works/review'
  },
  menu: {
    id: 'review',
    label: 'REVIEW',
    icon: 'project/icons/review.png',
    url: '/works/review'
  },
  detail: {
    projectName: "REVIEW",
    year: "2025",
    subtitle: "A Relativity Experiment of Language",
    description: `The Sapir-Whorf Hypothesis is a linguistic theory suggesting that the expressions of a language influence human thought and perception of the world. According to this hypothesis, the structure and way a language is expressed directly shape our way of thinking and understanding of reality. The project "REVIEW" explores the impact of language on our perception of reality, grounded in this hypothesis.

As of 2024, global online community users surpassed 5 billion. While digital populations are growing due to rapid networking and ease of access, cybercrimes are increasing proportionally. Among these, 49.7% of cybercrimes are attributed to verbal abuse.

"REVIEW" is an AI computing project that uses a camera and a compact printer to output the scenes observed by the wearer in a negative and distorted linguistic style. Negative language patterns and malicious comments found in online communities were trained into an AI model. Through this, the project reinterprets language by bringing the online perspective into the real-world view, transforming fluent digital language into continuous printed form and exposing anonymity into a face-to-face context. It conveys a critical message about malicious comments and the negative aspects of internet culture.`,
    media: [
      { type: 'image', src: 'project/REVIEW.jpg' },
      { type: 'video', src: 'project/REVIEW.mp4' },
      { type: 'image', src: 'project/REVIEW.jpg' }
    ],
    tools: [
      'Python',
      'RaspPI OS',
      'OpenAI API'
    ]
  }
}; 