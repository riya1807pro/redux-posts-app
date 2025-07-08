import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useDispatch } from "react-redux";
import { remove, toggleFav } from "../reduxConcepts/slice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function PostCard({ post }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Helper to check if the image is a valid image type
  const isImage = (url) => {
    if (!url) return false;
    return url.startsWith("data:image") || url.match(/\.(jpeg|jpg|gif|png|webp|svg)$/i);
  };

  return (
    <motion.div
      className="max-w-sm w-full bg-gradient-to-br from-purple-400 via-pink-300 to-red-200rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 p-4 flex flex-col justify-between border-2 border-transparent"
      style={{ minHeight: "26rem" }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-indigo-700 truncate" title={post.title}>
            {post.title}
          </h2>
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{post.date}</span>
        </div>
        {isImage(post.image) ? (
          <div className="flex justify-center items-center w-full mb-2">
            <img
              src={post.image}
              alt="post"
              className="rounded-lg w-full h-40 object-cover border border-indigo-100 shadow"
            />
          </div>
        ) : post.image ? (
          <a href={post.image} target="_blank" rel="noopener noreferrer" className="block text-blue-600 underline break-all mb-2">View File</a>
        ) : null}
        <p className="text-gray-700 bg-indigo-50 rounded p-2 mb-4 max-h-24 min-h-[2.5rem] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-300">
          {post.description}
        </p>
      </div>
      <div className="flex space-x-2 mt-auto">
        {post.small ? (
          <Button
            onClick={() => dispatch(toggleFav(post.id))}
            className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500 transition flex-1"
          >
            {post.fav ? "★ Fav" : "☆ Fav"}
          </Button>
        ) : (
          <>
            <Button
              onClick={() => dispatch(remove(post.id))}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition flex-1"
            >
              Delete
            </Button>
            <Button
              onClick={() => navigate(`/edit/${post.id}`)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition flex-1"
            >
              Edit
            </Button>
            <Button
              onClick={() => dispatch(toggleFav(post.id))}
              className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500 transition flex-1"
            >
              {post.fav ? "★ Fav" : "☆ Fav"}
            </Button>
          </>
        )}
      </div>
    </motion.div>
)}