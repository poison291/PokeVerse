import { useState } from 'react'
import Pokemon from "./Components/Pokemon"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import PokeStat from './Components/PokeStat';
import PokeCard from './Components/PokeCard';

function App() {


  return (
    <>
     <Router>
            <Routes>
                <Route path="/" element={<Pokemon />} />
                <Route path="/PokeStat" element={<PokeStat />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
