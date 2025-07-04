import React from "react";
import PostCard from "@/component/postCard";

const Home = () => {
  return (
    <div className="flex flex-col items-center p-4 min-h-screen w-full bg-gray-50 pt-20 dark:bg-zinc-900 transition-colors duration-300">
      <div className="flex flex-col justify-center items-center p-4 m-4 border-b-2 border-black dark:border-white shadow-lg shadow-gray-700 dark:shadow-black w-full max-w-4xl">
        <h1 className="text-4xl text-indigo-950 dark:text-white text-center">
          Manage your content like a pro — clean, fast & beautifully organized.
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-4 w-full max-w-6xl">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default Home;
