import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Portfolio from "./components/Portfolio";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
    return (
        <>
         
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="about" element={<About />} />
                <Route path="portfolio" element={<Portfolio />} />
            </Routes>
        </>

    )
}

export default App;