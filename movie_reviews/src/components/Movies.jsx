import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import movies from "../utils/MoviesList";
import supabase from "../services/SupabaseClient";

export default function Movies({ category }) {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (category) {
      const getMovies = async () => {
        const { data, error } = await supabase
          .from("movies")
          .select("id, src, title")
          .eq("category", category)
          .order("id", { ascending: false });
        if (error) {
          console.log(error);
        }
        if (data) {
          setMovies(data);
        }
      };
      getMovies();
    } else {
      const getMovies = async () => {
        const { data, error } = await supabase
          .from("movies")
          .select("id, src, title")
          .order("id", { ascending: false });
        if (error) {
          console.log(error);
        }
        if (data) {
          setMovies(data);
        }
      };
      getMovies();
    }
  }, [category]);

  const scrollRef = useRef();

  const handleScrollDown = (e) => {
    e.preventDefault();
    scrollRef.current.scrollTop = scrollRef.current.scrollTop + 500;
  };

  const handleScrollUp = (e) => {
    e.preventDefault();
    scrollRef.current.scrollTop = scrollRef.current.scrollTop - 500;
  };

  return (
    <>
      <div className="movies" ref={scrollRef}>
        {movies &&
          movies.map((movie) => {
            return (
              <SingleMovie
                key={movie.id}
                id={movie.id}
                src={movie.src}
                title={movie.title}
              />
            );
          })}
      </div>
      <div className="movies-btn-top">
        <button className="movies-nav" onClick={handleScrollUp}>
          <i className="fa-solid fa-angle-up"></i>
        </button>
      </div>
      <div className="movies-btn">
        <button className="movies-nav" onClick={handleScrollDown}>
          <i className="fa-solid fa-angle-down"></i>
        </button>
      </div>
    </>
  );
}

function SingleMovie({ id, src, title }) {
  const navigate = useNavigate();
  const [style, setStyle] = useState({ display: "none" });
  const [img, setImg] = useState(null);

  const handleClick = (e) => {
    navigate(e.target.id);
  };

  const handleMouseOver = (e) => {
    setStyle({ display: "block" });
    setImg({ width: "17vw", height: "22vh", marginTop: 2, marginBottom: 3 });
  };

  const handleMouseLeave = () => {
    setStyle({ display: "none" });
    setImg({ width: "15vw", height: "20vh", marginTop: 10, marginBottom: 10 });
  };

  return (
    <>
      <div key={id} className="movies-container">
        <div
          style={{
            position: "relative",
            width: "15vw",
            height: "20vh",
            marginTop: 10,
            marginBottom: 10,
          }}
          className="movies-box"
        >
          <img
            className="movies-poster"
            onMouseOver={() => setStyle({ display: "block" })}
            onMouseLeave={() => setStyle({ display: "none" })}
            src={src}
            id={id}
            style={img && img}
          />
          <div
            style={style}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            id={id}
            className="movies-title-hover"
          >
            <p style={style} className="movies-box-title" id={id}>
              {title}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
