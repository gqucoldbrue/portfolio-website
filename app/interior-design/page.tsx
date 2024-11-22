import React from 'react'
import Image from 'next/image'

export default function InteriorDesign() {
  const designs = [
    { name: 'Modern Living Room', description: 'A sleek and minimalist living room design with a focus on comfort and style.' },
    { name: 'Cozy Bedroom Retreat', description: 'A warm and inviting bedroom design that promotes relaxation and restful sleep.' },
    { name: 'Gourmet Kitchen', description: 'A functional and beautiful kitchen design perfect for cooking enthusiasts and entertainers.' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 via-orange-400 to-yellow-400">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-white">Interior Design Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
              <Image
                src={`/placeholder.svg?height=300&width=400`}
                alt={design.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-white">{design.name}</h2>
                <p className="text-orange-100">{design.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}