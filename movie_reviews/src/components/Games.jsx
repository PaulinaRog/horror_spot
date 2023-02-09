import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import movies from "../utils/MoviesList";
import supabase from "../services/SupabaseClient";

export default function Games({ category }) {
  const scrollRef = useRef();

  const [games, setGames] = useState(null);

  useEffect(() => {
    if (category) {
      const getGames = async () => {
        const { data, error } = await supabase
          .from("games")
          .select("id, src, title")
          .eq("category", category);
        if (error) {
          console.log(error);
        }
        if (data) {
          setGames(data);
        }
      };
      getGames();
    } else {
      const getGames = async () => {
        const { data, error } = await supabase
          .from("games")
          .select("id, src, title");
        if (error) {
          console.log(error);
        }
        if (data) {
          setGames(data);
        }
      };
      getGames();
    }
  }, [category]);

  const handleScrollLeft = () => {
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - 700;
  };

  const handleScrollRight = () => {
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + 700;
  };

  return (
    <>
      <button className="games-scroll" onClick={handleScrollLeft}>
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <div className="games" ref={scrollRef}>
        {games &&
          games.map((game) => {
            return (
              <SingleGame
                key={game.id}
                id={game.id}
                src={game.src}
                title={game.title}
              />
            );
          })}
      </div>
      <button
        className="games-scroll"
        style={{ left: "unset", right: "7%" }}
        onClick={handleScrollRight}
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </>
  );
}

function SingleGame({ id, title, src }) {
  const navigate = useNavigate();

  const [style, setStyle] = useState({ display: "none" });
  const [img, setImg] = useState(null);

  const handleNavigate = (e) => {
    navigate(e.target.id);
  };

  const handleMouseOver = () => {
    setStyle({ display: "block" });
    setImg({
      width: "35vh",
      height: "23vh",
      marginTop: 0,
      marginLeft: 3,
      marginRight: 2,
    });
  };

  const handleMouseLeave = () => {
    setStyle({ display: "none" });
    setImg({
      width: "33vh",
      height: "20vh",
      marginTop: 15,
      marginLeft: 10,
      marginRight: 10,
    });
  };

  return (
    <>
      <div style={{ width: "33vw", height: "23vh", position: "relative" }}>
        <img
          src={src}
          id={id}
          className="games-img"
          onMouseOver={() => setStyle({ display: "block" })}
          onMouseLeave={() => setStyle({ display: "none" })}
          style={img && img}
        />
        <div
          id={id}
          onClick={handleNavigate}
          className="games-box"
          style={style}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <p style={style} className="games-box-title" id={id}>
            {title}
          </p>
        </div>
      </div>
    </>
  );
}
