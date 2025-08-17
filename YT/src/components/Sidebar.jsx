import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-56 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-screen p-4 hidden md:block">
      <ul className="space-y-2">
        <li>
          <Link
            to="/"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <span className="text-xl">🏠</span>
            <span className="text-sm font-medium">Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <span className="text-xl">🔑</span>
            <span className="text-sm font-medium">Login</span>
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <span className="text-xl">📝</span>
            <span className="text-sm font-medium">Signup</span>
          </Link>
        </li>
      </ul>

      {/* Divider */}
      <hr className="my-4 border-gray-200 dark:border-gray-700" />

      <ul className="space-y-2">
        <li>
          <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition w-full text-left">
            <span className="text-xl">🔥</span>
            <span className="text-sm font-medium">Trending</span>
          </button>
        </li>
        <li>
          <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition w-full text-left">
            <span className="text-xl">🎵</span>
            <span className="text-sm font-medium">Music</span>
          </button>
        </li>
        <li>
          <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition w-full text-left">
            <span className="text-xl">🎬</span>
            <span className="text-sm font-medium">Movies</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
