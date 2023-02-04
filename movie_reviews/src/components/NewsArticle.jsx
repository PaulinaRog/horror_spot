import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import news from "../utils/NewsList";

export default function NewsArticle({ setScrollPosition, scrollposition }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const scrollRef = useRef();

  const handleNavigate = () => {
    setScrollPosition(scrollposition);
    navigate("/news");
  };

  const handleScrollUp = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollTop - 500;
  };

  const handleScrollDown = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollTop + 500;
  };

  return (
    <>
      <div className="news-window" ref={scrollRef}>
        <div className="news-article">
          <img className="news-article-img" src={news[id - 1].src} />
          <h3>{news[id - 1].title}</h3>
          <p style={{ fontSize: 12, marginTop: -15 }}>{news[id - 1].added}</p>
          <p style={{ fontSize: 12, marginTop: -15 }}>
            {news[id - 1].category}
          </p>
          <p>{news[id - 1].text}</p>
          <p style={{ alignSelf: "flex-end", marginTop: 20 }}>{`Autor: ${
            news[id - 1].author
          }`}</p>
          <button className="news-article-button" onClick={handleNavigate}>
            wróć
          </button>
        </div>
      </div>
      <div className="news-scroll">
        <button className="news-scroll-button" onClick={handleScrollUp}>
          <i className="fa-solid fa-angle-up"></i>
        </button>
        <button className="news-scroll-button" onClick={handleScrollDown}>
          <i className="fa-solid fa-angle-down"></i>
        </button>
      </div>
    </>
  );
}
