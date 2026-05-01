import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        
        {/* Logo Style */}
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
          <span className="text-gray-900">&lt;</span>
          <span className="text-blue-300">sherry</span>
          <span className="text-gray-900"> /&gt;</span>
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-3xl sm:text-4xl font-bold">
          Modern Blog for Developers
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Sharing insights on Next.js, TypeScript, and full-stack development.
          Built to learn real-world architecture and modern frontend practices.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/posts"
            className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 transition"
          >
            Explore Posts
          </Link>

          <a
            href="https://github.com"
            target="_blank"
            className="text-sm font-semibold text-gray-800 hover:text-blue-600 transition"
          >
            View GitHub →
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* Card 1 */}
        <div className="p-6 border rounded-2xl hover:shadow-md transition">
          <h3 className="font-semibold text-lg">Modern Stack</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Built with Next.js App Router, Server Components, and Tailwind CSS.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 border rounded-2xl hover:shadow-md transition">
          <h3 className="font-semibold text-lg">Learning Focus</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Designed as a real-world project to master frontend architecture.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 border rounded-2xl hover:shadow-md transition">
          <h3 className="font-semibold text-lg">Scalable</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Ready to integrate with Supabase and become a full-stack LMS.
          </p>
        </div>
      </section>
    </div>
  );
}