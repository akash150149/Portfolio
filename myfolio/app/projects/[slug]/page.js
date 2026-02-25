import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, ChevronRight } from 'lucide-react';

const projectDetails = {
  medchain: {
    title: 'MedChain',
    description:
      'A decentralized web-based system for authenticating medicines and preventing counterfeiting, built on Filecoin and Hypergraph. It leverages blockchain technology to ensure the integrity of the supply chain and provide consumers with a reliable way to verify the authenticity of their medications.',
    github: 'https://github.com/debjitmitra000/MedChain',
    live: '#',
    tags: ['Next.js', 'Solidity', 'Filecoin', 'Web3']
  },
  apna: {
    title: 'Apna - Web3 Property Marketplace',
    description:
      'Apna is a decentralized real estate platform where users can buy and sell property NFTs. Built using React, Solidity, Hardhat, and Ethers.js. Features include wallet authentication with MetaMask, smart contract transactions for secure property transfers, and blockchain-based tokenization of real estate assets.',
    github: 'https://github.com/akash150149/Apna',
    live: '#',
    tags: ['React', 'Solidity', 'Ethereum', 'Hardhat']
  },
  aero: {
    title: 'Aero - Airline Booking System',
    description:
      'Aero is a full-stack airline booking platform built using the MERN stack. It provides a seamless experience for searching flights, reserving seats, and managing bookings. Integration with Razorpay ensures secure and efficient payment processing, while a robust authentication system protects user data.',
    github: 'https://github.com/akash150149/aero',
    live: '#',
    tags: ['MERN', 'Razorpay', 'Redux', 'JWT']
  },
  haatbaazar: {
    title: 'HaatBaazar - eCommerce Platform',
    description:
      'HaatBaazar is a comprehensive eCommerce solution designed for seamless online shopping. It features a modern product browsing experience, a persistent shopping cart, and a streamlined checkout process. Secure payment integration with Razorpay ensures safe transactions, while the dedicated admin dashboard empowers merchants to manage products, categories, and track customer orders efficiently.',
    github: 'https://github.com/akash150149/HaatBaazar',
    live: 'https://haat-baazar.onrender.com',
    tags: ['React', 'Node.js', 'MongoDB', 'Razorpay', 'Admin Dashboard']
  },
};

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = projectDetails[slug];

  if (!project) {
    return (
      <div className="bg-black min-h-screen text-white flex items-center justify-center pt-32 px-6">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold">Project not found</h1>
          <Link href="/projects" className="text-green-400 hover:text-green-300 inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Navigation */}
        <Link href="/projects" className="text-zinc-500 hover:text-green-400 inline-flex items-center gap-2 mb-12 transition-colors group text-sm font-medium">
          <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="md:col-span-8 space-y-12">
            <header className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight uppercase">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-3">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 rounded-full bg-zinc-900 border border-white/5 text-xs text-zinc-400 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="space-y-8">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p className="text-zinc text-xl leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="aspect-video bg-zinc-900 rounded-[2rem] border border-white/5 flex items-center justify-center text-zinc-600 italic">
              [📷 Image Placeholder: Project Dashboard Preview]
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <div className="p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 space-y-8">
              <div className="space-y-4">
                <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Links</h3>
                <div className="flex flex-col gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center justify-between gap-2 bg-white/5 hover:bg-white/10 px-6 py-4 rounded-xl transition-colors border border-white/10 group"
                  >
                    <span className="flex items-center gap-3"><Github size={20} /> GitHub Source</span>
                    <ChevronRight size={16} className="text-zinc-600 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center justify-between gap-2 bg-green-600/10 text-green-400 hover:bg-green-600/20 px-6 py-4 rounded-xl transition-colors border border-green-400/20 group"
                  >
                    <span className="flex items-center gap-3"><ExternalLink size={20} /> Live Preview</span>
                    <ChevronRight size={16} className="text-green-400/60 group-hover:text-green-400 transition-colors" />
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Role</h3>
                <p className="text-lg font-medium">Lead Developer</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Year</h3>
                <p className="text-lg font-medium">2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
