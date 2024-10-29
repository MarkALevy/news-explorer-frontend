import { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import Footer from "../Footer/Footer.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="page">
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/saved-news"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SavedNews />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={
            isLoggedIn ? (
              <Navigate to="/saved-news" replace />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
