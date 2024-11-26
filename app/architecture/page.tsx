import React from 'react'
import Image from 'next/image'

export default function Architecture() {
  const projects = [
    { title: 'Modern Multi-Unit Historic Residence', description: 'A modern iteration of classical styling that combines urban sustaiable elements with cues from the 19th century.' },
    { title: 'Eco-Friendly Modular Home', description: 'An innovative residential design focusing on sustainability and energy efficiency.' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-300 via-lime-400 to-yellow-300">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-white">Architecture Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
              <Image
                src={`/placeholder.svg?height=300&width=400`}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-white">{project.title}</h2>
                <p className="text-lime-100">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}