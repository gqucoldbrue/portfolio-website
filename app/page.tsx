import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-light">
      <header className="bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-semibold">Your Name</div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#home" className="px-4 py-2 rounded bg-gradient-to-r from-gray-200 to-gray-300 text-red-500 font-medium">
                  Home /
                </Link>
              </li>
              <li>
                <Link href="#projects" className="px-4 py-2 rounded bg-gradient-to-r from-gray-200 to-gray-300 text-blue-500 font-medium">
                  Projects /
                </Link>
              </li>
              <li>
                <Link href="#about" className="px-4 py-2 rounded bg-gradient-to-r from-gray-200 to-gray-300 text-green-500 font-medium">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section id="home" className="bg-yellow-400 py-20">
          <div className="container mx-auto flex items-center justify-between px-4">
            <div>
              <h1 className="text-5xl font-bold text-black mb-4">Web Developer & Designer</h1>
              <p className="text-xl text-gray-800">Crafting digital experiences for creative professionals</p>
            </div>
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Your Name"
              width={300}
              height={300}
              className="rounded-full object-cover"
            />
          </div>
        </section>

        <section id="projects" className="py-20 bg-red-500">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-semibold mb-10 text-white">/ Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Architect Portfolio", desc: "Minimalist design for a renowned architect" },
                { title: "Graphic Designer Showcase", desc: "Bold and colorful portfolio for a graphic artist" },
                { title: "Fashion Designer Lookbook", desc: "Elegant and responsive design for a fashion brand" },
                { title: "Model Portfolio", desc: "Sleek and modern showcase for a professional model" },
              ].map((project, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={`/placeholder.svg?height=200&width=250`}
                    alt={project.title}
                    width={250}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-blue-500">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-semibold mb-10 text-white">/ About Me</h2>
            <div className="text-white text-lg space-y-4">
              <p>
                As a web developer and designer, I specialize in creating stunning digital experiences for creative professionals. With a keen eye for design and a strong technical background, I bring visions to life through clean code and captivating visuals.
              </p>
              <p>
                My expertise spans across various creative fields, allowing me to craft tailored solutions for architects, graphic designers, fashion designers, and models. Each project is an opportunity to push the boundaries of digital design and create something truly unique.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}