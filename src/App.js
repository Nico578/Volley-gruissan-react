import React from "react";
import "./styles/index.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Nationale3 from "./pages/Nationale3";
import Partenaires from "./pages/Partenaires";
import Prenationale from "./pages/Prenationale";
import Regionale from "./pages/Regionale";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/nationale3" element={ <Nationale3 />} />
        <Route path="/prenationale" element={ <Prenationale />} />
        <Route path="/regionale" element={ <Regionale />} />
        <Route path="/partenaires" element={ <Partenaires />} />
        <Route path="/blog" element={ <Blog />} />
        <Route path="/contact" element={ <Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
