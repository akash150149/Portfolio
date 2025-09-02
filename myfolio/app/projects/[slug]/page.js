const projectDetails = {
  apna: {
    title: 'Apna - Web3 Property Marketplace',
    description:
      'Apna is a decentralized real estate platform where users can buy/sell property NFTs. Built using React, Solidity, Hardhat, and Ethers.js. Features include wallet auth, smart contract transactions, and blockchain tokenization.',
    github: 'https://github.com/akash150149/Apna',
  },
  aero: {
    title: 'Aero - Airline Booking System',
    description:
      'Aero is a full-stack airline booking platform using the MERN stack. Users can search flights, reserve seats, authenticate, and pay using Razorpay. Includes admin and user dashboards.',
    github: 'https://github.com/akash150149/aero',
  },
};

export default function ProjectDetail({ params }) {
  const { slug } = params;
  const project = projectDetails[slug];

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-gray-700">{project.description}</p>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View on GitHub
      </a>
    </div>
  );
}
