import Link from 'next/link';
import { ArrowLeft, Calendar, Share2, Clock } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';

export default async function BlogDetail({ params }) {
    const { slug } = await params;
    const post = blogPosts[slug];

    if (!post) {
        return (
            <div className="bg-black min-h-screen text-white flex items-center justify-center pt-32 px-6">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl font-bold">Blog not found</h1>
                    <Link href="/blog" className="text-green-400 hover:text-green-300 inline-flex items-center gap-2">
                        <ArrowLeft size={16} /> Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black min-h-screen text-white pt-32 pb-24 font-sans relative overflow-hidden">
            {/* Background Image Effect */}
            {post.backgroundImage && (
                <div
                    className="fixed inset-0 z-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: `url(${post.backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(60px)',
                    }}
                />
            )}

            <article className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Navigation */}
                <Link href="/blog" className="text-zinc-500 hover:text-green-400 inline-flex items-center gap-2 mb-12 transition-colors group text-sm font-medium">
                    <ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                </Link>

                {/* Header */}
                <header className="space-y-8 mb-20">
                    <div className="flex flex-wrap items-center gap-6 text-sm font-mono text-zinc-500 uppercase tracking-widest">
                        <span className="flex items-center gap-2">
                            <Calendar size={14} className="text-green-500/50" /> {post.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock size={14} className="text-green-500/50" /> {post.readTime}
                        </span>
                    </div>
                    <h1 className="heading-fluid font-bold">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 pt-4">
                        <div className="w-14 h-14 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-xs text-white/40 font-mono">
                            AP
                        </div>
                        <div>
                            <p className="font-bold text-lg">Akash Poddar</p>
                            <p className="text-zinc-500 text-sm font-mono uppercase tracking-wider">Full-stack Developer</p>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="max-w-none">
                    {post.content}
                </div>

                {/* Footer CTA */}
                <div className="mt-32 p-12 md:p-20 rounded-[3rem] bg-zinc-900/20 border border-white/5 text-center space-y-8 mb-12">
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Enjoyed the story?</h3>
                    <p className="text-zinc text-lg max-w-xl mx-auto">I share more about my journey in tech and my experiences in the military camp. Stay tuned for more updates.</p>
                    <div className="flex justify-center gap-4 pt-4">
                        <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-green-400 hover:text-black transition-all group">
                            <Share2 size={20} /> Share Story
                        </button>
                    </div>
                </div>
            </article>
        </div>
    );
}
