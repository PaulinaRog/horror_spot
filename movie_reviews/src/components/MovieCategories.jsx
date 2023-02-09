import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function MovieCategories({ setCategory }) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setCategory(selected);
  }, [selected]);

  const handleClick = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="movies-categories">
      <button
        className="movies-categories-button"
        onClick={handleClick}
        value="slasher"
      >
        slasher
      </button>
      <button
        className="movies-categories-button"
        onClick={handleClick}
        value="paranormalne"
      >
        paranormalne
      </button>
      <button
        className="movies-categories-button"
        onClick={handleClick}
        value="psychologiczne"
      >
        psychologiczne
      </button>
      <button
        className="movies-categories-button"
        onClick={handleClick}
        value="potwory"
      >
        potwory
      </button>
      <button
        className="movies-categories-button"
        onClick={handleClick}
        value="gore"
      >
        gore
      </button>
      <button
        className="movies-categories-button"
        onClick={handleClick}
        value="foundFootage"
      >
        found footage
      </button>
      <button
        className="movies-categories-button"
        onClick={handleClick}
        value={null}
      >
        wszystkie
      </button>
    </div>
  );
}
