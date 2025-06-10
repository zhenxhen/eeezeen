'use client';

import { useState } from 'react';
import { useNavigation } from '../../components/LeftNavigation';
import { getResponsivePadding, getSectionClasses } from '../../utils/layoutUtils';
import { sendEmail } from '../../services/emailService';

export default function Contact() {
  const { isCollapsed, isMobile } = useNavigation();
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const contactInfo = [
    {
      id: '001',
      type: 'Mail',
      value: 'eeezeen@gmail.com',
    },
    {
      id: '002',
      type: 'Instagram',
      value: <a href="https://instagram.com/eeezeen" target="_blank" rel="noopener noreferrer">eeezeen</a>,
    },
    {
      id: '003',
      type: 'LinkedIn',
      value: <a href="https://www.linkedin.com/in/jinwon-eugene-lee/" target="_blank" rel="noopener noreferrer">Jinwon Lee</a>,
    },
  ];

  const collaborationAreas = [
    {
        id: '001',
        area: 'AI Projects',
        description: 'Artificial intelligence integration and extended reality experiences'
      },
    {
      id: '002',
      area: 'UX/UI Design',
      description: 'Mobile app design, web design, and user interface development'
    },

    {
      id: '003',
      area: 'Universal Design',
      description: 'Design for all, including accessibility and inclusive design'
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content Area */}
      <div>
        {/* Header */}
        <header 
          className={`flex ${isMobile ? 'justify-start' : 'justify-between'} header-align pr-12 pl-6 py-8`}
          style={{
            ...getResponsivePadding(isCollapsed),
            ...(isMobile && {
              paddingLeft: '2rem', // 본문 마진과 동일하게 조정
              paddingRight: '2rem', // 우측도 동일하게 조정
              position: 'fixed' as const,
              top: 0,
              left: 0,
              right: 0,
              backgroundColor: '#000000',
              zIndex: 998, // 네비게이션보다 낮지만 본문보다 높게
            })
          }}
        >
          <div className="header-left">
            <h1 className="font-normal">eeezeen</h1>
            <h2 className="text-gray-500 italic" style={{ marginTop: '-5px' }}>Jinwon Lee</h2>
          </div>
          {/* 모바일에서는 소셜 링크 숨기기 */}
          {!isMobile && (
            <nav className="flex space-x-12">
              <a href="#" className="nav-link">Instagram</a>
              <a href="#" className="nav-link">Twitter</a>
              <a href="#" className="nav-link">LinkedIn</a>
              <a href="#" className="nav-link">Youtube</a>
            </nav>
          )}
        </header>

        {/* Email Contact Form Section */}
        <section 
          className={getSectionClasses('mb-16')}
          style={{
            ...getResponsivePadding(isCollapsed),
            ...(isMobile && {
              paddingTop: '8rem', // 고정된 헤더 높이만큼 상단 패딩 추가
              paddingLeft: '2rem', // 모바일에서 좌측 마진 줄임
              paddingRight: '2rem', // 모바일에서 우측 마진도 조정
            })
          }}
        >
          <h3 className="font-normal mb-12">&lt;<span className="text-pink">Send Mail</span>&gt;</h3>
          
          <div className="pl-6 space-y-6" style={{ borderLeft: '1px solid #4b5563'}}>
            <div style={{ marginBottom: '2rem' }}>
              {/* Name Field */}
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <p className="text-pink border-l-0" style={{ minWidth: '80px', margin: 0 }}>Name:</p>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex-1 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 py-2 px-0 focus:border-pink-400 focus:outline-none transition-colors"
                  style={{ 
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid #4b5563',
                    fontSize: '14px',
                    fontFamily: 'source-code-pro, monospace',
                    padding: '10px',
                    marginLeft: '1rem',
                    marginRight: '30px'
                  }}
                />
              </div>

              {/* Subject Field */}
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <p className="text-pink border-l-0" style={{ minWidth: '80px', margin: 0 }}>Subject:</p>
                <input
                  type="text"
                  placeholder="Enter your subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="flex-1 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 py-2 px-0 focus:border-pink-400 focus:outline-none transition-colors"
                  style={{ 
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid #4b5563',
                    fontSize: '14px',
                    fontFamily: 'source-code-pro, monospace',
                    padding: '10px',
                    marginRight: '30px'
                  }}
                />
              </div>

              {/* Message Field */}
              <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <p className="text-pink border-l-0" style={{ minWidth: '60px', margin: 0, paddingTop: '8px' }}>Message:</p>
                <textarea
                  placeholder="Enter your message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 bg-transparent border border-gray-600 text-white placeholder-gray-500 py-2 px-3 focus:border-pink-400 focus:outline-none transition-colors resize-none"
                  style={{ 
                    backgroundColor: 'transparent',
                    border: '1px solid #4b5563',
                    fontSize: '14px',
                    fontFamily: 'source-code-pro, monospace',
                    padding: '10px',
                    marginTop: '1rem',
                    marginRight: '30px'
                  }}
                />
              </div>

              {/* Send Button */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <div style={{ minWidth: '80px' }}></div>
                <button
                  className="text-white hover:text-pink transition-colors"
                  style={{ 
                    backgroundColor: 'transparent',
                    fontSize: '14px',
                    fontFamily: 'source-code-pro, monospace',
                    cursor: 'pointer',
                    border: 'none',
                    padding: '0px 0',
                    color: '#ffffff'
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLButtonElement).style.color = '#E394DC';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLButtonElement).style.color = '#ffffff';
                  }}
                  onClick={async () => {
                    if (!name.trim() || !subject.trim() || !message.trim()) {
                      alert('Please fill in name, subject and message');
                      return;
                    }

                    setIsLoading(true);
                    
                    const success = await sendEmail({
                      subject: subject.trim(),
                      message: message.trim(),
                      from_name: name.trim()
                    });

                    setIsLoading(false);

                    if (success) {
                      alert('Email sent successfully!');
                      setName('');
                      setSubject('');
                      setMessage('');
                    } else {
                      alert('Failed to send email. Please try again.');
                    }
                  }}
                  disabled={isLoading}
                                  >
                    {isLoading ? '>> Sending...' : '>> Send Mail'}
                  </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section 
          className={getSectionClasses('mb-16')}
          style={{
            ...getResponsivePadding(isCollapsed),
            ...(isMobile && {
              paddingLeft: '2rem', // 모바일에서 좌측 마진 줄임
              paddingRight: '2rem', // 모바일에서 우측 마진도 조정
            })
          }}
        >
          <h3 className="font-normal mb-12">&lt;<span className="text-blue">Contact</span>&gt;</h3>
          
          <div className="pl-6 space-y-6" style={{ borderLeft: '1px solid #4b5563'}}>
            {contactInfo.map((contact) => (
              <div key={contact.id} style={{ marginBottom: '2rem' }}>
                <div className="flex items-start" style={{ marginBottom: '-0.75rem' }}>
                  <p className="text-blue mb-2 border-l-0">{contact.type}</p>
                </div>
                <p className="text-white mb-1 border-l-0">{contact.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Collaboration Areas Section */}
        <section 
          className={getSectionClasses('mb-16')}
          style={{
            ...getResponsivePadding(isCollapsed),
            ...(isMobile && {
              paddingLeft: '2rem', // 모바일에서 좌측 마진 줄임
              paddingRight: '2rem', // 모바일에서 우측 마진도 조정
            })
          }}
        >
          <h3 className="font-normal mb-12">&lt;<span className="text-purple">Areas</span>&gt;</h3>
          
          <div className="pl-6 space-y-6" style={{ borderLeft: '1px solid #4b5563'}}>
            {collaborationAreas.map((area) => (
              <div key={area.id} style={{ marginBottom: '2rem' }}>
                <div className="flex items-start" style={{ marginBottom: '-0.75rem' }}>
                  <p className="text-purple mb-2 border-l-0">{area.area}</p>
                </div>
                <p className="text-gray-300 leading-relaxed border-l-0">{area.description}</p>
              </div>
            ))}
          </div>
        </section>


      </div>
    </div>
  );
} 