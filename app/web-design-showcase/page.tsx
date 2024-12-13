interface Service {
  name: string;
  image: string;
  href: string;
  isExternal: boolean;
}

interface ServiceCardProps {
  service: Service;
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg h-full flex flex-col">
      <div className="relative w-full mb-4">
        <img
          src={service.image}
          alt={service.name}
          className="rounded w-full h-auto max-h-48 object-contain"
          loading="lazy"
        />
      </div>
      <h2 className="text-xl font-semibold text-white mt-auto">{service.name}</h2>
    </div>
  )
}

export default function WebDesignShowcase() {
  const services: Service[] = [
    {
      name: "Health Profile Services",
      image: "/Health-Mock-Site.PNG",
      href: "https://health-mock-site.vercel.app",
      isExternal: true
    },
    {
      name: 'Dog Wellness',
      image: '/Opti-Dog-Screenshot.PNG',
      href: 'https://opti-dog-premium-care-site-attcib00c-gqucoldbrues-projects.vercel.app',
      isExternal: true
    },
    {
      name: 'Lifestyle Magazine',
      image: '/Le-Magazine-Mock-Cover.PNG',
      href: '/lemagazine',
      isExternal: false
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-500">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-white">Web Design Showcase</h1>
        <p className="text-xl mb-12 text-blue-100">Template websites for digital solutions - your idea goes here</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="transform transition-transform duration-300 hover:scale-105">
              <a 
                href={service.href}
                target={service.isExternal ? "_blank" : undefined}
                rel={service.isExternal ? "noopener noreferrer" : undefined}
                className="block h-full"
              >
                <ServiceCard service={service} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}