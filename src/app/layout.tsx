import React from "react";
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/molecules/Navbar";

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// display: flex;
// justify-content: space-between;
// align-items: center;
// padding: 8px;
// border-bottom: 1px solid #132f52;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className} w-full max-w-screen-xl overflow-auto mx-auto`}>
        <header className='sticky border-b'>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
