import { useSelector } from "react-redux";
import PostCard from "@/component/postCard";

const Home = () => {
  const posts = useSelector(state => state.Slice.posts);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x opacity-30 blur-3xl"></div>
      <div className="relative z-10 w-full max-w-4xl mx-auto p-8 rounded-2xl shadow-2xl bg-black/60 backdrop-blur-md mt-10">
        <h1 className="text-4xl font-bold mb-4 text-center text-white drop-shadow-lg">Your Posts</h1>
        <p className="mb-6 text-lg text-center text-gray-200">Create, edit, favorite, and manage your content in a beautiful, interactive interface.</p>
        <div className="flex flex-wrap justify-center gap-6 w-full">
          {posts && posts.length > 0 ? (
            posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))
          ) : (
            <p className="text-gray-200 text-center w-full">No posts found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
