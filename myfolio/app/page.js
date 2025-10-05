'use client';
import Link from 'next/link';
// import VantaBirds from '../components/VantaBirds'

export default function HomePage() {
  return (
    <>
      {/* Birds Background - Outside main container */}
      {/* <VantaBirds /> */}
      
      {/* Content with transparency */}
      <main className="relative z-10 space-y-20 scroll-smooth">
        {/* Hero Section - Transparent with backdrop blur */}
        <section id="home" className="bg-black/30 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/10">
          <h1 className="text-4xl font-bold mb-2 text-white drop-shadow-lg">Hi There 👋 !</h1>
          <h1 className="text-4xl font-bold mb-2 text-white drop-shadow-lg">I&apos;m Akash Poddar</h1>
          <p className="text-lg text-white/90 drop-shadow-md">
            I&apos;m a full-stack web developer skilled in React, Node.js, and exploring Next.js!
          </p>
          <p className="mt-4">
            <a
              href="#projects"
              className="inline-block bg-blue-600/80 backdrop-blur-sm text-white px-4 py-2 rounded hover:bg-blue-700/80 transition border border-blue-400/30"
            >
              See My Work
            </a>
          </p>
        </section>

        {/* About Section - Semi-transparent */}
        <section id="about" className="p-6 rounded-xl bg-gray-800/40 backdrop-blur-md text-white shadow-lg border border-white/10">
          <h2 className="text-3xl font-semibold mb-4 drop-shadow-lg">About Me</h2>
          <div>
            <h1 className="text-2xl font-bold drop-shadow-md">About Me</h1>
            <p className="mt-2 text-white/90">I&apos;m a web developer with experience in React, Node.js, and now learning Next.js.</p>
          </div>
        </section>

        {/* Projects Section - Transparent with glass effect */}
        <section id="projects" className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-lg text-white shadow-xl border border-white/20">
          <h2 className="text-3xl font-semibold mb-6 drop-shadow-lg">Featured Projects</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Project: MedChain*/}
            <li className="p-4 border border-white/20 rounded-lg shadow-lg hover:shadow-xl transition bg-black/20 backdrop-blur-sm hover:bg-black/30">
              <h3 className="text-xl font-bold drop-shadow-md">MedChain</h3>
              <p className="text-white/80">
                A decentralized web-based system for authenticating medicines and preventing counterfeiting, built on Filecoin and Hypergraph.
                <br />
                <a
                  href="https://github.com/debjitmitra000/MedChain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline mt-2 inline-block hover:text-blue-300"
                >
                  View on GitHub
                </a>
                <br />
                <Link href="/projects/aero" className="text-blue-400 underline mt-1 inline-block hover:text-blue-300">
                  View Details
                </Link>
              </p>
            </li>

            {/* Project: Apna */}
            <li className="p-4 border border-white/20 rounded-lg shadow-lg hover:shadow-xl transition bg-black/20 backdrop-blur-sm hover:bg-black/30">
              <h3 className="text-xl font-bold drop-shadow-md">Apna - Web3 Property Marketplace</h3>
              <p className="text-white/80">
                A decentralized real estate marketplace where users can buy and sell property NFTs.
                <br />
                <a
                  href="https://github.com/akash150149/Apna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline mt-2 inline-block hover:text-blue-300"
                >
                  View on GitHub
                </a>
                <br />
                <Link href="/projects/apna" className="text-blue-400 underline mt-1 inline-block hover:text-blue-300">
                  View Details
                </Link>
              </p>
            </li>
          </ul>
        </section>

        {/* Blogs Section - Glass morphism effect
        <section id="blogs" className="p-6 rounded-xl bg-gray-800/40 backdrop-blur-md text-white shadow-lg border border-white/10">
          <h2 className="text-3xl font-semibold mb-4 drop-shadow-lg">My Blogs</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'IMA Attachment Camp Journey',
                slug: 'ima-attachment',
                excerpt:
                  'My thrilling 12-day experience at the Indian Military Academy – a journey of discipline, brotherhood, and leadership.',
              },
              {
                title: 'My SSB Experience',
                slug: 'ssb-experience',
                excerpt:
                  'From nervous beginnings to unexpected learnings – my story of the 5-day SSB interview process.',
              },
            ].map((blog) => (
              <li
                key={blog.slug}
                className="border border-white/20 rounded-lg p-6 shadow-lg hover:shadow-xl transition bg-gray-900/40 backdrop-blur-sm hover:bg-gray-900/60"
              >
                <h3 className="text-xl font-bold mb-2 drop-shadow-md">{blog.title}</h3>
                <p className="text-gray-300/90 mb-4">{blog.excerpt}</p>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  Read More
                </Link>
              </li>
            ))}
          </ul>
        </section> */}

        {/* Contact Section */}
        <section id="contact" className="p-6 rounded-xl bg-gray-700/50 backdrop-blur-md text-white shadow-lg border border-white/10">
          <h2 className="text-3xl font-semibold mb-4 drop-shadow-lg">Contact Me</h2>
          <p className="text-white/90">[Add your contact form or details here]</p>
        </section>
      </main>
    </>
  );
}
