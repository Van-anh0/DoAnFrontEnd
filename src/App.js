import React from "react";
import "App.scss";
import "App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "components/Home/Home";
import Detail from "components/Detail/Detail";
import Showtime from "components/Showtime/Showtime";
import Cinema from "components/Cinema/Cinema";
import Footer from "components/Footer/Footer";
import Introduce from "components/Introduce/Introduce";
import Seat from "components/Seat/Seat";
import Cart from "components/Cart/Cart";
import Header from "components/Header/Header";
import SearchPage from "components/Search/Search";
import PromotionPage from "components/Promotion/promotion";
import UpdatePage from "components/UpdatePage/UpdatePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/showtime" element={<Showtime />} />
          <Route path="/cinema" element={<Cinema />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/detail/:filmId" element={<Detail />} />
          <Route path="/seat" element={<Seat />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/promotion" element={<PromotionPage />} />
          <Route path="/question" element={<UpdatePage />} />
          <Route path="/newfeed" element={<UpdatePage />} />
          <Route path="/contact" element={<UpdatePage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
