import React from 'react'
import Link from 'next/link'

export default function TableOfContents() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-red-500">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-6xl font-bold mb-6">GQu Web Design</h1>
          <p className="text-2xl mb-12">Crafting digital experiences that inspire and innovate</p>
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300">
              Home
            </Link>
            <Link href="/architecture" className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300">
              Architecture
            </Link>
            <Link href="/interior-design" className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300">
              Interior Design
            </Link>
            <Link href="/client-design" className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300">
              Client Design
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}