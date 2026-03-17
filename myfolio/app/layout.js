import Link from 'next/link';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';

export const metadata = {
  title: 'Akash Poddar | Developer',
  description: 'Full-stack Web Developer skilled in React, Node.js, and Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="text-gray-900 dark:text-gray-100 selection:bg-emerald-100 dark:selection:bg-emerald-900/40 font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <nav className="flex justify-between items-center py-4 px-6 md:px-12 max-w-7xl mx-auto">
              <Link href="/" className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Akash Poddar</Link>
              
              <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600 dark:text-gray-400">
                  <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</Link>
                  <Link href="/about" className="hover:text-gray-900 dark:hover:text-white transition-colors">About</Link>
                  <Link href="/projects" className="hover:text-gray-900 dark:hover:text-white transition-colors">Projects</Link>
                  <Link href="/blog" className="hover:text-gray-900 dark:hover:text-white transition-colors">Blog</Link>
                  <Link href="/contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</Link>
              </div>

              <div className="flex items-center gap-4">
                <ThemeToggle />
                <Link href="/resume.pdf" target="_blank" className="btn-primary text-sm py-2 px-4">
                  Download CV
                </Link>
              </div>
            </nav>
          </header>

          <main className="min-h-screen pt-20">{children}</main>

          <footer className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/40 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold tracking-tight mb-2">Akash Poddar</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Full-stack developer building digital experiences</p>
                  </div>
                  <div className="flex space-x-6 text-sm font-medium text-gray-600 dark:text-gray-400">
                    <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">LinkedIn</Link>
                    <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</Link>
                    <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Twitter</Link>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200/50 dark:border-gray-800 gap-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Akash Poddar. All rights reserved.</p>
                  <div className="flex space-x-6 text-sm text-gray-500 dark:text-gray-400">
                    <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</Link>
                    <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms</Link>
                  </div>
                </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
