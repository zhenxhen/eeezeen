import type { Metadata } from "next";
import "./globals.css";
import LeftNavigation, { NavigationProvider } from "../components/LeftNavigation";
import MainContent from "../components/MainContent";

export const metadata: Metadata = {
  title: "eeezeen - Jinwon Lee",
  description: "AI Design Engineer - Humanizing Technology",
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
        <NavigationProvider>
          <LeftNavigation />
          <MainContent>
            {children}
          </MainContent>
        </NavigationProvider>
      </body>
    </html>
  );
}
