import Link from 'next/link';

const blogs = [
  {
    title: 'IMA Attachment Camp Journey',
    slug: 'ima-attachment',
    excerpt: 'My thrilling 12-day experience at the Indian Military Academy – a journey of discipline, brotherhood, and leadership.',
  },
  {
    title: 'My SSB Experience',
    slug: 'ssb-experience',
    excerpt: 'From nervous beginnings to unexpected learnings – my story of the 5-day SSB interview process.',
  },
];

export default function BlogPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold mb-6">My Life Experiences</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <li key={blog.slug} className="border rounded-lg p-6 shadow hover:shadow-xl transition">
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-700 mb-4">{blog.excerpt}</p>
            <Link
              href={`/blog/${blog.slug}`}
              className="text-blue-600 underline hover:text-blue-800"
            >
              Read More
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
