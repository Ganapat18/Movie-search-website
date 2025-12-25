import { useState } from "react";
import "./App.css";

function App() {
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = async () => {
    const res = await fetch(`https://movie-search-website-juap.onrender.com/movies/${movie}`);
    const data = await res.json();
    setMovies(data.Search || []);
  };

  return (
    <div className="app">
      <h1>🎬 Movie Search</h1>

      <input
        type="text"
        placeholder="Enter movie name"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />
      <button onClick={searchMovie}>Search</button>

      <div className="movies">
        {movies.map((m, index) => (
          <div className="card" key={index}>
            <img src={m.Poster} alt={m.Title} />
            <h3>{m.Title}</h3>
            <p>{m.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
