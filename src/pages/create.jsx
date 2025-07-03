import React from "react";
import { Button } from "@/components/ui/button"; // yeh shadcn ka sahi path h

const Create = () => {
  function onSubmit() {
  alert("🎉 Post successfully created!");
}

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-4">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Create New Post</h2>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-700">Title</label>
        <input
          type="text"
          placeholder="Enter Title"
          className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-700">Description</label>
        <textarea
          id="description"
          placeholder="Enter description"
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
        <Button type="submit" onClick={onSubmit} className="w-full">Save</Button>
      </div>
    </div>
  );
};

export default Create;
