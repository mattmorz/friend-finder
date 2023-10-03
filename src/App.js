import React from 'react';
import About from './components/About';
import Portfolio from "./components/Portfolio";
import Friends from './components/Friends';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Friends />} />
                <Route path="about" element={<About />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="home" element={<Home />} />
                <Route path="friends" element={<Friends />} />
            </Routes>
        </>

    )
}

export default App;