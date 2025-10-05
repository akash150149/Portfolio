import Link from 'next/link';

const projects = [
  {
    title: 'MedChain',
    slug: 'medchain',
    description:
      'A decentralized web-based system for authenticating medicines and preventing counterfeiting, built on Filecoin and Hypergraph.',
  },
  {
    title: 'Apna - Web3 Property Marketplace',
    slug: 'apna',
    description:
      'A decentralized platform to buy and sell property NFTs with MetaMask integration and blockchain-backed ownership.',
  },
  {
    title: 'Aero - Airline Booking System',
    slug: 'aero',
    description:
      'A MERN-based airline booking system with Razorpay integration for payments and secure user authentication.',
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      <h1 className="text-4xl font-bold mb-6 text-center">My Projects</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="border border-gray-200 rounded-2xl p-6 bg-white shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              {project.title}
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {project.description}
            </p>
            <Link
              href={`/projects/${project.slug}`}
              className="inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              → View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
