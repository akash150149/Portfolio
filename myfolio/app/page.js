'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Github, ExternalLink, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen text-white pt-24">
      <main className="max-w-7xl mx-auto px-6 space-y-32">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 py-12 md:py-32">
          <div className="flex-1 space-y-8 max-w-2xl text-center md:text-left">
            <h1 className="heading-fluid font-bold pb-4">
              Akash Poddar
            </h1>
            <p className="intro-text max-w-xl mx-auto md:mx-0">
              I&apos;m a full-stack web developer skilled in React, Node.js, and scaling with Next.js!
              Dedicated to building clean, high-performance web applications and decentralized solutions.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link href="/projects" className="btn-primary w-full sm:w-auto justify-center">
                View My Work <ArrowRight size={20} />
              </Link>
              <a href="#contact" className="text-zinc-500 hover:text-white px-6 py-3 font-medium transition-colors">
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-white/10 bg-zinc-900 transition-all duration-700">
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
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="space-y-12 scroll-mt-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
              <p className="text-zinc">Selected works from my development journey.</p>
            </div>
            <Link href="/projects" className="text-green-400 hover:text-green-300 flex items-center gap-2 font-medium transition-colors group">
              View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project: MedChain*/}
            <div className="hover-card border border-white/5 bg-zinc-900/20 p-8 md:p-10 rounded-3xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-green-500/60 uppercase tracking-widest">Web3 • Filecoin</span>
                <h3 className="text-3xl font-bold">MedChain</h3>
              </div>
              <p className="text-zinc text-lg leading-relaxed flex-grow">
                A decentralized system for authenticating medicines and preventing counterfeiting, built on Filecoin and Hypergraph.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://github.com/debjitmitra000/MedChain"
                  target="_blank"
                  className="flex items-center gap-2 text-sm font-medium bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl transition-all border border-white/10"
                >
                  <Github size={18} /> GitHub
                </a>
                <Link
                  href="/projects/medchain"
                  className="flex items-center gap-2 text-sm font-medium bg-green-600/10 text-green-400 hover:bg-green-600/20 px-6 py-3 rounded-xl transition-all border border-green-400/20"
                >
                  <ExternalLink size={18} /> Details
                </Link>
              </div>
            </div>

            {/* Project: HaatBaazar */}
            <div className="hover-card border border-white/5 bg-zinc-900/20 p-8 md:p-10 rounded-3xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-green-500/60 uppercase tracking-widest">eCommerce • MERN</span>
                <h3 className="text-3xl font-bold">HaatBaazar</h3>
              </div>
              <p className="text-zinc text-lg leading-relaxed">
                A full-stack eCommerce platform with secure payments, admin dashboard, and optimized checkout flow.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://github.com/akash150149/HaatBaazar"
                  target="_blank"
                  className="flex items-center gap-2 text-sm font-medium bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl transition-all border border-white/10"
                >
                  <Github size={18} /> GitHub
                </a>
                <Link
                  href="/projects/haatbaazar"
                  className="flex items-center gap-2 text-sm font-medium bg-green-600/10 text-green-400 hover:bg-green-600/20 px-6 py-3 rounded-xl transition-all border border-green-400/20"
                >
                  <ExternalLink size={18} /> Details
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blogs Section */}
        <section id="blogs" className="space-y-12 pb-24 scroll-mt-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold">Latest Stories</h2>
              <p className="text-zinc">Notes on my military camp journeys and technical explorations.</p>
            </div>
            <Link href="/blog" className="text-green-400 hover:text-green-300 flex items-center gap-2 font-medium transition-colors group">
              Read All Blogs <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
                className="group flex flex-col md:flex-row md:items-center justify-between py-12 hover:bg-white/[0.02] px-6 -mx-6 transition-all rounded-2xl"
              >
                <div className="space-y-3">
                  <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">{blog.date}</span>
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:text-green-400 transition-colors">{blog.title}</h3>
                  <p className="text-zinc text-lg leading-relaxed line-clamp-1 max-w-2xl">{blog.excerpt}</p>
                </div>
                <ArrowRight className="hidden md:block text-zinc-700 group-hover:text-green-400 transform group-hover:translate-x-4 transition-all" size={32} />
              </Link>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="pb-32 scroll-mt-32">
          <div className="bg-zinc-900/40 p-10 md:p-32 rounded-[2rem] md:rounded-[4rem] text-center border border-white/5 space-y-10 relative overflow-hidden group">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full pointer-events-none"></div>

            <h2 className="text-4xl md:text-8xl font-bold max-w-5xl mx-auto leading-[0.9] tracking-tighter">
              Ready to start your next project?
            </h2>
            <p className="text-zinc text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              I&apos;m open to full-stack opportunities and interesting collaborations. Let&apos;s build something extraordinary together.
            </p>
            <div className="pt-8 flex justify-center">
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
