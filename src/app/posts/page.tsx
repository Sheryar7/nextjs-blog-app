import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
};

type PostsResponse = {
  posts: Post[];
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://dummyjson.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch posts");

  const data: PostsResponse = await res.json();
  return data.posts;
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Explore Posts
        </h1>
        <p className="text-gray-500 mt-2">
          Discover insights, stories, and ideas from our blog
        </p>
      </div>

      {/* Posts Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 12).map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="group bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition duration-300"
          >
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
              {post.title}
            </h2>

            {/* Body */}
            <p className="text-gray-500 mt-3 text-sm leading-relaxed">
              {post.body.substring(0, 90)}...
            </p>

            {/* Read More */}
            <div className="mt-4 text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition">
              Read more →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}