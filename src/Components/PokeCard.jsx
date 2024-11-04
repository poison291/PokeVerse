import React from 'react'
import { FaHeart } from "react-icons/fa";
import { GiCrossedSwords } from "react-icons/gi";
import { RiSpeedFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import PokeStat from './PokeStat';


export default function PokeCard({ pokeData }) {
  const navigate = useNavigate();
  const pagehandleClick = () => {
    navigate("/PokeStat", { state: { pokeData } }); 
  }
  return (
    <>

      <div onClick={pagehandleClick} className="pokeCard-container">

        <figure className='.bloom-container '>
        <img className='bloom-image' src={pokeData.sprites.other.dream_world.front_default} alt={pokeData.name} />
        </figure>
        <h1 className='name'>{pokeData.name}</h1>
        <div className="pokemon-info pokemon-highlight">
          <p className='pokeType'>
            {pokeData.types.map((pokeType) => pokeType.type.name).join(', ')}
          </p>
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
