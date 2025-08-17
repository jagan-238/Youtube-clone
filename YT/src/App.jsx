import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoDetail from "./pages/VideoDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthProvider, useAuth } from "./context/AuthContext";
import "./App.css";
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Login />;
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
