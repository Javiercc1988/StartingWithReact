import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { Login } from "./Login";
import { Navbar } from "./Navbar";

export const MainApp = () => {
  return (
    <>
      <h1>Main App</h1>
      <Navbar />

      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<AboutPage />} />

        {/* Redirección a ruta desconocida */}
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
