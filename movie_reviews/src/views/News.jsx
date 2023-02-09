import { getToPathname } from "@remix-run/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import NewsArticle from "../components/NewsArticle";
import NewsCard from "../components/NewsCard";
import news from "../utils/NewsList";
import supabase from "../services/SupabaseClient";

export default function News() {
  const { pathname } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const scrollRef = useRef();
  const [scrollposition, setScrollPosition] = useState(null);
  const [news, setNews] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    scrollRef.current.scrollTop = scrollposition;

    if (category) {
      const getNews = async () => {
        const { data, error } = await supabase
          .from("news")
          .select("*")
          .eq("category", category);
        if (error) {
          console.log(error);
        }
        if (data) {
          setNews(data);
        }
      };
      getNews();
    } else {
      const getNews = async () => {
        const { data, error } = await supabase.from("news").select("*");
        if (error) {
          console.log(error);
        }
        if (data) {
          setNews(data);
        }
      };
      getNews();
    }
  }, [scrollposition, category]);

  const handleScrollUp = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollTop - 300;
  };

  const handleScrollDown = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollTop + 300;
  };

  const handleClick = (e) => {
    setCategory(e.target.value);
    if (pathname.includes(`/news/${id}`)) {
      navigate("/news");
    }
  };

  return (
    <>
      <div className="news">
        <Nav />
        {pathname === "/news" ? (
          <>
            <div className="news-window" ref={scrollRef}>
              {news &&
                news.map((n) => {
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
            scrollposition={
              !scrollRef.current.scrollTop ? 0 : scrollRef.current.scrollTop
            }
          />
        ) : null}
        <div className="news-box">
          <h2 style={{ textAlign: "center", marginBottom: 20 }}>AKTUALNOŚCI</h2>
          <button
            className="news-box-button"
            value={null}
            onClick={handleClick}
          >
            wszystko
          </button>
          <button
            className="news-box-button"
            value="filmy"
            onClick={handleClick}
          >
            filmy
          </button>
          <button
            className="news-box-button"
            value="seriale"
            onClick={handleClick}
          >
            seriale
          </button>
          <button className="news-box-button" value="gry" onClick={handleClick}>
            gry
          </button>
          <button
            className="news-box-button"
            value="książki"
            onClick={handleClick}
          >
            książki
          </button>
          <button
            className="news-box-button"
            value="pozostałe"
            onClick={handleClick}
          >
            pozostałe
          </button>
        </div>
      </div>
    </>
  );
}
