'use client';

import { useNavigation } from '../../components/LeftNavigation';

export default function About() {
  const { isCollapsed } = useNavigation();

  const experiences = [
    {
      id: '001',
      period: '2022 - Present',
      company: <a href="https://design.samsung.com/global/" target="_blank" rel="noopener noreferrer" className="text-blue">Samsung Electronics</a>,
      position: 'Interaction Designer',
      description: 'Mobile UX, On-device AI, XR UX, Wearable UX, User Data Analysis',
      location: '// Seoul, Korea'
    },
    {
      id: '002',
      period: '2020 - 2021',
      company: <a href="https://www.design.samsung.com/global/contents/sdm/" target="_blank" rel="noopener noreferrer" className="text-blue">Samsung Design Membership</a>,
      position: 'UX Designer',
      description: 'Industry-academic products and personal projects focused on universal design, AI, IoT, XR',
      location: '// Seoul, Korea'
    }
  ];

  const education = [
    {
      id: '001',
      school: <a href="https://www.ual.ac.uk/courses/msc-creative-computing-institute" target="_blank" rel="noopener noreferrer" className="text-yellow">ual: Creative Computing Institute</a>,
      degree: 'MSc/MA Creative Computing',
      location: '// London, UK'
    },
    {
      id: '002',
      school: <a href="https://www.sadi.net/" target="_blank" rel="noopener noreferrer" className="text-yellow">SADI</a>,
      degree: 'BA Visual Communication Design',
      location: '// Seoul, Korea'
    }
  ];

  const awards = [
    {
      id: '001',
      year: '2024',
      title: 'Runway [Gen:48]',
      organization: 'Official Selection',
      project: ''
    },
    {
      id: '002',
      year: '2024',
      title: 'CineTech Future Fest 2024',
      organization: 'Official Selection',
      project: ''
    },
    {
      id: '003',
      year: '2022',
      title: 'K-Design Award',
      organization: 'Winner',
      project: ''
    },
    {
      id: '004',
      year: '2022',
      title: 'International Busan Design Award',
      organization: 'Best Designer',
      project: ''
    },
    {
      id: '005',
      year: '2022',
      title: 'Korea International Design Award',
      organization: 'Special Prize, Winner(2)',
      project: ''
    },
    {
      id: '006',
      year: '2022',
      title: 'Reddot : Concept',
      organization: 'Finalist(3)',
      project: ''
    },
    {
      id: '007',
      year: '2022',
      title: 'Asia Design Prize',
      organization: 'Gold Prize',
      project: ''
    },
    {
      id: '008',
      year: '2020',
      title: 'International Busan Design Award',
      organization: 'Grand Prize',
      project: ''
    },
    {
      id: '009',
      year: '2020',
      title: 'Universal Design Award',
      organization: 'Special Prize',
      project: ''
    }
  ];

  const exhibitions = [
    {
      id: '001',
      title: 'Korea Young Designer Exhibition',
      organization: 'Sookmyung Women\'s University, Seoul',
      project: 'Universal Design Project Utilising AI',
      year: '2022'
    },
    {
      id: '002',
      title: 'Samsung Design Membership Emergence Project',
      organization: 'Samsung Seoul R&D Center, Seoul',
      project: 'AI Playlist Project Utilizing AR and IoT, Virtual school experience in AR environment',
      year: '2021'
    },
    {
      id: '003',
      title: 'Samsung Design Membership Convergence Project',
      organization: 'Samsung Seoul R&D Center, Seoul',
      project: 'Products for Home Office Environments',
      year: '2022'
    },
    {
      id: '004',
      title: 'Graduation Exhibition',
      organization: 'SADI, Seoul',
      project: 'Project to User-Customised Theme Park AR Environments, Online Community and Social Rehabilitation Services for Seniors, Graduation Preparation Committee',
      year: '2021'
    },
    {
      id: '005',
      title: 'Busan Design Week',
      organization: 'BEXCO, Busan',
      project: 'AI Smartwatch for the Hearing Impaired and People with Communication Difficulties',
      year: '2021'
    },
    {
      id: '006',
      title: 'Hanul Exhibition',
      organization: 'National Korean Museum, Seoul',
      project: 'Korean typographic Project',
      year: '2021'
    },
    {
      id: '007',
      title: 'Weltformat Korea Festival',
      organization: 'KF gallery, Seoul',
      project: 'Infographic poster exhibition about History of the Human Rights Movement in Korea',
      year: '2020'
    }
  ];

  const publications = [
    {
      id: '001',
      title: 'Seoul National University Graduation Exhibition Invited Speaker',
      year: 'Dec. 2023'
    },
    {
      id: '002',
      title: 'Hongik University Graduation Exhibition Invited Speaker',
      year: 'Dec. 2023'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content Area */}
      <div>
        {/* Header */}
        <header 
          className="flex justify-between header-align pr-12 pl-6 py-8"
          style={{
            paddingLeft: isCollapsed ? '6rem' : '1.5rem',
            transition: 'padding-left 0.3s ease'
          }}
        >
          <div className="header-left">
            <h1 className="font-normal">eeezeen</h1>
            <h2 className="text-gray-500 italic" style={{ marginTop: '-5px' }}>Jinwon Lee</h2>
          </div>
          <nav className="flex space-x-12">
            <a href="#" className="nav-link">Instagram</a>
            <a href="#" className="nav-link">Twitter</a>
            <a href="#" className="nav-link">LinkedIn</a>
            <a href="#" className="nav-link">Youtube</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section 
          className="pr-12 pl-6 py-16"
          style={{
            paddingLeft: isCollapsed ? '6rem' : '1.5rem',
            transition: 'padding-left 0.3s ease'
          }}
        >
          <div className="max-w-2xl">
            <p className="mb-6 leading-relaxed">
              Believing that technology should be inclusive and accessible to everyone, striving to create meaningful and impactful experiences through user-centered design.
            </p>


          </div>
        </section>

        {/* Experience Section */}
        <section 
          className="pr-12 pl-6 py-8 mb-16"
          style={{
            paddingLeft: isCollapsed ? '6rem' : '1.5rem',
            transition: 'padding-left 0.3s ease'
          }}
        >
          <h3 className="font-normal mb-12">&lt;<span className="text-blue">Experience</span>&gt;</h3>
          
          <div className="pl-6 space-y-6" style={{ borderLeft: '1px solid #4b5563'}}>
            {experiences.map((exp) => (
              <div key={exp.id} style={{ marginBottom: '2rem' }}>
                <div className="flex items-start" style={{ marginBottom: '-0.75rem' }}>
                  <p className="text-blue mb-2 border-l-0">{exp.company}</p>
                  <p className="text-gray-500 text-sm border-l-0">{exp.location}</p>
                </div>
                <p className="text-white mb-1 border-l-0">{exp.position}</p>
                <p className="text-gray-300 leading-relaxed border-l-0">{exp.description}</p>
                <p className="text-gray-500 text-sm border-l-0">{exp.period}</p>

              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section 
          className="pr-12 pl-6 py-8 mb-16"
          style={{
            paddingLeft: isCollapsed ? '6rem' : '1.5rem',
            transition: 'padding-left 0.3s ease'
          }}
        >
          <h3 className="font-normal mb-12">&lt;<span className="text-yellow">Education</span>&gt;</h3>
          
          <div className="pl-6 space-y-6" style={{ borderLeft: '1px solid #4b5563'}}>
            {education.map((edu) => (
              <div key={edu.id} style={{ marginBottom: '2rem' }}>
                <div className="flex items-start" style={{ marginBottom: '-0.75rem' }}>
                  <p className="text-yellow mb-2 border-l-0">{edu.school}</p>
                  <p className="text-gray-500 text-sm border-l-0">{edu.location}</p>
                </div>
                <p className="text-white mb-1 border-l-0">{edu.degree}</p>


              </div>
            ))}
          </div>
        </section>

        {/* Awards Section */}
        <section 
          className="pr-12 pl-6 py-8 mb-16"
          style={{
            paddingLeft: isCollapsed ? '6rem' : '1.5rem',
            transition: 'padding-left 0.3s ease'
          }}
        >
          <h3 className="font-normal mb-12">&lt;<span className="text-purple">Awards</span>&gt;</h3>
          
          <div className="pl-6 space-y-6" style={{ borderLeft: '1px solid #4b5563'}}>
            {awards.map((award) => (
              <div key={award.id} style={{ marginBottom: '2rem' }}>
                <div className="flex items-start" style={{ marginBottom: '-0.75rem' }}>
                  <p className="text-purple mb-2 border-l-0">{award.title}</p>
                </div>
                <p className="text-white mb-1 border-l-0">{award.organization}</p>
                <p className="text-gray-300 leading-relaxed border-l-0">{award.project}</p>
                <p className="text-gray-500 text-sm border-l-0">{award.year}</p>

              </div>
            ))}
          </div>
        </section>

        {/* Exhibition Section */}
        <section 
          className="pr-12 pl-6 py-8 mb-16"
          style={{
            paddingLeft: isCollapsed ? '6rem' : '1.5rem',
            transition: 'padding-left 0.3s ease'
          }}
        >
          <h3 className="font-normal mb-12">&lt;<span className="text-blue">Exhibition</span>&gt;</h3>
          
          <div className="pl-6 space-y-6" style={{ borderLeft: '1px solid #4b5563'}}>
            {exhibitions.map((exhibition) => (
              <div key={exhibition.id} style={{ marginBottom: '2rem' }}>
                <div className="flex items-start" style={{ marginBottom: '-0.75rem' }}>
                  <p className="text-blue mb-2 border-l-0">{exhibition.title}</p>
                  <p className="text-gray-500 text-sm border-l-0">{/* // */} {exhibition.organization}</p>
                </div>
                <p className="text-white mb-1 border-l-0">{exhibition.project}</p>
                <p className="text-gray-500 text-sm border-l-0">{exhibition.year}</p>

              </div>
            ))}
          </div>
        </section>

        {/* Publication & Invited Talk Section */}
        <section 
          className="pr-12 pl-6 py-8 mb-16"
          style={{
            paddingLeft: isCollapsed ? '6rem' : '1.5rem',
            transition: 'padding-left 0.3s ease'
          }}
        >
          <h3 className="font-normal mb-12">&lt;<span className="text-pink">Publication & Invited talk</span>&gt;</h3>
          
          <div className="pl-6 space-y-6" style={{ borderLeft: '1px solid #4b5563'}}>
            {publications.map((publication) => (
              <div key={publication.id} style={{ marginBottom: '2rem' }}>
                <div className="flex items-start" style={{ marginBottom: '-0.75rem' }}>
                  <p className="text-pink mb-2 border-l-0">{publication.title}</p>
                </div>
                <p className="text-gray-500 text-sm border-l-0">{publication.year}</p>

              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 