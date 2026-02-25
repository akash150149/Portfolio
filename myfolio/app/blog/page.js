import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';

export default function BlogPage() {
  const blogs = Object.values(blogPosts);

  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            Blog
          </h1>
          <p className="text-zinc text-xl max-w-2xl font-mono">
            A collection of my personal journeys, military camp experiences, and technical insights.
          </p>
        </header>

        <div className="space-y-0 divide-y divide-white/5 border-y border-white/5">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group flex flex-col md:flex-row md:items-center justify-between py-12 hover:bg-white/[0.02] px-6 -mx-6 transition-colors rounded-2xl"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-zinc-500 text-sm font-mono uppercase tracking-widest">
                  <Calendar size={14} className="text-green-500/50" />
                  {blog.date}
                </div>
                <h2 className="text-3xl font-bold group-hover:text-green-400 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-zinc text-lg max-w-3xl leading-relaxed">
                  {/* Extracting excerpt from first paragraph of content if available, or using a default */}
                  {blog.excerpt || `A thrilling narrative about ${blog.title}.`}
                </p>
              </div>
              <ArrowRight className="hidden md:block text-zinc-600 group-hover:text-green-400 transform group-hover:translate-x-2 transition-all" size={32} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
