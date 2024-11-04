import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import "./stat.css";
import { FaHeart } from "react-icons/fa";
import { GiCrossedSwords } from "react-icons/gi";
import { RiSpeedFill } from "react-icons/ri";
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
    <div className="detail-stats">
    <ul>
        <li>Weight: {pokeData.weight} Kg</li>
        <li>Height: {pokeData.height}m</li>
    </ul>
    </div>
    <div className="abilities">
        <h4>{pokeData.abilities.map((pokeAbi) => pokeAbi.ability.name).join(', ')}</h4>
    </div>
    <div className="grid-three-cols">
        <div className="pokemon-info">
          <span className='health'><FaHeart /></span>
          <p className='hp'>{pokeData.stats[0].base_stat}</p>
        </div>
        <div className="pokemon-info">
          <span className='sword'><GiCrossedSwords /></span>
          <p className='attack'>{pokeData.stats[1].base_stat}</p>
        </div>
        <div className="pokemon-info">
          <span className='spd'><RiSpeedFill /> </span>
          <p className='speed'>{pokeData.stats[5].base_stat}</p>
        </div>
      </div>
 </div>
 </>
  )
}
