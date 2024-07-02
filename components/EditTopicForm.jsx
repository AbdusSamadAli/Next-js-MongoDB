"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function EditTopicForm({id, title, description}) {
  const [newTitle, setnewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-3">
      <input
        onChange={(e) => setnewTitle(e.target.value)}
        className="border border-slate-800 px-8 py-2"
        value={newTitle}
        type="text"
        placeholder="Enter Title"
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        className="border border-slate-800 px-8 py-2"
        value={newDescription}
        type="text"
        placeholder="Enter Description"
      />
      <button className="bg-blue-400 hover:bg-blue-500 py-3 px-6 w-fit">
        Update
      </button>
    </form>
  );
}
