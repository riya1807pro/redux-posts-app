import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { add } from "../reduxConcepts/slice";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const dispatch = useDispatch();

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function onSubmit() {
    if (title.trim() === "" || description.trim() === "") {
      alert("Please Enter Title and Description ...");
    } else {
      dispatch(add({
        id: Date.now(),
        title,
        description,
        date: new Date().toLocaleDateString(),
        image: image || "https://placekitten.com/300/200"
      }));
      setTitle("");
      setDescription("");
      setImage("");
      setPreview("");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="max-w-xl mx-auto bg-white dark:bg-zinc-800 shadow-lg rounded-xl p-6 space-y-4 mt-8"
    >
      <motion.h2
        className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Create New Post
      </motion.h2>

      <motion.div
        className="space-y-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Title</label>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-700 dark:text-white"
        />
      </motion.div>

      <motion.div
        className="space-y-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Description</label>
        <textarea
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-700 dark:text-white"
        />
      </motion.div>

      <motion.div
        className="space-y-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 cursor-pointer dark:bg-zinc-700 dark:text-white"
        />
        {preview && (
          <motion.img
            src={preview}
            alt="Preview"
            className="mt-2 rounded-lg w-full h-48 object-cover shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
          />
        )}
      </motion.div>

      <motion.div
        className="pt-4"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button onClick={onSubmit} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
          Save
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Create;
