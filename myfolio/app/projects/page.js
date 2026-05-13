'use client';
import Link from 'next/link';
import { ArrowUpRight, Github, MapPin, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "GeoIntel",
    slug: "geointel",
    description: "An automated, AI-driven news intelligence system designed to simplify high-stakes preparation for competitive exams like the UPSC by transforming the daily news cycle into structured intelligence.",
    tags: ["Node.js", "Gemini AI", "Resend API", "Mermaid.js"],
    link: "https://github.com/akash150149/GeoIntel",
    color: "bg-green-50"
  },
  {
    title: "Inbox AI",
    slug: "inbox-ai",
    description: "An AI-powered email management system that offloads the 'reading' of unread threads to a Gemini-powered agent, surfacing only emails requiring human intervention.",
    tags: ["Gemini AI", "React", "Node.js", "Tailwind CSS"],
    link: "https://github.com/akash150149/Inbox-AI",
    color: "bg-indigo-50"
  },
  {
    title: "SkyLens Intelligence",
    slug: "skylens-intelligence",
    description: "A modern aviation dashboard acting as an advanced heads-up display. Features real-time METAR weather, Gemini AI pilot briefings, and Vision AI to extract essential data from aviation approach plates.",
    tags: ["React", "Node.js", "Tailwind CSS", "Gemini AI"],
    link: "https://github.com/akash150149/Skylens-Intelligence",
    demoLink: "https://skylens-xwid.onrender.com",
    color: "bg-sky-50"
  },
  {
    title: "MedChain",
    slug: "medchain",
    description: "A decentralized healthcare platform built on blockchain, ensuring secure and transparent medical record management.",
    tags: ["Web3", "Blockchain", "Healthcare", "Next.js"],
    link: "https://github.com/debjitmitra000/MedChain",
    color: "bg-emerald-50"
  },
  {
    title: "HaatBaazar",
    slug: "haatbaazar",
    description: "A full-featured eCommerce platform developed with the MERN stack, offering a seamless shopping experience.",
    tags: ["eCommerce", "MERN", "React", "Node.js"],
    link: "https://github.com/akash150149/HaatBaazar",
    color: "bg-gray-50"
  },
  {
    title: "AlgoMakan",
    slug: "algomakan",
    description: "A Web3 property listing and real estate platform, leveraging smart contracts for secure transactions.",
    tags: ["Web3", "Real Estate", "Smart Contracts"],
    link: "https://github.com/akash150149/AlgoMakan",
    color: "bg-blue-50"
  },
  {
    title: 'Apna - Web3 Property Marketplace',
    slug: "apna",
    description: 'A decentralized platform to buy and sell property NFTs with MetaMask integration and blockchain-backed ownership.',
    tags: ["Web3", "NFT", "Ethereum"],
    link: 'https://github.com/akash150149/Apna',
    color: "bg-purple-50"
  },
  {
    title: 'Aero - Airline Booking System',
    slug: "aero",
    description: 'A MERN-based airline booking system with Razorpay integration for payments and secure user authentication.',
    tags: ["MERN", "Authentication", "Razorpay"],
    link: '#',
    color: "bg-orange-50"
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="container-narrow space-y-24">
        <header className="space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
            Projects
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
            A showcase of my work in full-stack development, decentralized applications, and modern web tech.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group flex flex-col bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 overflow-hidden hover:border-emerald-200 dark:hover:border-emerald-800 transition-all hover:shadow-xl">
              <Link href={`/projects/${project.slug}`} className={`aspect-[16/10] relative overflow-hidden ${project.color} dark:bg-gray-800/50 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500`}>
                <div className="text-gray-300 dark:text-gray-700 font-bold text-3xl group-hover:scale-110 transition-transform duration-500">
                  {project.title}
                </div>
              </Link>
              <div className="p-8 md:p-10 space-y-6 flex-grow flex flex-col">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tight dark:text-white">{project.title}</h2>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium border border-gray-100 dark:border-gray-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-6 items-center">
                  <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-bold border-b-2 border-gray-900 dark:border-white pb-1 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-600 dark:hover:border-emerald-400 transition-all dark:text-white">
                    Details <ArrowUpRight size={16} />
                  </Link>
                  <Link href={project.link} target="_blank" className="inline-flex items-center gap-2 text-sm font-bold border-b-2 border-gray-900 dark:border-white pb-1 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-600 dark:hover:border-emerald-400 transition-all dark:text-white">
                    GitHub <Github size={16} />
                  </Link>
                  {project.demoLink && (
                    <Link href={project.demoLink} target="_blank" className="inline-flex items-center gap-2 text-sm font-bold border-b-2 border-gray-900 dark:border-white pb-1 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-600 dark:hover:border-emerald-400 transition-all dark:text-white">
                      Live Demo <ExternalLink size={16} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
