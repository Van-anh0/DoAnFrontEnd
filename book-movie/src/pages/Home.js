import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Slider";

import Cinemas from "../components/Cinemas/Cinemas";
import ModalLog from "../components/modal/modalLogin";
import TabCT from "./pages_data/TabCT";
function Home(){
    return(
        <div>
            
            
            <Slider/>
            <TabCT/>
            <Cinemas/>
       
            
        </div>
    )
}

export default Home;