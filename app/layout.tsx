import React from 'react'
import Link from 'next/link'
import './globals.css'

const navigation = [
  { name: 'Home', href: '/', gradient: 'from-yellow-300 to-yellow-400' },
  { name: 'Architecture', href: '/architecture', gradient: 'from-lime-300 to-yellow-300' },
  { name: 'Interior Design', href: '/interior-design', gradient: 'from-orange-300 to-yellow-400' },
  { name: 'Web Design Showcase', href: '/web-design-showcase', gradient: 'from-blue-900 to-purple-500' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200">
        <header className="bg-black bg-opacity-95 backdrop-filter backdrop-blur-lg p-4 rounded-b-lg sticky top-0 z-50">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link 
              href="/" 
              className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
            >
              ATELIER GQ STUDIO
            </Link>
            
            <nav>
              <ul className="flex flex-wrap justify-center gap-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className={`px-4 py-2 rounded-full bg-gradient-to-r ${item.gradient} text-white font-medium hover:opacity-90 transition duration-300`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg text-white py-6 rounded-t-lg mt-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} ATELIER GQ STUDIO. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}