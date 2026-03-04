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
            <p className="intro-text text-xl md:text-2xl leading-relaxed">
              I am a <span className="text-green-400 font-bold">Full-Stack and Web3 Developer</span> focused on building functional applications using the MERN stack and blockchain technologies.
            </p>
            <p className="text-zinc text-lg leading-relaxed">
              My work includes developing high-performance platforms like <span className="text-white font-medium">Haat Baazar</span>, which utilizes React, Node.js, and MongoDB with secure JWT authentication and Razorpay integration.
            </p>
            <p className="text-zinc text-lg leading-relaxed">
              I specialize in decentralized systems, using tools such as <span className="text-white font-medium">Solidity, Hardhat, and AlgoKit</span>. For example, I built <span className="text-white font-medium">AlgoMakan</span>, a real estate marketplace on the Algorand blockchain that uses NFT assets and smart contracts for secure property investment. I also developed <span className="text-white font-medium">MedChain</span>, a medicine authentication system that integrates Ethereum and IPFS for immutable storage.
            </p>
          </div>

          <div className="md:col-span-4 space-y-6">
            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 space-y-8">
              <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest border-b border-white/5 pb-4">Technical Toolkit</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono text-green-500/60 uppercase tracking-widest mb-3">Languages</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed font-medium">
                    JavaScript, Python, Solidity, TypeScript, HTML/CSS
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-green-500/60 uppercase tracking-widest mb-3">Frontend</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed font-medium">
                    ReactJS, Vite, Tailwind CSS, Web3.js, Ethers.js
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-green-500/60 uppercase tracking-widest mb-3">Backend & DB</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed font-medium">
                    Node.js, Express.js, JWT, MongoDB, Mongoose
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-green-500/60 uppercase tracking-widest mb-3">Web3/Blockchain</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed font-medium">
                    Ethereum, Algorand, Pera Wallet, IPFS (Lighthouse)
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-green-500/60 uppercase tracking-widest mb-3">Tools & platforms</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed font-medium">
                    Docker, Git, Google Cloud, Hardhat, Razorpay
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
