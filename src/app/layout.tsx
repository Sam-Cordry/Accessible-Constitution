import './globals.css'
import type { Metadata } from 'next'
import Image from 'next/image'

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
      <nav className="bg-csh-purple w-full max-h-16 h-16">
        <a href="/" className='inline-block items-center ml-14 my-3'>

          <div className='float-left'>
            <Image priority src='https://assets.csh.rit.edu/pubsite/csh_logo_square.svg' alt='CSH Logo' width={40} height={40}
              className="object-contain h-auto max-w-full" />
          </div>

          <div className="text-white pl-3 pt-0.5 text-2xl font-light float-right">Constitution</div>
        </a>

      </nav>
      <main>{children}</main>
    </div>
  )
}
