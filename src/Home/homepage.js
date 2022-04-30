import React from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";
import StartButton from "./components/StartButton";

import "./homepage.css";

const Home = () => {
    return(
        <div>
            <Header />
            <Banner />
            <StartButton />
        </div> 
    );
};

export default Home