'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // npm install lucide-react

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar on route change (like clicking on a link)
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    window.addEventListener('hashchange', handleRouteChange);
    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

  return (
    <>
      {/* Menu Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 text-white bg-black p-2 rounded md:hidden"
      >
        <Menu />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-40 transform transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-4">
          <Link href="/#home" className="hover:text-blue-400">Home</Link>
          <Link href="/#about" className="hover:text-blue-400">About</Link>
          <Link href="/#projects" className="hover:text-blue-400">Projects</Link>
          <Link href="/#blogs" className="hover:text-blue-400">Blogs</Link>
          <Link href="/#contact" className="hover:text-blue-400">Contact</Link>
        </nav>
      </div>
    </>
  );
}
