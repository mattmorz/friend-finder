import React from 'react';
import Friends from './components/Friends';
import About from './components/About';
import Portfolio from "./components/Portfolio";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
    return (
        <>
         <Nav/>
            <Routes>
                <Route path="/" element={<Friends/>} />
                <Route path="about" element={<About />} />
                <Route path="portfolio" element={<Portfolio />} />
            </Routes>
        </>

    )
}

export default App;