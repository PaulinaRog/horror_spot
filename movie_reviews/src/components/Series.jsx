import React from "react";
import movies from "../utils/MoviesList";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import supabase from "../services/SupabaseClient";

export default function Series({ category }) {
  const scrollbox = useRef();
  const scrollCircle = useRef();
  const content = useRef();

  const navigate = useNavigate();

  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (category) {
      const getSeries = async () => {
        const { data, error } = await supabase
          .from("tvseries")
          .select("id, src, title")
          .eq("category", category);
        if (error) {
          console.log(error);
        }
        if (data) {
          console.log(data);
          setMovies(data);
        }
      };
      getSeries();
    } else {
      const getSeries = async () => {
        const { data, error } = await supabase
          .from("tvseries")
          .select("id, src, title");
        if (error) {
          console.log(error);
        }
        if (data) {
          console.log(data);
          setMovies(data);
        }
      };
      getSeries();
    }
  }, [category]);

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/tvseries/${e.target.id}`);
  };

  const handleScroll = () => {
    content.current.style.top = "-" + scrollbox.current.scrollTop + "px";
    scrollCircle.current.style.paddingTop =
      scrollbox.current.scrollTop * 2 + "px";
  };

  const handleScrollDown = () => {
    scrollbox.current.scrollTop = scrollbox.current.scrollTop + 500;
  };

  const handleScrollUp = () => {
    scrollbox.current.scrollTop = scrollbox.current.scrollTop - 500;
  };

  return (
    <>
      <button
        style={{ position: "absolute", top: 10, right: 20 }}
        className="series-scroll-button"
        onClick={handleScrollUp}
      >
        <i className="fa-solid fa-angle-up"></i>
      </button>
      <div className="series">
        <div id="visible-scrollbox">
          <div id="content" ref={content}>
            <div id="scroll-circle" ref={scrollCircle}></div>
            {movies &&
              movies.map((movie) => {
                return (
                  <div
                    key={movie.id}
                    className="series-img-container"
                    style={{
                      pointerEvents: "all",
                    }}
                  >
                    <div className="fucking-title" name={movie.title}>
                      <img
                        onClick={handleClick}
                        src={movie.src}
                        id={movie.id}
                        className="series-img"
                      />
                    </div>
                    <br />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div id="control-scrollbox" ref={scrollbox} onScroll={handleScroll}>
        <div id="scroll-length"></div>
      </div>
      <button
        style={{ position: "absolute", bottom: 10, right: 20 }}
        className="series-scroll-button"
        onClick={handleScrollDown}
      >
        <i className="fa-solid fa-angle-down"></i>
      </button>
    </>
  );
}
