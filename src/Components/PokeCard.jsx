import React from 'react'


export default function PokeCard({ pokeData }) {
  return (
    <>

      <div className="pokeCard-container">
 
      
        <img src={pokeData.sprites.other.dream_world.front_default} alt={pokeData.name} />
        <h1 className='name'>{pokeData.name}</h1>
        <div className="pokemon-info pokemon-highlight">
          <p className='pokeType'>
            {pokeData.types.map((pokeType) => pokeType.type.name).join(', ')}
          </p>
        </div>
        <div className="grid-three-cols">
        <div className="pokemon-info">
          <span> Hp:</span>
          <p>{pokeData.stats[0].base_stat}</p>
        </div>
        <div className="pokemon-info">
          <span>Attack:</span>
          <p>{pokeData.stats[1].base_stat}</p>
        </div>
        <div className="pokemon-info">
          <span>Speed: </span>
          <p>{pokeData.stats[5].base_stat}</p>
        </div>
      </div>
      </div>
    </>
  )
}
