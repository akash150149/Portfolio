import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, ChevronRight } from 'lucide-react';

const projectDetails = {
  geointel: {
    title: 'GeoIntel - AI-Driven News Intelligence',
    description:
      'GeoIntel is an automated intelligence system designed for competitive exam preparation. It transforms the overwhelming daily news cycle into a structured, visual, and actionable briefing. By orchestrating data from RSS feeds, YouTube insights, and local PDFs, it provides a comprehensive 360-degree view of global events with minimal manual effort.',
    github: 'https://github.com/akash150149/GeoIntel',
    live: '#',
    tags: ['Node.js', 'Google Gemini 1.5 Flash', 'RSS Parser', 'Resend API', 'Mermaid.js'],
    features: [
      'Multi-Channel Aggregation: Collection from RSS feeds, YouTube Data API, and PDF ingestion.',
      'AI Synthesized Briefing: Categorization into International Relations, Economy, and Sci-Tech.',
      'Dynamic Mind Mapping: Mermaid.js visual mind maps illustrating cause-and-effect relationships.',
      'Cron-Scheduled Delivery: Automated daily 7:00 AM briefing sent via Resend API.'
    ],
    roadmap: [
      'Interactive Dashboard: Web-based repository for historical news briefs.',
      'Sentiment Analysis: Tracking global sentiment trends on specific geopolitical topics.',
      'Voice Briefing: AI-generated daily news podcast for on-the-go listening.',
      'Collaborative Intelligence: Shared workspaces for study groups and exam preparation.'
    ]
  },
  'inbox-ai': {
    title: 'Inbox AI - Intelligent Email Management',
    description:
      'Inbox AI is an advanced email management system designed to declutter your inbox and prioritize meaningful communication. By offloading the initial "reading" of unread threads to a Gemini-powered agent, the system provides a structured dashboard that surfaces only the emails requiring actual human intervention. This intelligent filtering significantly speeds up daily communication workflows and reduces digital fatigue.',
    github: 'https://github.com/akash150149/Inbox-AI',
    live: '#',
    tags: ['Gemini AI', 'React', 'Node.js', 'Tailwind CSS', 'Google OAuth'],
    features: [
      'Automated Thread Analysis: Gemini AI reads and summarizes unread email threads.',
      'Priority Dashboard: Surfacing only emails that require human attention.',
      'Seamless Integration: Connects directly with Gmail via secure OAuth.',
      'Smart Categorization: Automatically groups related communications.'
    ],
    roadmap: [
      'Auto-Drafting: Suggested AI responses based on thread context.',
      'Advanced Filtering: Customizable rules for AI prioritization.',
      'Multi-Platform Support: Integration with Outlook and other providers.',
      'Mobile Application: Manage your AI-powered inbox on the go.'
    ]
  },
  'skylens-intelligence': {
    title: 'SkyLens Intelligence - Aviation HUD & Analysis',
    description:
      'SkyLens Intelligence is a modern, responsive aviation dashboard designed for pilots and flight dispatchers. It acts as an advanced heads-up display (HUD) for critical flight operations, integrating real-time METAR weather data and utilizing Vision AI to scan and extract essential data from aviation approach plates.',
    github: 'https://github.com/akash150149/Skylens-Intelligence',
    live: 'https://skylens-xwid.onrender.com',
    tags: ['React', 'Node.js', 'Tailwind CSS', 'Gemini AI', 'Vision AI'],
    features: [
      'Real-time METAR Integration: Live weather data for airports worldwide.',
      'AI Pilot Briefings: Instant professional briefings generated via Gemini AI.',
      'Vision AI Chart Deck: Automatic data extraction from uploaded approach plates.',
      'Centralized Intelligence: Streamlined pre-flight analysis hub.'
    ],
    roadmap: [
      'NOTAM Integration: Real-time notices to airmen integration.',
      'Flight Path Visualization: Interactive 3D maps for planned routes.',
      'Offline Support: Essential data caching for in-flight access.',
      'Advanced Risk Assessment: AI-driven safety scoring for flight routes.'
    ]
  },
  algomakan: {
    title: 'AlgoMakan - Decentralized Real Estate Marketplace',
    description:
      'AlgoMakan is a premium real estate marketplace built on the Algorand blockchain. It enables users to browse, invest in, and own property collectibles (NFTs) with the security and transparency of decentralized technology. The platform features secure escrow via smart contracts, seamless wallet integration with Pera, and a responsive interface designed for real estate presentation.',
    github: 'https://github.com/akash150149/AlgoMakan',
    live: '#',
    tags: ['Algorand', 'TypeScript', 'PuYA TS', 'AlgoKit', 'React', 'Tailwind CSS'],
    features: [
      'Real Estate NFTs: Properties represented as unique Assets (ASA) on Algorand.',
      'Secure Escrow: Smart contracts manage trustless ALGO-to-NFT exchange.',
      'Wallet Integration: Full support for Pera Wallet and other Algorand providers.',
      'Monorepo Architecture: Managed with AlgoKit for consistent development flow.'
    ],
    roadmap: [
      'Fractional Ownership: Splitting property NFTs into tradable tokens.',
      'On-Chain Rentals: Automatic rent collection and distribution.',
      'IPFS Integration: Permanent, tamper-proof storage for deeds and documents.',
      'Community Governance: DAO structure for listing verification.'
    ]
  },
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
              <h1 className="heading-fluid font-bold uppercase pb-4">
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

            {project.features && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Key Features</h2>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex gap-4 text-zinc text-lg leading-relaxed text-zinc-400">
                      <span className="text-green-500 font-mono">0{index + 1}.</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.roadmap && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Future Roadmap</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.roadmap.map((item, index) => (
                    <div key={index} className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-zinc-400">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

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
