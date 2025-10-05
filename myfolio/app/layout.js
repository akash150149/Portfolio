import Link from 'next/link';
import './globals.css'; // Tailwind styles

export const metadata = {
  title: 'My Portfolio',
  description: 'Built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans scroll-smooth bg-gray-100">
        {/* 🧭 Static Navbar */}
        <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md text-white shadow-md z-50">
          <nav className="flex justify-center space-x-8 py-4">
            <Link href="/" className="hover:text-blue-400 transition">Home</Link>
            <Link href="/about" className="hover:text-blue-400 transition">About</Link>
            <Link href="/projects" className="hover:text-blue-400 transition">Projects</Link>
            <Link href="/blogs" className="hover:text-blue-400 transition">Blogs</Link>
            <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="pt-20 px-6">{children}</main>
      </body>
    </html>
  );
}
