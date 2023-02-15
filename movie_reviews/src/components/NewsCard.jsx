import React from "react";
import { useNavigate } from "react-router-dom";
import news from "../utils/NewsList";

export default function NewsCard({ id, title, text, src, added }) {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    navigate(`${e.target.id}`);
  };

  function createMarkup() {
    return { __html: text && text.substring(0, 200) + "..." };
  }

  return (
    <>
      <div className="news-card">
        <img className="news-img" src={src} />
        <div className="news-card-text">
          <h3 style={{ marginTop: 0 }}>{title}</h3>
          <p style={{ fontSize: 12, marginTop: -15 }}>{added}</p>
          <div dangerouslySetInnerHTML={createMarkup()}></div>
          <button className="news-card-button" id={id} onClick={handleNavigate}>
            czytaj
          </button>
        </div>
      </div>
    </>
  );
}
