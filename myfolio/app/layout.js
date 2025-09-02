import Link from 'next/link';
import Script from 'next/script';
import './globals.css'; // This includes Tailwind styles
import MobileSidebar from '../components/MobileSlidebar';
import DropdownMenu from '../components/DropdownMenu';

export const metadata = {
  title: 'My Portfolio',
  description: 'Built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans p-4 scroll-smooth">
         <MobileSidebar />
          <DropdownMenu />
        {/* Vanta.js Scripts - Add these */}
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          strategy="beforeInteractive"
        />
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.birds.min.js"
          strategy="beforeInteractive"
        />

        {/* <header className="border-b pb-2 mb-4">
         <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-8 text-white p-4 z-50 shadow space-x-4 backdrop-blur-md">
            <Link href="/#home" className="text-blue-600 hover:underline">Home</Link>
            <Link href="/#about" className="text-blue-600 hover:underline">About</Link>
            <Link href="/#projects" className="text-blue-600 hover:underline">Projects</Link>
            <Link href="/#blogs" className="text-blue-600 hover:underline">Blog</Link>
            <Link href="/#contact" className="text-blue-600 hover:underline">Contact</Link>
          </nav>
        </header> */}
        <main>{children}</main>
      </body>
    </html>
  );
}