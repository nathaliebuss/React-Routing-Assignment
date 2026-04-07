import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
import Layout from "./pages/Layout/index";
import Home from "./pages/Home";
import About from "./pages/About";
import Characters from "./pages/Characters";
import Heroes from './pages/Characters/Heroes'
import Enemies from './pages/Characters/Enemies'
import AllCharacters from "./pages/Characters/AllCharacters";
import CharacterDetail from "./components/CharacterDetails";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        {/*  navbar on all pages */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          {/* nested routes for drop-down menu */}
          <Route path="/characters" element={<Characters />}>
            <Route path="/characters/heroes" element={<Heroes />} />
            <Route path="/characters/enemies" element={<Enemies />} />
            <Route path="/characters/all-characters" element={<AllCharacters/>} />
          </Route>

          {/* to get right char in searchbar querrie dynamically */}
          <Route path="/characters/:id" element={<CharacterDetail />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
