import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  name: string;
  image: string;
  href: string;
  isExternal: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, image, href, isExternal }) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-purple-100/20 backdrop-blur-sm p-6 transition-transform hover:scale-105">
      {isExternal ? (
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full no-underline"
        >
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-4">
            <Image
              src={image}
              alt={name}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <h2 className="text-2xl font-semibold text-white">{name}</h2>
        </a>
      ) : (
        <Link 
          href={href}
          className="block h-full no-underline"
        >
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-4">
            <Image
              src={image}
              alt={name}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <h2 className="text-2xl font-semibold text-white">{name}</h2>
        </Link>
      )}
    </div>
  );
};