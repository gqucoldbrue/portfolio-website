import React from 'react'
import Link from 'next/link'
import './globals.css'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Contents', href: '/contents' },
  { name: 'Architecture', href: '/architecture' },
  { name: 'Interior Design', href: '/interior-design' },
  { name: 'Client Design', href: '/client-design' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50 shadow-md">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link 
              href="/" 
              className="text-2xl font-bold hover:text-gray-300 transition-colors"
            >
              STUDIO GQ Design
            </Link>
            
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="hover:text-gray-300 transition-colors whitespace-nowrap text-sm sm:text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-gray-800 text-white py-6 mt-auto">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} STUDIO GQ Design. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}