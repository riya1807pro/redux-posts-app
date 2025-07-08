// Example for fav.jsx
// filepath: c:\Users\HP\Downloads\riya\redux-crud-app\src\pages\fav.jsx
import { useSelector } from "react-redux";
import PostCard from "@/component/postCard";

const Fav = () => {
  const favPosts = useSelector((state) => state.Slice.posts.filter(post => post.fav));

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 text-white overflow-hidden pt-20">
      <div className="relative z-10 w-full max-w-6xl mx-auto p-8 rounded-2xl shadow-2xl bg-black/60 backdrop-blur-md mt-10">
        <h1 className="text-4xl font-bold mb-4 text-center text-yellow-300 drop-shadow-lg">Your Favorite Posts</h1>
        <p className="mb-6 text-lg text-center text-gray-200">All your starred content in one place.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {favPosts.length === 0 ? (
            <div className="text-gray-200 text-center w-full">No fav posts yet.</div>
          ) : (
            favPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Fav;