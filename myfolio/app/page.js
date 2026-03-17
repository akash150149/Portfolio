'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Github, ExternalLink, MapPin } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';

export default function HomePage() {
  const blogs = Object.values(blogPosts);

  const projects = [
    {
      title: "MedChain",
      description: "A decentralized healthcare platform built on blockchain, ensuring secure and transparent medical record management.",
      tags: ["Web3", "Blockchain", "Healthcare", "Next.js"],
      link: "https://github.com/debjitmitra000/MedChain",
      image: "/projects/medchain.png", // Assuming these paths exist or using color placeholders
      color: "bg-emerald-50"
    },
    {
      title: "HaatBaazar",
      description: "A full-featured eCommerce platform developed with the MERN stack, offering a seamless shopping experience.",
      tags: ["eCommerce", "MERN", "React", "Node.js"],
      link: "https://github.com/akash150149/HaatBaazar",
      image: "/projects/haatbaazar.png",
      color: "bg-gray-50"
    },
    {
      title: "AlgoMakan",
      description: "A Web3 property listing and real estate platform, leveraging smart contracts for secure transactions.",
      tags: ["Web3", "Real Estate", "Smart Contracts"],
      link: "https://github.com/akash150149/AlgoMakan",
      image: "/projects/algomakan.png",
      color: "bg-blue-50"
    }
  ];

  const skills = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Solidity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
    { name: "Blockchain", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
  ];

  return (
    <div className="transition-colors duration-300">
      {/* Hero Section */}
      <section className="section-padding container-narrow min-h-[80vh] flex flex-col justify-center">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for new projects
            </div> */}
            <h1 className="heading-huge text-gray-900 dark:text-white">
              Building Scalable Full-Stack Solutions & Decentralized Ecosystems.
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
              {/* I&apos;m Akash Poddar, a full-stack developer based in India. I specialize in building high-performance web applications using React, Node.js, and Blockchain technologies. */}
              I'm Akash, a Full-Stack Developer who turns complex requirements into seamless digital experiences. Whether it's a WEB2 MERN Stack Based Project or a WEB3 based Project, I build for scale and security.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm font-medium">
                <MapPin size={18} /> Kolkata, India
              </div>
            </div>
            <div className="flex items-center gap-6 pt-6">
              <Link href="#contact" className="btn-primary">
                Get in touch
              </Link>
              <div className="flex items-center gap-4 text-gray-400 dark:text-gray-500">
                <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors"><Github size={20} /></Link>
                <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors"><ArrowUpRight size={20} /></Link>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-[480px] mx-auto group">
              <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-2xl -rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
                <Image
                  src="/profile.jpg"
                  alt="Akash Poddar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="section-padding bg-gray-50/50 dark:bg-gray-900/20">
        <div className="container-narrow space-y-16">
          <div className="text-center md:text-left max-w-2xl space-y-4">
            <h2 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">My Stack</h2>
            <p className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              The technologies I use to bring ideas to life.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center gap-4 transition-all hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-sm group">
                <div className="relative w-12 h-12 transition-transform group-hover:scale-110 duration-300">
                  <Image
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    fill
                    className="object-contain dark:brightness-110"
                  />
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Work Section */}
      <section id="projects" className="section-padding container-narrow">
        <div className="space-y-24">
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Selected Work</h2>
            <p className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Featured project highlights.
            </p>
          </div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <div key={project.title} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <div className={`relative aspect-[16/10] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm ${project.color} dark:bg-gray-900`}>
                    <div className="absolute inset-0 flex items-center justify-center text-gray-300 dark:text-gray-700 font-bold text-4xl">
                      {project.title} Preview
                    </div>
                  </div>
                </div>
                <div className="flex-1 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold tracking-tight dark:text-white">{project.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 text-xs font-medium border border-gray-100 dark:border-gray-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Link href={project.link} target="_blank" className="inline-flex items-center gap-2 text-sm font-bold border-b-2 border-gray-900 dark:border-white pb-1 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-600 dark:hover:border-emerald-400 transition-all dark:text-white">
                      View on GitHub <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section-padding bg-gray-50/50 dark:bg-gray-900/20">
        <div className="container-narrow space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4 max-w-lg">
              <h2 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Journal</h2>
              <p className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Sharing my experiences and findings.
              </p>
            </div>
            <Link href="/blog" className="text-sm font-bold text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              View all posts
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link key={blog.slug} href={`/blog/${blog.slug}`} className="group space-y-6 block">
                <div className="aspect-[16/9] rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 overflow-hidden relative group-hover:border-emerald-200 dark:group-hover:border-emerald-800 transition-all">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-200 dark:text-gray-800">
                    Blog Preview
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-xs text-gray-400 dark:text-gray-500 font-medium">March 16, 2026 • 5 min read</div>
                  <h3 className="text-xl font-bold tracking-tight dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
                    {blog.excerpt || "Dive into the details of this experience and learn more about the journey..."}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32">
        <div className="container-narrow">
          <div className="bg-gray-900 dark:bg-gray-900/50 rounded-[2rem] p-12 md:p-20 text-center space-y-12 relative overflow-hidden border border-gray-800">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] -ml-32 -mb-32"></div>

            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Interested in working together?<br />Let&apos;s build something great.
              </h2>
              <p className="text-gray-400 dark:text-gray-400 text-lg max-w-xl mx-auto">
                I&apos;m currently available for freelance projects and full-time opportunities.
              </p>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6">
              <Link href="mailto:akashpoddar.elevensc.2020@gmail.com" className="bg-white dark:bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
                Email Me
              </Link>
              <div className="flex items-center gap-8 py-4 px-8 border border-gray-800 rounded-xl">
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">WhatsApp</p>
                  <p className="text-white font-medium">+91-7980682871</p>
                </div>
                <button className="text-gray-500 hover:text-white transition-colors" aria-label="Copy Phone">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
