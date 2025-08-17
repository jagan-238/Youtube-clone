import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Menu, Search, Mic, Bell, Upload, User } from "lucide-react";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query}`);
      setQuery("");
    }
  };

  // handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <nav className="flex items-center justify-between bg-white text-black px-4 py-2 shadow-md sticky top-0 z-50">
      {/* Left - Menu & Logo */}
      <div className="flex items-center gap-4">
        <Menu className="w-6 h-6 cursor-pointer" />
        <Link to="/" className="flex items-center gap-1">
          <span className="text-xl font-bold text-red-600">YouTube</span>
          <sup className="text-xs text-gray-600">Clone</sup>
        </Link>
      </div>

      {/* Middle - Search */}
      <form
        onSubmit={handleSearch}
        className="flex items-center w-1/2 max-w-xl"
      >
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border border-gray-300 rounded-l-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-gray-100 border border-gray-300 border-l-0 px-4 py-2 rounded-r-full hover:bg-gray-200"
        >
          <Search className="w-5 h-5" />
        </button>
        <button
          type="button"
          className="ml-2 bg-gray-100 p-2 rounded-full hover:bg-gray-200"
        >
          <Mic className="w-5 h-5" />
        </button>
      </form>

      {/* Right - Icons & Auth */}
      <div className="flex items-center gap-4">
        <Upload className="w-6 h-6 cursor-pointer" />
        <Bell className="w-6 h-6 cursor-pointer" />

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm px-4 py-1 border rounded-full hover:bg-gray-100 flex items-center gap-1"
          >
            <User className="w-4 h-4" /> Login
          </Link>
          <Link
            to="/signup"
            className="text-sm px-4 py-1 border rounded-full hover:bg-gray-100 flex items-center gap-1"
          >
            <User className="w-4 h-4" /> Signup
          </Link>
          <button
            onClick={handleLogout}
            className="text-sm px-4 py-1 border rounded-full hover:bg-gray-100 flex items-center gap-1"
          >
            <User className="w-4 h-4" /> Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
