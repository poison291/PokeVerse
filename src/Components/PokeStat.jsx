import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import "./stat.css"
import PokeCard from './PokeCard';
import { FaArrowLeft } from "react-icons/fa6";

export default function PokeStat() {
    const location = useLocation();
    const navigate = useNavigate()
    const { pokeData } = location.state || {};
    const backhandle = () => {
        navigate("/")
    }
    
  return (
 <>
 <div className="detail-container">
    <div className="back">
        <button onClick={backhandle}><FaArrowLeft /></button></div>
    <div className="image">
    <img src= {pokeData.sprites.other.dream_world.front_default} alt= {pokeData.name} />
    </div>
    <div className="Pokename">
        <h2>{pokeData.name}</h2>
    </div>
 </div>
 </>
  )
}
