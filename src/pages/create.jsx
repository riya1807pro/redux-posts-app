import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { add } from "../reduxConcepts/slice";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  function onSubmit() {
    if (title.trim() === "" || description.trim() === "") {
      alert("Please Enter Title and Description ...");
    } else {
      dispatch(add({
  title: title,
  description: description
}));
      console.log("🎉 Post successfully created!");
      setTitle("");
      setDescription("");
    }
  }

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md pt-30 rounded-xl p-6 space-y-4">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Create New Post</h2>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-700">Title</label>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-700">Description</label>
        <textarea
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-slate-300 rounded-lg px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-700">Upload File</label>
        <input
          type="file"
          className="w-full border border-slate-300 rounded-lg px-3 py-2 cursor-pointer"
        />
      </div>

      <div className="pt-4">
        <Button onClick={onSubmit} className="w-full">Save</Button>
      </div>
    </div>
  );
};

export default Create;
