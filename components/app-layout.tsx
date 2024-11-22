import React from 'react'
import Link from 'next/link'

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200">
      <header className="bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg p-4 rounded-b-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-semibold">Your Name</Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-white hover:text-gray-300">Home</Link>
              </li>
              <li>
                <Link href="#projects" className="text-white hover:text-gray-300">Projects</Link>
              </li>
              <li>
                <Link href="#about" className="text-white hover:text-gray-300">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg text-white py-6 rounded-t-lg mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}