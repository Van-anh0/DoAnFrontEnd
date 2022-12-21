import React from "react";
import "./App.scss";
import "./App.css";
import Navbar from "./components/Menubar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import DetailP from "./pages/DetailP";
import Showtimes from "./pages/Showtimes";
import Cinema from "./pages/Cinema";
import Login from "./pages/Login";
import Footer from "./components/Footer/Footer";
import Introduce from "./pages/Introduce";
import SeatPage from "./pages/SeatPage";
import Payment from "./pages/Payment";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/showtimes" element={<Showtimes />} />
          <Route path="/cinema" element={<Cinema />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/detail/:filmId" element={<DetailP />} />
          <Route path="/lichchieu" element={<SeatPage />} />
          <Route path="/thanhtoan" element={<Payment />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
