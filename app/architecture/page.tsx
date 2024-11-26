import Image from 'next/image'

export default function Architecture() {
  const projects = [
    { title: 'Modern Skyscraper', description: 'A sleek, sustainable skyscraper design for urban environments.' },
    { title: 'Eco-Friendly Home', description: 'An innovative residential design focusing on sustainability and energy efficiency.' },
    { title: 'Cultural Center', description: 'A multi-functional space designed to celebrate and showcase local culture.' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-300 via-lime-400 to-yellow-300">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-white">Architecture Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <Image
                src={`/placeholder.svg`}
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