import './globals.css'
import type { Metadata } from 'next'
import '../components/navbar'
import Navbar from '../components/navbar'

export const metadata: Metadata = {
  title: "CSH Constitution",
  authors: [{ name: "Computer Science House" }],
  icons: {
    icon: 'https://assets.csh.rit.edu/pubsite/csh_logo_square.svg',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}
