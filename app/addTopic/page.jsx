"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddTopic = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        setTitle("");
        setDescription("");
        onAdd(); // Trigger callback to update topics list
        router.push("/"); // Navigate back to home page
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-3">
      <input
        className="border border-slate-800 px-8 py-2"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Enter Title"
      />
      <input
        className="border border-slate-800 px-8 py-2"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder="Enter Description"
      />
      <button
        type="submit"
        className="bg-blue-400 hover:bg-blue-500 py-3 px-6 w-fit"
      >
        Add
      </button>
    </form>
  );
};

export default AddTopic;


