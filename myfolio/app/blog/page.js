'use client';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

export default function BlogPage() {
  const blogs = Object.values(blogPosts);

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="container-narrow space-y-24">
        <header className="space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
            Journal
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
            A collection of my personal journeys, military camp experiences, and technical insights.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blog/${blog.slug}`} className="group space-y-6 block">
              <div className="aspect-[16/9] rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 overflow-hidden relative group-hover:border-emerald-200 dark:group-hover:border-emerald-800 transition-all hover:shadow-lg">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-200 dark:text-gray-800 font-bold">
                    Journal Entry
                 </div>
              </div>
              <div className="space-y-3">
                <div className="text-xs text-gray-400 dark:text-gray-500 font-medium">March 16, 2026 • 5 min read</div>
                <h2 className="text-2xl font-bold tracking-tight dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                  {blog.excerpt || "Dive into the details of this experience and learn more about the journey..."}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
