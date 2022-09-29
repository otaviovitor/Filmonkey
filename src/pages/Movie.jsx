import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import "../style/components/movie.sass";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;

const Movie = ({ movies }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}&language=pt-BR`;
    getMovie(movieUrl);
  }, []);

  return (
    <div className="movie-page">
      {movie && (
        <>
          <div className="container-banner">
            <img
              src={imageUrl + movie.backdrop_path}
              className="background-image"
              alt=""
            />
            <div className="banner zindex">
              <div className="img-button">
                <img
                  src={imageUrl + movie.poster_path}
                  className="poster"
                  alt=""
                />
                <button>Assista agora</button>
              </div>
              <div className="container-info">
                <h2 className="title">{movie.title}</h2>
                <p>{movie.runtime}min</p>
                <p className="rated">
                  {" "}
                  <FaStar /> {movie.vote_average}{" "}
                </p>

                <p className="tagline">{movie.tagline}</p>
                <h3>Sinopse</h3>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
