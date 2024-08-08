import { useLocation, useNavigate } from "react-router-dom";
import { HeroCard } from "../components/HeroCard";
import { useForm } from "../hooks/useForm/useForm";
import { getHeroById, getHeroesByName } from "../helpers";
import { useEffect, useState } from "react";
export const SearchPage = () => {
  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const id = query.get("q") || "";
  const heroes = getHeroesByName(id);

  const onSearch = (event) => {
    event.preventDefault();

    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);

    onResetForm();
  };

  return (
    <>
      <h1>Busqueda</h1>
      <hr />

      <div className="row ">
        <div className="col-5">
          <h4>Buscar un heroe</h4>
          <hr />
          <form onSubmit={onSearch}>
            <input
              type="text"
              placeholder="Busca un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">Buscar</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {id === "" && (
            <div className="alert alert-primary">Busca un heroe</div>
          )}

          {heroes.length === 0 && id !== "" && (
            <div className="alert alert-danger">
              No hay heroes con nombre <b>{query}</b>
            </div>
          )}

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
