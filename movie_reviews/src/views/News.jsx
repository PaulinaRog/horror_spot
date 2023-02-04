import { getToPathname } from "@remix-run/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import NewsArticle from "../components/NewsArticle";
import NewsCard from "../components/NewsCard";
import news from "../utils/NewsList";

export default function News() {
  const { pathname } = useLocation();
  const { id } = useParams();
  const scrollRef = useRef();
  const [scrollposition, setScrollPosition] = useState(null);

  useEffect(() => {
    scrollRef.current.scrollTop = scrollposition;
  }, [scrollposition]);
  console.log(scrollposition);

  const handleScrollUp = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollTop - 300;
  };

  const handleScrollDown = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollTop + 300;
  };

  return (
    <>
      <div className="news">
        <Nav />
        {pathname === "/news" ? (
          <>
            <div className="news-window" ref={scrollRef}>
              {news.map((n) => {
                return (
                  <NewsCard
                    title={n.title}
                    src={n.src}
                    text={n.text}
                    id={n.id}
                    key={n.id}
                    added={n.added}
                  />
                );
              })}{" "}
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
        ) : null}
        {pathname.includes(`${id}`) ? (
          <NewsArticle
            setScrollPosition={setScrollPosition}
            scrollposition={scrollRef.current.scrollTop}
          />
        ) : null}
        <div className="news-box">
          <h2 style={{ textAlign: "center", marginBottom: 20 }}>AKTUALNOŚCI</h2>
          <button className="news-box-button">wszystko</button>
          <button className="news-box-button">filmy</button>
          <button className="news-box-button">seriale</button>
          <button className="news-box-button">gry</button>
          <button className="news-box-button">książki</button>
          <button className="news-box-button">pozostałe</button>
        </div>
      </div>
    </>
  );
}
