import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/Landingpage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import { useNavigate } from "react-router-dom";
import { useAuth } from "./lib/UseAuth";
import Dashboard from "./Components/Dashboard";
import Room from "./Components/Room";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const { user, loading } = useAuth();

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (!loading && user && location.pathname === "/") {
      navigate("/dashboard");
    }
    if (!loading && !user) {
      navigate("/");
    }
  }, [user, loading, location.pathname, navigate]);

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/room/:id" element={<Room />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
