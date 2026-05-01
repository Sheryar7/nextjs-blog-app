import { Post } from "@/types/post";

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);

  if (!res.ok) throw new Error("Failed to fetch post");

  return res.json();
}

// Next.js 15 (params is a Promise)
export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = await getPost(id);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-12">
      <article className="w-full max-w-3xl bg-white rounded-2xl shadow-md border border-gray-100 p-8 md:p-12">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 capitalize text-gray-900">
          {post.title}
        </h1>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-6" />

        {/* Body */}
        <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
          {post.body}
        </div>

      </article>
    </div>
  );
}