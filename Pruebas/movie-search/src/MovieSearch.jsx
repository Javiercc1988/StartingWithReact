import React, { useState, useEffect } from "react";
import axios from "axios";

export const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "865f62d1"; // Reemplaza con tu clave de API de OMDB

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?t=${query}&apikey=${API_KEY}`
        );
        console.log(response.data); // Verifica los datos que llegan
        setResults(response.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchData();
    }
  }, [query]); // Ejecuta el efecto cuando query cambia

  useEffect(() => {
    console.log(results); // Verifica los resultados actualizados
  }, [results]); // Ejecuta el efecto cuando results cambia

  const handleSearch = (e) => {
    e.preventDefault();
    // No es necesario llamar a fetchData aquí, useEffect maneja la lógica de búsqueda
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div>
        {results && (
          <div>
            <h3>{results.Title}</h3>
            <p>{results.Year}</p>
            <img src={results.Poster} alt={results.Title} />
          </div>
        )}
      </div>
    </div>
  );
};
