import Link from 'next/link';

const projects = [
  {
    title: 'Apna - Web3 Property Marketplace',
    slug: 'apna',
    description: 'A decentralized platform to buy/sell property NFTs with wallet integration.',
  },
  {
    title: 'Aero - Airline Booking System',
    slug: 'aero',
    description: 'A MERN airline booking system with Razorpay payments and user login.',
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <li key={project.slug} className="border rounded-lg p-6 shadow hover:shadow-xl transition">
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <Link
              href={`/projects/${project.slug}`}
              className="text-blue-600 underline hover:text-blue-800"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
