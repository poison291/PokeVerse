import React, { useState, useEffect } from "react";
import "./Pokemon.css";
import PokeCard from "./PokeCard";
import { FaArrowUpLong } from "react-icons/fa6";

export default function Pokemon() {
  const [Pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [error, seterror] = useState(null);

  const limit = 15;
  const API = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${(page - 1) * limit}`;

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        //! Here We fetch initial/upper part of API
        const res = await fetch(API);
        const data = await res.json();

        //! Here We fetch internal/inner part of API
        const detaiData = data.results.map(async (prePoke) => {
          const res = await fetch(prePoke.url);
          const data = await res.json();

          return data;
        });

        const detailedpokeData = await Promise.all(detaiData);
        console.log(detailedpokeData);
        setPokemon((prev) => [...prev, ...detailedpokeData]);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        seterror(error);
      }
    };

    fetchPokemon();
  }, [page]);


  //! Infinite Sroll
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return <h1 className="loader">Loading Data.......</h1>;
  }

  return (
    <>
        <button onClick={() => scrollTo({
          top: 0,
          behavior: "smooth"
        })} className="arrow"><FaArrowUpLong /></button>
      <p className="note">(!Note: This build is On Progress)</p>
      <h1 className="title">Catch Your Pokemon</h1>

      <div className="parent">
        {Pokemon.map((pokemon, index) => {
          return <PokeCard key={index} pokeData={pokemon} />;
        })}
      </div>
    </>
  );
}
