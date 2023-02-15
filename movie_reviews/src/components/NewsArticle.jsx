import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import news from "../utils/NewsList";
import supabase from "../services/SupabaseClient";

export default function NewsArticle({ setScrollPosition, scrollposition }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const scrollRef = useRef();

  const [news, setNews] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("id", id)
        .single();
      if (error) {
        console.log(error);
      }
      if (data) {
        setNews(data);
      }
    };
    getNews();
  }, []);

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

  function createMarkup() {
    return { __html: news && news.text };
  }

  return (
    <>
      <div className="news-window" ref={scrollRef}>
        <div className="news-article">
          <img className="news-article-img" src={news && news.src} />
          <h3>{news && news.title}</h3>
          <p style={{ fontSize: 12, marginTop: -15 }}>{news && news.added}</p>
          <p style={{ fontSize: 12, marginTop: -15 }}>
            {news && news.category}
          </p>
          <div dangerouslySetInnerHTML={createMarkup()}></div>
          <p style={{ alignSelf: "flex-end", marginTop: 20 }}>{`Autor: ${
            news && news.author
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
