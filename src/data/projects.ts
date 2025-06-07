import { getImagePath } from '../utils/paths';

export interface ProjectMenuItem {
  id: string;
  label: string;
  icon: string;
  url: string;
}

export interface ProjectDetailData {
  projectName: string;
  year: string;
  subtitle: string;
  description: string;
  images: string[];
  tools: string[];
}

export interface ProjectMainData {
  id: string;
  title: string;
  thumbnail: string;
  video: string;
  image: string;
  category: string[];
  link: string;
}

// 통합 프로젝트 데이터 인터페이스
export interface ProjectData {
  // 메인 페이지용 데이터
  main: ProjectMainData;
  // 네비게이션용 데이터
  menu: ProjectMenuItem;
  // 상세 페이지용 데이터
  detail: ProjectDetailData;
}

// 모든 프로젝트 데이터를 통합 관리
export const allProjects: Record<string, ProjectData> = {
  'guansang': {
    main: {
      id: '001',
      title: 'Guansang',
      thumbnail: getImagePath('/project/guansang2.png'),
      video: getImagePath('/project/guansang_video.mp4'),
      image: getImagePath('/project/guansang2.png'),
      category: ['AI', 'UI', 'Labs'],
      link: '/works/guansang'
    },
    menu: {
      id: 'guansang',
      label: 'Guansang',
      icon: getImagePath('/project/icons/guansang.png'),
      url: '/works/guansang'
    },
    detail: {
      projectName: "Guansang",
      year: "2024",
      subtitle: "AI-Powered Physiognomy Interface",
      description: `Guansang is an experimental AI interface that explores the intersection of traditional physiognomy and modern machine learning. The project investigates how artificial intelligence can interpret human facial features and expressions to provide insights into personality traits and emotional states.

This project questions the boundaries between ancient wisdom and contemporary technology, examining how AI can be used to digitize and analyze traditional face-reading practices. Through machine learning algorithms, Guansang attempts to create a modern interpretation of physiognomy while addressing the ethical implications of such technology.

The interface provides real-time facial analysis and generates interpretative results based on traditional physiognomy principles, enhanced by AI processing capabilities. This project serves as both a technological experiment and a cultural commentary on the digitization of ancient practices.`,
      images: [
        getImagePath('/project/guansang2.png'),
        getImagePath('/project/guansang2.png'),
        getImagePath('/project/guansang2.png')
      ],
      tools: [
        'Machine Learning',
        'Computer Vision',
        'React',
        'Python',
        'TensorFlow'
      ]
    }
  },
  'review': {
    main: {
      id: '002',
      title: 'REVIEW',
      thumbnail: getImagePath('/project/REVIEW.jpg'),
      video: getImagePath('/project/REVIEW.mp4'),
      image: getImagePath('/project/REVIEW.jpg'),
      category: ['AI', 'Product'],
      link: '/works/review'
    },
    menu: {
      id: 'review',
      label: 'REVIEW',
      icon: getImagePath('/project/icons/review.png'),
      url: '/works/review'
    },
    detail: {
      projectName: "REVIEW",
      year: "2025",
      subtitle: "A Relativity Experiment of Language",
      description: `The Sapir-Whorf Hypothesis is a linguistic theory suggesting that the expressions of a language influence human thought and perception of the world. According to this hypothesis, the structure and way a language is expressed directly shape our way of thinking and understanding of reality. The project "REVIEW" explores the impact of language on our perception of reality, grounded in this hypothesis.

As of 2024, global online community users surpassed 5 billion. While digital populations are growing due to rapid networking and ease of access, cybercrimes are increasing proportionally. Among these, 49.7% of cybercrimes are attributed to verbal abuse.

"REVIEW" is an AI computing project that uses a camera and a compact printer to output the scenes observed by the wearer in a negative and distorted linguistic style. Negative language patterns and malicious comments found in online communities were trained into an AI model. Through this, the project reinterprets language by bringing the online perspective into the real-world view, transforming fluent digital language into continuous printed form and exposing anonymity into a face-to-face context. It conveys a critical message about malicious comments and the negative aspects of internet culture.`,
      images: [
        getImagePath('/project/REVIEW.jpg'),
        getImagePath('/project/REVIEW.jpg'),
        getImagePath('/project/REVIEW.jpg')
      ],
      tools: [
        'Python',
        'RaspPI OS',
        'OpenAI API'
      ]
    }
  },
  'finger-controller': {
    main: {
      id: '003',
      title: 'Finger Controller',
      thumbnail: getImagePath('/project/finger.jpg'),
      video: getImagePath('/project/finger.mp4'),
      image: getImagePath('/project/finger.jpg'),
      category: ['Labs'],
      link: '/works/finger-controller'
    },
    menu: {
      id: 'finger-controller',
      label: 'Finger Controller',
      icon: getImagePath('/project/icons/finger.png'),
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
        getImagePath('/project/finger.jpg'),
        getImagePath('/project/finger.jpg'),
        getImagePath('/project/finger.jpg')
      ],
      tools: [
        'OpenCV',
        'MediaPipe',
        'Python',
        'Computer Vision',
        'Machine Learning'
      ]
    }
  }
};

// 헬퍼 함수들 - 각 용도별로 데이터 추출
export const getMainPageProjects = (): ProjectMainData[] => {
  const projects = Object.values(allProjects).map(project => project.main);
  return projects;
};

export const getNavigationMenuItems = (): ProjectMenuItem[] => {
  const menuItems = Object.values(allProjects).map(project => project.menu);
  return menuItems;
};

export const getProjectDetailData = (): Record<string, ProjectDetailData> => {
  const detailData: Record<string, ProjectDetailData> = {};
  Object.keys(allProjects).forEach(key => {
    detailData[key] = allProjects[key].detail;
  });
  return detailData;
};

export const getProjectIcon = (slug: string): string => {
  const project = allProjects[slug];
  return project?.menu.icon || '📋';
};

// 기존 호환성을 위한 export (하위 호환성)
export const projectMenuItems = getNavigationMenuItems();
export const projectDetailData = getProjectDetailData(); 