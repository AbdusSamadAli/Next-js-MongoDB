import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 py-4 px-6 shadow-lg">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-white text-xl font-bold hover:text-gray-400 transition">
          Home
        </Link>
        <Link
          href="/addTopic"
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
        >
          Add Topic
        </Link>
      </div>
    </nav>
  );
}
