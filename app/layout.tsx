import React from 'react'
import Link from 'next/link'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">GQu Web Design</Link>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/contents" className="hover:text-gray-300">Contents</Link></li>
              <li><Link href="/architecture" className="hover:text-gray-300">Architecture</Link></li>
              <li><Link href="/interior-design" className="hover:text-gray-300">Interior Design</Link></li>
              <li><Link href="/client-design" className="hover:text-gray-300">Client Design</Link></li>
            </ul>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}