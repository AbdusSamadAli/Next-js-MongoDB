import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};
export default async function TopicsList() {
  const { topics } = await getTopics();
  return (
    <div className="space-y-4">
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-6 border border-slate-300 rounded-lg shadow-md bg-white flex justify-between items-start gap-5"
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-800">{t.title}</h2>
            <div className="text-slate-600">{t.description}</div>
          </div>
          <div className="flex items-center gap-3">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`} className="text-blue-500 hover:text-blue-600 transition">
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}