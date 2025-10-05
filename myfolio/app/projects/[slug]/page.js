const projectDetails = {
  medchain: {
    title: 'MedChain',
    description:
      'A decentralized web-based system for authenticating medicines and preventing counterfeiting, built on Filecoin and Hypergraph.',
    github: 'https://github.com/debjitmitra000/MedChain',
  },
  apna: {
    title: 'Apna - Web3 Property Marketplace',
    description:
      'Apna is a decentralized real estate platform where users can buy and sell property NFTs. Built using React, Solidity, Hardhat, and Ethers.js. Features include wallet authentication, smart contract transactions, and blockchain-based tokenization.',
    github: 'https://github.com/akash150149/Apna',
  },
  aero: {
    title: 'Aero - Airline Booking System',
    description:
      'Aero is a full-stack airline booking platform built using the MERN stack. Users can search flights, reserve seats, authenticate, and make payments through Razorpay. Includes separate dashboards for admin and users.',
    github: 'https://github.com/akash150149/aero',
  },
};

export default function ProjectDetail({ params }) {
  const { slug } = params;
  const project = projectDetails[slug];

  if (!project) {
    return <div className="text-center text-red-600 text-lg mt-10">Project not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
      <p className="text-gray-700 leading-relaxed">{project.description}</p>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        View on GitHub
      </a>
    </div>
  );
}
