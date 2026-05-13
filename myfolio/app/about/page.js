'use client';
import { Mail, MapPin, Briefcase, GraduationCap } from 'lucide-react';

export default function AboutPage() {
  const toolkit = [
    { category: "Languages", items: "JavaScript, Python, Solidity, TypeScript, HTML/CSS" },
    { category: "Frontend", items: "ReactJS, Next.js, Tailwind CSS, Web3.js, Ethers.js" },
    { category: "Backend & DB", items: "Node.js, Express.js, JWT, MongoDB, Mongoose" },
    { category: "Web3/Blockchain", items: "Ethereum, Algorand, Pera Wallet, IPFS" },
    { category: "Tools & Platforms", items: "Docker, Git, Google Cloud, Hardhat, Razorpay" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="container-narrow space-y-24">
        <header className="space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
            About Me
          </h1>
          <div className="h-1.5 w-20 bg-emerald-500 rounded-full mx-auto md:mx-0"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight dark:text-white">A bit about my journey</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                I am a <span className="text-emerald-600 dark:text-emerald-400 font-bold">Full-Stack and Web3 Developer</span> focused on building functional, high-performance applications using the MERN stack and blockchain technologies.
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                My work spans from developing AI-powered tools like <span className="text-gray-900 dark:text-white font-medium">GeoIntel</span>, <span className="text-gray-900 dark:text-white font-medium">Inbox AI</span> and <span className="text-gray-900 dark:text-white font-medium">SkyLens Intelligence</span>, to architecting decentralized systems such as <span className="text-gray-900 dark:text-white font-medium">AlgoMakan</span> and <span className="text-gray-900 dark:text-white font-medium">MedChain</span>. I thrive at the intersection of modern web design and disruptive technology.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
              <div className="p-8 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 space-y-4">
                 <Briefcase className="text-emerald-500" size={24} />
                 <h3 className="font-bold dark:text-white">Experience</h3>
                 <p className="text-sm text-gray-500 dark:text-gray-400">Building scalable web applications and decentralized solutions for over 2 years.</p>
              </div>
              <div className="p-8 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 space-y-4">
                 <GraduationCap className="text-emerald-500" size={24} />
                 <h3 className="font-bold dark:text-white">Education</h3>
                 <p className="text-sm text-gray-500 dark:text-gray-400">Passionate self-taught developer with a strong focus on CS fundamentals.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 md:p-10 bg-white dark:bg-gray-950 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm space-y-10">
              <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-gray-800 pb-6">Technical Toolkit</h3>
              
              <div className="space-y-8">
                {toolkit.map((tech) => (
                  <div key={tech.category} className="space-y-2">
                    <h4 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">{tech.category}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-medium leading-relaxed">{tech.items}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
