import Link from 'next/link';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'AlgoMakan - Web3 Real Estate',
    slug: 'algomakan',
    description: 'A premium decentralized real estate marketplace on Algorand for browsing and investing in property NFTs.',
    github: 'https://github.com/akash150149/AlgoMakan',
    live: '#'
  },
  {
    title: 'MedChain',
    slug: 'medchain',
    description: 'A decentralized web-based system for authenticating medicines and preventing counterfeiting, built on Filecoin and Hypergraph.',
    github: 'https://github.com/debjitmitra000/MedChain',
    live: '#'
  },
  {
    title: 'Apna - Web3 Property Marketplace',
    slug: 'apna',
    description: 'A decentralized platform to buy and sell property NFTs with MetaMask integration and blockchain-backed ownership.',
    github: 'https://github.com/akash150149/Apna',
    live: '#'
  },
  {
    title: 'Aero - Airline Booking System',
    slug: 'aero',
    description: 'A MERN-based airline booking system with Razorpay integration for payments and secure user authentication.',
    github: '#',
    live: '#'
  },
  {
    title: 'HaatBaazar - eCommerce Platform',
    slug: 'haatbaazar',
    description: 'A full-stack eCommerce web app with product browsing, cart/checkout flow, secure payments via Razorpay, and an admin dashboard.',
    github: 'https://github.com/akash150149/HaatBaazar',
    live: 'https://haat-baazar.onrender.com'
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            Projects
          </h1>
          <p className="text-zinc text-xl max-w-2xl font-mono">
            A showcase of my work in full-stack development, decentralized applications, and modern web tech.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="hover-card border border-white/5 bg-zinc-900/10 p-8 md:p-12 rounded-[2.5rem] flex flex-col h-full space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">{project.title}</h2>
                <div className="h-1 w-12 bg-green-500/50 rounded-full"></div>
              </div>
              <p className="text-zinc text-lg md:text-xl leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="space-y-8 pt-4">
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-3 text-sm font-medium bg-white/5 hover:bg-white/10 px-8 py-4 rounded-xl transition-all border border-white/10"
                  >
                    <Github size={20} /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-3 text-sm font-medium bg-green-600/10 text-green-400 hover:bg-green-600/20 px-8 py-4 rounded-xl transition-all border border-green-400/20"
                  >
                    <ExternalLink size={20} /> Live Demo
                  </a>
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-mono uppercase tracking-widest transition-colors group"
                >
                  Explore Project <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
