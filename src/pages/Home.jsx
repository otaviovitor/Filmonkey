import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import "../style/components/moviegrid.sass";

const apiKey = import.meta.env.VITE_API_KEY;
const popular = import.meta.env.VITE_POPULAR;

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const getPopularMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setPopularMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${popular}popular?${apiKey}&language=pt-BR&page=1`;

    getPopularMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <div className="container-title">
        <h2 className="title">Filmes populares</h2>
      </div>

      <div className="movies-container">
        {popularMovies.length > 0 &&
          popularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>

      <footer>
        
      </footer>
    </div>
  );
};

export default Home;
