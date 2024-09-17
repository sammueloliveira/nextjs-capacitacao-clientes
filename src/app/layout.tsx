import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from '@/lib/utils';
import { SideBar } from '@/components/sadBar/index';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard para usuarios",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable 
        )}
      >
        <SideBar />
        {children}
      </body>
    </html>
  );
}
