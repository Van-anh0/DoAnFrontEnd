import React from "react";
import "App.scss";
import "App.css";
import Navbar from "components/Menubar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "components/Home/Home";
import Detail from "components/Detail/Detail";
import Showtime from "components/Showtime/Showtime";
import Cinema from "components/Cinema/Cinema";
import Login from "components/Login/Login";
import Footer from "components/Footer/Footer";
import Introduce from "components/Introduce/Introduce";
import Seat from "components/Seat/Seat";
import Cart from "components/Cart/Cart";
import Header from "components/Header/Header";
import SearchPage from "components/SearchPage/SearchPage";
import SearchTest from "./components/SearchPage/SearchText";
function App() {
  return (
    <div className="App">
      {/* <SearchTest/> */}
      {/* <SearchPage/> */}
      <BrowserRouter>
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/showtime" element={<Showtime />} />
          <Route path="/cinema" element={<Cinema />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/detail/:filmId" element={<Detail />} />
          <Route path="/seat" element={<Seat />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
