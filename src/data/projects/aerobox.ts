import type { ProjectData } from '../types/project';

export const aerobox: ProjectData = {
  main: {
    id: '009',
    title: 'Aerobox',
    thumbnail: 'project/aerobox.png',
    image: 'project/aerobox.png',
    category: ['Product'],
    link: '/works/aerobox'
  },
  menu: {
    id: 'aerobox',
    label: 'Aerobox',
    icon: 'project/icons/aerobox.png',
    url: '/works/aerobox'
  },
  detail: {
    projectName: "Aerobox",
    year: "2021",
    subtitle: "Drone deliveries home appliance",
    description: `Aerobox is a new home appliance designed for the domestic distribution of drone deliveries. It can be installed in any house window. The focus is on the growth of the drone delivery industry and the expansion of its infrastructure.

This innovative product design addresses the emerging need for secure drone delivery reception in residential environments. As drone delivery services expand globally, Aerobox provides a standardized solution that seamlessly integrates into existing home architecture while ensuring package security and weather protection.

Key features include automated package reception, secure storage compartments, weather-resistant design, and smart notification systems that alert homeowners when deliveries arrive. The modular design allows for easy installation in various window types and sizes, making it accessible for different housing configurations.

The design process focused on creating a solution that balances functionality with aesthetic appeal, ensuring that the device enhances rather than detracts from home appearance. Extensive research into drone delivery logistics and residential integration challenges informed the development of this forward-thinking product.`,
    media: [
    ],
    media3: [
      { type: 'image', src: 'project/aerobox_main.png' }
    ],
    media4: [
      { type: 'image', src: 'project/aerobox-2.png' },
      { type: 'image', src: 'project/aerobox-1.png' },
      { type: 'image', src: 'project/aerobox-3.png' }
    ],
    link: {
      url: 'https://www.behance.net/gallery/115815887/Aerobox-Pioneer-of-post-Product-UX-UI',
      text: '>> View in Behance'
    },
    tools: [
      'Rhino',
      'KeyShot',
      'Figma',
      'Sketch',
      'User Research',
      'Prototyping',
      'Product Development',
    ]
  }
}; 