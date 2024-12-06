import Image from 'next/image'
import Link from 'next/link'

export default function WebDesignShowcase() {
  const services = [
    { 
      name: 'Health Profile Services', 
      image: require('/public/Health-Mock-Site.png').default,
      href: 'https://health-mock-site.vercel.app'  // Add href property
      isExternal: true
    },
    { 
      name: 'Dog Wellness', 
      image: '/placeholder.svg',
      href: '/microbiome'
    },
    { 
      name: 'Lifestyle Magazine', 
      image: '/placeholder.svg',
      href: '/genome'
    },
    { 
      name: 'Continuous Glucose Monitoring', 
      image: '/placeholder.svg',
      href: '/glucose'
    },
    { 
      name: 'Biomarker Testing', 
      image: '/placeholder.svg',
      href: '/biomarker'
    },
    { 
      name: 'Cell Cancer Test', 
      image: '/placeholder.svg',
      href: '/cancer'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-500">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-white">Web Design Showcase</h1>
        <p className="text-xl mb-12 text-blue-100">A showcase of client website designs and digital solutions.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="transform transition-transform duration-300 hover:scale-105">
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover mb-4 rounded"
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