export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen text-white pt-48 pb-24">
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        <header className="space-y-6">
          <h1 className="heading-fluid font-bold">About Me</h1>
          <div className="h-1 w-24 bg-green-500 rounded-full"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8 space-y-8">
            <p className="intro-text text-2xl leading-relaxed">
              I&apos;m Akash Poddar, a full-stack developer driven by the challenge of building complex,
              scalable systems and elegant user experiences.
            </p>
            <p className="text-zinc text-lg leading-relaxed">
              My journey involves bridge-building between robust backend architectures and highly
              interactive frontends. I specialize in the MERN stack with a growing fascination
              for Decentralized Applications (Web3) and the high-performance capabilities of Next.js 15.
            </p>
            <p className="text-zinc text-lg leading-relaxed">
              Beyond the screen, I find discipline and inspiration in military training and strategic
              problem-solving, which I documents in my blog.
            </p>
          </div>

          <div className="md:col-span-4 space-y-8">
            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 space-y-6">
              <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Tech Stack</h3>
              <ul className="space-y-3 font-medium">
                <li className="flex items-center gap-2"> <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Next.js / React</li>
                <li className="flex items-center gap-2"> <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Node.js / Express</li>
                <li className="flex items-center gap-2"> <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> MongoDB / PostgreSQL</li>
                <li className="flex items-center gap-2"> <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Solidity / Web3.js</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
