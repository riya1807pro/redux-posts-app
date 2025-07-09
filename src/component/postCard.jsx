import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { remove, toggleFav } from "../reduxConcepts/slice";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Loader } from "./loading";
import ConfirmDelete from "./confirmation";

export default function PostCard({ post }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [popup, setPopup] = useState(null); // to open modal on click

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

 {popup && (
  <div className="fixed max-h-48 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded p-4 w-80 shadow-lg z-50">
    <button
      className="absolute top-1 right-2 text-lg font-bold text-gray-700 hover:text-red-500"
      onClick={() => setPopup(null)}
    >
      ✕
    </button>
    {popup.type === "image" ? (
      <img src={popup.content} alt="popup" className="max-h-36 w-auto mx-auto rounded" />
    ) : (
      <div className="space-y-2">
  <label className="block text-sm font-medium text-slate-200">Description</label>
  <div className="w-full border border-slate-500 rounded-lg px-3 py-2 h-48 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-zinc-800 text-white placeholder:text-gray-400 overflow-y-auto max-h-48">
    {popup.content}
  </div>
</div>

    )}
  </div>
)}


  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="w-full max-w-sm p-10 rounded-lg animate-pulse h-80">
          <Loader />
        </div>
      </div>
    );
  }

  const isImage = (url) => {
    if (!url) return false;
    return url.startsWith("data:image") || url.match(/\.(jpeg|jpg|gif|png|webp|svg)$/i);
  };

  return (
    <>
      <motion.div
        className="max-w-lg w-full bg-gradient-to-br from-purple-700 via-pink-500 to-red-300 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 p-4 flex flex-col justify-between border-2 border-transparent"
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
            <div
              className="flex justify-center items-center w-full mb-2 cursor-pointer"
              onClick={() => setPopup({ type: "image", content: post.image })}
            >
              <img
                src={post.image}
                alt="post"
                className="rounded-lg w-full h-40 object-cover border border-indigo-100 shadow"
              />
            </div>
          ) : post.image ? (
            <div
              onClick={() => setPopup({ type: "link", content: post.image })}
              className="block text-blue-600 underline break-all mb-2 cursor-pointer"
            >
              View File
            </div>
          ) : null}

          <p
            onClick={() => setPopup({ type: "desc", content: post.description })}
            className="text-gray-700 bg-indigo-50 rounded p-2 mb-4 max-h-24 min-h-[2.5rem] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-300 cursor-pointer"
          >
            {post.description}
          </p>
        </div>

        <div className="flex space-x-2 mt-auto gap-2">
          {post.small || location.pathname === "/fav" ? (
            <Button
              onClick={() => {
                dispatch(toggleFav(post.id));
                if (!post.fav) navigate("/fav");
              }}
              className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500 transition flex-1"
            >
              {post.fav ? "★ Fav" : "☆ Fav"}
            </Button>
          ) : (
            <>
            <ConfirmDelete onConfirm={() => dispatch(remove(post.id))}>
               <Button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition flex-1"
              >
                Delete
              </Button>
            </ConfirmDelete>
              <Button
                onClick={() => navigate(`/edit/${post.id}`)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition flex-1"
              >
                Edit
              </Button>
              <Button
                onClick={() => {
                  dispatch(toggleFav(post.id));
                  if (!post.fav) navigate("/fav");
                }}
                className="bg-yellow-400 text-black py-1 rounded hover:bg-yellow-500 transition flex-1"
              >
                {post.fav ? "★ Fav" : "☆ Fav"}
              </Button>
            </>
          )}
        </div>
      </motion.div>

      {/* Simple popup modal */}
     {popup && (
  <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-3xl bg-black/30">
    <div className="relative max-w-md w-full p-4 rounded-xl max-h-64 z-20  overflow-scroll bg-gradient-to-br from-purple-400/30 via-pink-400/20 to-red-300/60  text-lg text-white shadow-2xl border border- white/20">
      <button
        onClick={() => setPopup(null)}
        className="absolute top-2 right-2 text-4xl text-white font-extrabold transition"
      >
        X
      </button>
      {popup.type === "image" && (
        <img src={popup.content} alt="popup" className="w-full rounded-lg" />
      )}
      {popup.type === "desc" && (
        <p className="text-white text-lg">{popup.content}</p>
      )}
      {popup.type === "link" && (
        <a
          href={popup.content}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline break-all"
        >
          {popup.content}
        </a>
      )}
    </div>
  </div>
)}
    </>
  );
}
