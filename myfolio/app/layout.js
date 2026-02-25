import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Akash Poddar | Portfolio',
  description: 'Full-stack Web Developer skilled in React, Node.js, and Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white selection:bg-green-500/30">
        <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/5">
          <nav className="flex justify-center items-center space-x-8 py-6 px-6 max-w-7xl mx-auto">
            <Link href="/" className="hover:text-green-400 transition-colors font-medium">Home</Link>
            <Link href="/about" className="hover:text-green-400 transition-colors font-medium">About</Link>
            <Link href="/projects" className="hover:text-green-400 transition-colors font-medium">Projects</Link>
            <Link href="/blog" className="hover:text-green-400 transition-colors font-medium">Blog</Link>
            <Link href="/contact" className="hover:text-green-400 transition-colors font-medium">Contact</Link>
          </nav>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="py-12 text-center text-white/20 text-sm border-t border-white/5 bg-black">
          <p>© {new Date().getFullYear()} Akash Poddar. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
