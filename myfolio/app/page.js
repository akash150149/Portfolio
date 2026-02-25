'use client';
import Link from 'next/link';
import { ChevronRight, Github, ExternalLink, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen text-white pt-24">
      <main className="max-w-7xl mx-auto px-6 space-y-32">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 py-12 md:py-24">
          <div className="flex-1 space-y-8 max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              Akash Poddar
            </h1>
            <p className="intro-text">
              Intro text: I&apos;m a full-stack web developer skilled in React, Node.js, and exploring Next.js!
              Dedicated to building clean, high-performance web applications and decentralized solutions.
            </p>
            <div className="pt-4">
              <Link href="/projects" className="btn-primary">
                Let&apos;s get started <ChevronRight size={20} />
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl bg-zinc-800 flex items-center justify-center text-white/20 text-4xl">
              Photo
            </div>
          </div>
        </section>

        {/* Worked with Section
        <section className="space-y-8">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Worked with
          </h2>
          <div className="logo-grid">
            {['ClickUp', 'Dropbox', 'PAYCHEX', 'elastic', 'stripe'].map((name) => (
              <div key={name} className="logo-grid-item">
                {name}
              </div>
            ))}
          </div>
        </section> */}

        {/* Featured Projects Section (Figma Style) */}
        <section id="projects" className="space-y-12">
          <div className="flex justify-between items-end">
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <Link href="/projects" className="text-green-400 hover:text-green-300 flex items-center gap-1 font-medium transition-colors">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project: MedChain*/}
            <div className="border border-white/5 bg-zinc-900/20 p-8 rounded-2xl space-y-6 hover:border-white/20 transition-all">
              <h3 className="text-2xl font-bold">MedChain</h3>
              <p className="text-zinc text-lg leading-relaxed">
                A decentralized system for authenticating medicines and preventing counterfeiting, built on Filecoin and Hypergraph.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/debjitmitra000/MedChain"
                  target="_blank"
                  className="flex items-center gap-2 text-sm font-medium bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-lg transition-colors border border-white/10"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm font-medium bg-green-600/10 text-green-400 hover:bg-green-600/20 px-5 py-2.5 rounded-lg transition-colors border border-green-400/20"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>

            {/* Project: Apna */}
            <div className="border border-white/5 bg-zinc-900/20 p-8 rounded-2xl space-y-6 hover:border-white/20 transition-all">
              <h3 className="text-2xl font-bold">Apna - Web3 Marketplace</h3>
              <p className="text-zinc text-lg leading-relaxed">
                A decentralized real estate marketplace where users can buy and sell property NFTs securely.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/akash150149/Apna"
                  target="_blank"
                  className="flex items-center gap-2 text-sm font-medium bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-lg transition-colors border border-white/10"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm font-medium bg-green-600/10 text-green-400 hover:bg-green-600/20 px-5 py-2.5 rounded-lg transition-colors border border-green-400/20"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Blogs Section (Minimalist) */}
        <section id="blogs" className="space-y-12 pb-24">
          <div className="flex justify-between items-end">
            <h2 className="text-4xl font-bold">Latest Blogs</h2>
            <Link href="/blog" className="text-green-400 hover:text-green-300 flex items-center gap-1 font-medium transition-colors">
              Read All Blogs <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-0 divide-y divide-white/5 border-y border-white/5">
            {[
              {
                title: 'IMA Attachment Camp Journey',
                slug: 'ima-attachment',
                excerpt: 'My thrilling 12-day experience at the Indian Military Academy.',
                date: 'Feb 15, 2024'
              },
              {
                title: 'My SSB Experience',
                slug: 'ssb-experience',
                excerpt: 'From nervous beginnings to unexpected learnings in the SSB interview process.',
                date: 'Jan 10, 2024'
              },
            ].map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group flex flex-col md:flex-row md:items-center justify-between py-10 hover:bg-white/[0.02] px-4 -mx-4 transition-colors rounded-xl"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{blog.date}</span>
                  <h3 className="text-2xl font-bold group-hover:text-green-400 transition-colors">{blog.title}</h3>
                  <p className="text-zinc line-clamp-1">{blog.excerpt}</p>
                </div>
                <ArrowRight className="hidden md:block text-zinc-600 group-hover:text-green-400 transform group-hover:translate-x-2 transition-all" size={24} />
              </Link>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="pb-32">
          <div className="bg-zinc-900/40 p-16 md:p-24 rounded-[3rem] text-center border border-white/5 space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold max-w-4xl mx-auto leading-tight">
              Ready to start your next project?
            </h2>
            <p className="text-zinc text-xl max-w-2xl mx-auto">
              I&apos;m open to full-stack opportunities and interesting collaborations. Let&apos;s build something extraordinary together.
            </p>
            <div className="pt-6">
              <a
                href="mailto:contact@akashpoddar.me"
                className="btn-primary text-xl px-12 py-5"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
