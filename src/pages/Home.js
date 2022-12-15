import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Slider";

import Cinemas from "../components/Cinemas/Cinemas";
// import ModalLogin from "../components/modal/ModalLogin";
import TabDetail from "./pages_data/TabDetail";
function Home(){
    return(
        <div>
            <Slider/>
            <TabDetail/>
            <Cinemas/>
        </div>
    )
}

export default Home;