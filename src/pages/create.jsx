import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { add } from "../reduxConcepts/slice";
import { useNavigate } from "react-router-dom";
import { Loader } from "@/component/loading";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

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

   const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
          <div className="w-full max-w-sm p-10 rounded-lg animate-pulse h-80">
            <Loader />
          </div>
        </div>
      );
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
      navigate("/")
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x opacity-30 blur-3xl"></div>
      <div className="relative z-10 w-full max-w-xl p-8 rounded-2xl shadow-2xl bg-black/60 backdrop-blur-md mt-10">
        <h2 className="text-3xl font-bold mb-4 text-center text-white drop-shadow-lg">Create New Post</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-200">Title</label>
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-slate-500 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-zinc-800 text-white placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-200">Description</label>
            <textarea
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-slate-500 rounded-lg px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-zinc-800 text-white placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-200">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border border-slate-500 rounded-lg px-3 py-2 cursor-pointer bg-zinc-800 text-white"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-2 rounded-lg w-full h-48 object-cover shadow-md"
              />
            )}
          </div>
          <div className="pt-4">
            <Button onClick={onSubmit} className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-200">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
