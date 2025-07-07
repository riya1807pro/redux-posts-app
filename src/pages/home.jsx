import { useSelector } from "react-redux";
import PostCard from "@/component/postCard";
import { motion } from "framer-motion";

const Home = () => {
  const posts = useSelector(state => state.Slice.posts);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      className="flex flex-col items-center p-4 min-h-screen w-full bg-gray-50 dark:bg-zinc-900 pt-20"
    >
      <motion.h1
        className="text-4xl font-bold text-indigo-900 dark:text-indigo-400 mb-6 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        Manage your content like a pro 🚀
      </motion.h1>

      <motion.div
        className="flex flex-wrap justify-center gap-6 w-full max-w-6xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {posts && posts.length > 0 ? (
          posts.map(post => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.97 }}
            >
              <PostCard post={post} />
            </motion.div>
          ))
        ) : (
          <motion.p
            className="text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No posts found.
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Home;
