import type { Metadata } from "next";
import "./globals.css";
import LeftNavigation, { NavigationProvider } from "../components/LeftNavigation";
import { ThemeProvider } from "../contexts/ThemeContext";
import MainContent from "../components/MainContent";

export const metadata: Metadata = {
  title: "eeezeen",
  description: "Humanizing Technology",
  keywords: ["AI Design", "UX Design", "Interaction Design", "Creative Computing", "Samsung Electronics"],
  authors: [{ name: "Jinwon Lee", url: "https://eeezeen.com" }],
  creator: "eeezeen",
  publisher: "eeezeen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://eeezeen.com'),
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eeezeen.com',
    siteName: 'eeezeen',
    title: 'eeezeen // Jinwon Lee',
    description: 'Humanizing Technology',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'eeezeen // Jinwon Lee',
      },
      {
        url: '/og-image-square.jpg',
        width: 1080,
        height: 1080,
        alt: 'eeezeen // Jinwon Lee',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'eeezeen // Jinwon Lee',
    description: 'Humanizing Technology',
    creator: '@eeezeen',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: 'your-google-site-verification',
  //   yandex: 'your-yandex-verification',
  //   yahoo: 'your-yahoo-verification',
  // },
  alternates: {
    canonical: 'https://eeezeen.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/mgo1umb.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script dangerouslySetInnerHTML={{
          __html: `
            // 우클릭 방지
            document.addEventListener('contextmenu', function(e) {
              e.preventDefault();
              return false;
            });
            
            // 드래그 방지
            document.addEventListener('dragstart', function(e) {
              e.preventDefault();
              return false;
            });
            
            // 선택 방지
            document.addEventListener('selectstart', function(e) {
              if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
                e.preventDefault();
                return false;
              }
            });
            
            // 키보드 단축키 방지
            document.addEventListener('keydown', function(e) {
              // F12 (개발자 도구)
              if (e.keyCode === 123) {
                e.preventDefault();
                return false;
              }
              
              // Ctrl+S (저장)
              if (e.ctrlKey && e.keyCode === 83) {
                e.preventDefault();
                return false;
              }
              
              // Ctrl+A (전체 선택)
              if (e.ctrlKey && e.keyCode === 65) {
                e.preventDefault();
                return false;
              }
              
              // Ctrl+U (소스 보기)
              if (e.ctrlKey && e.keyCode === 85) {
                e.preventDefault();
                return false;
              }
              
              // Ctrl+Shift+I (개발자 도구)
              if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
                e.preventDefault();
                return false;
              }
              
              // Ctrl+Shift+C (요소 검사)
              if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
                e.preventDefault();
                return false;
              }
              
              // Ctrl+Shift+J (콘솔)
              if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
                e.preventDefault();
                return false;
              }
            });
          `
        }} />
      </head>
      <body className="flex h-screen">
        <ThemeProvider>
          <NavigationProvider>
            <LeftNavigation />
            <MainContent>
              {children}
            </MainContent>
          </NavigationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
