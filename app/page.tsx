'use client'

import React from 'react'
import Image from 'next/image'
import { PageLayout } from "./components/page-layout"

interface Project {
  title: string
  desc: string
  imageHeight: number
  imageWidth: number
}

export default function HomePage() {
  const projects: Project[] = [
    {
      title: "Architect Portfolio",
      desc: "Minimalist design for a renowned architect",
      imageHeight: 200,
      imageWidth: 250
    },
    {
      title: "Graphic Designer Showcase",
      desc: "Bold and colorful portfolio for a graphic artist",
      imageHeight: 200,
      imageWidth: 250
    },
    {
      title: "Fashion Designer Lookbook",
      desc: "Elegant and responsive design for a fashion brand",
      imageHeight: 200,
      imageWidth: 250
    },
    {
      title: "Model Portfolio",
      desc: "Sleek and modern showcase for a professional model",
      imageHeight: 200,
      imageWidth: 250
    }
  ]

  return (
    <PageLayout>
      <div className="space-y-8">
        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-br from-yellow-300 to-yellow-400 py-20 rounded-b-lg">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-8">
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-8 w-full md:w-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Web Developer & Designer
              </h1>
              <p className="text-lg md:text-xl text-gray-800">
                Crafting digital experiences for creative professionals
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg"
                alt="Profile"
                width={300}
                height={300}
                className="rounded-full object-cover border-4 border-white shadow-lg"
                priority
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gradient-to-br from-red-400 to-red-500 rounded-t-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-white">
              / Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.title}
                  className="group bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative">
                    <Image
                      src={`/placeholder.svg`}
                      alt={project.title}
                      width={project.imageWidth}
                      height={project.imageHeight}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-200">
                      {project.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-t-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-white">
              / About Me
            </h2>
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-8 text-white">
              <div className="prose prose-lg prose-invert max-w-none space-y-4">
                <p>
                  As a web developer and designer, I specialize in creating stunning digital experiences 
                  for creative professionals. With a keen eye for design and a strong technical background, 
                  I bring visions to life through clean code and captivating visuals.
                </p>
                <p>
                  My expertise spans across various creative fields, allowing me to craft tailored solutions 
                  for architects, graphic designers, fashion designers, and models. Each project is an 
                  opportunity to push the boundaries of digital design and create something truly unique.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}