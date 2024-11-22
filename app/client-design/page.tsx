import Image from 'next/image'

export default function ClientDesign() {
    const services = [
      { 
        name: 'VCO Max', 
        image: '/placeholder.svg',
        width: 200,
        height: 200
      },
      // ... other services similarly
    ]
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-500">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-white">Client Design: Health Services Platform</h1>
          <p className="text-xl mb-12 text-blue-100">A showcase of a client website design for a health services platform.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.name} className="transform transition-transform duration-300 hover:scale-105">
                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg">
                <Image
                      src={service.image}
                      alt={service.name}
                      width={service.width}
                      height={service.height}
                      className="w-full object-cover mb-4 rounded h-[200px]"
                />
                  <h2 className="text-xl font-semibold text-white">{service.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }