import React from 'react';

const ServiceCard = ({ name, image, href, isExternal }) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-purple-100/20 backdrop-blur-sm p-6 transition-transform hover:scale-105">
      <a 
        href={href} 
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block h-full no-underline"
      >
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-4">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="text-2xl font-semibold text-white">{name}</h2>
      </a>
    </div>
  );
};

// Example implementation of the services grid
const ServiceShowcase = () => {
  const services = [
    {
      name: "Health Profile Services",
      image: "/Health-Mock-Site.PNG",
      href: "https://health-mock-site.vercel.app",
      isExternal: true
    },
    {
      name: "Dog Wellness",
      image: "/placeholder.svg",
      href: "/dogwellness",
      isExternal: false
    },
    {
      name: "Lifestyle Magazine",
      image: "/Le-Magazine-Mock-Cover.PNG",
      href: "/lemagazine",
      isExternal: false
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard
          key={service.name}
          {...service}
        />
      ))}
    </div>
  );
};

export default ServiceShowcase;