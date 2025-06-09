import emailjs from '@emailjs/browser';

// EmailJS 설정
const EMAILJS_SERVICE_ID = 'eeezeen';
const EMAILJS_TEMPLATE_ID = 'template_nk1pp2e';
const EMAILJS_PUBLIC_KEY = 'qWENviSVw7pIuIC5E';

// EmailJS 초기화
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface EmailData {
  subject: string;
  message: string;
  from_name?: string;
  from_email?: string;
}

export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    const templateParams = {
      subject: emailData.subject,
      message: emailData.message,
      from_name: emailData.from_name || 'Website Visitor',
      name: emailData.from_name || 'Website Visitor', // 추가: name 변수도 포함
      from_email: emailData.from_email || 'noreply@website.com',
      to_name: 'eeezeen',
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error: any) {
    console.error('Failed to send email:', error);
    console.error('Error details:', {
      text: error.text,
      status: error.status,
      message: error.message
    });
    return false;
  }
}; 