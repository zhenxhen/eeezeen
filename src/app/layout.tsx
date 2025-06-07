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
