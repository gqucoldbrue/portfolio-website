'use client'

import React from 'react'
import Link from 'next/link'

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200">
      <header className="bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg p-4 rounded-b-lg sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="text-white text-2xl font-semibold hover:text-gray-300 transition-colors"
          >
            STUDIO GQ
          </Link>
          
          <nav>
            <ul className="flex space-x-6">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg text-white py-6 rounded-t-lg">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} STUDIO GQ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}