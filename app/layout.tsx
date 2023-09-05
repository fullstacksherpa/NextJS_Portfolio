import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import LeftSide from '@/components/LeftSide'
import RightSide from '@/components/RightSide'
import {motion} from 'framer-motion'

export const metadata: Metadata = {
  title: 'Ongchen Sherpa',
  description: 'Nextjs personal portfolio website powered by vercel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,600;1,700&display=swap" rel="stylesheet" />
{/* {icon not working, need to fix later} */}
{/* <link rel='icon' href={iconPath}/> */}
      </head>
      <body className='font-bodyFont w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll'>
        <Navbar />
        <div className="items-center w-full h-[88vh] xl:flex gap-20 justify-between">
          <div className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
            <LeftSide />
          </div>
          <div className='h-[88vh] mx-auto p-4'>middle</div>
          <div className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'>
            <RightSide />
          </div>
        </div>
        {children}
        </body>
    </html>
  )
}
