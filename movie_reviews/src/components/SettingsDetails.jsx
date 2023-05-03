import React, { useState, useEffect, useRef } from "react";
import SettingsMovies from "./SettingsMovies";
import supabase from "../services/SupabaseClient";
import SettingsSeries from "./SettingsSeries";
import SettingsGames from "./SettingsGames";
import SettingsBooks from "./SettingsBooks";
import SettingsNews from "./SettingsNews";
import AddMovies from "./AddMovies";
import AddSeries from "./AddSeries";
import AddGames from "./AddGames";
import AddBooks from "./AddBooks";
import AddNews from "./AddNews";

export default function SettingsDetails({ category }) {
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);
  const [add, setAdd] = useState(null);

  useEffect(() => {
    if (category) {
      const getData = async () => {
        const { data, error } = await supabase
          .from(category)
          .select("title, id");
        if (!error) {
          setData(data);
        }
      };
      getData();
    }
  }, [category]);

  const handleAdd = (e) => {
    e.preventDefault();
    setAdd(true);
  };

  const scrollRef = useRef();

  const handleScrollDown = (e) => {
    e.preventDefault();
    scrollRef.current.scrollTop = scrollRef.current.scrollTop + 300;
  };

  const handleScrollUp = (e) => {
    e.preventDefault();
    scrollRef.current.scrollTop = scrollRef.current.scrollTop - 300;
  };

  return (
    <>
      {data && (
        <>
          <div className="settings-title-list">
            <button className="settings-button" onClick={handleAdd}>
              dodaj wpis
            </button>
            {data.map((d) => {
              return (
                <button
                  className="settings-button"
                  style={{ padding: "0.5em" }}
                  key={d.id}
                  id={d.id}
                  onClick={(e) => {
                    setId(e.target.id);
                    setAdd(null);
                  }}
                >
                  {d.title}
                </button>
              );
            })}
          </div>
          <div className="settings-edit" ref={scrollRef}>
            <div
              style={{
                position: "fixed",
                diplay: "flex",
                flexDirection: "row",
                gap: 20,
                bottom: 30,
                width: 200,
                left: "60%",
              }}
            >
              <button
                className="settings-button"
                style={{ width: 50, marginRight: 20 }}
                onClick={handleScrollUp}
              >
                <i className="fa-solid fa-angle-up"></i>
              </button>
              <button
                className="settings-button"
                style={{ width: 50 }}
                onClick={handleScrollDown}
              >
                <i className="fa-solid fa-angle-down"></i>
              </button>
            </div>
            {!add && category === "movies" ? (
              <SettingsMovies category={category} id={id} />
            ) : null}
            {!add && category === "tvseries" ? (
              <SettingsSeries category={category} id={id} />
            ) : null}
            {!add && category === "games" ? (
              <SettingsGames category={category} id={id} />
            ) : null}
            {!add && category === "books" ? (
              <SettingsBooks category={category} id={id} />
            ) : null}
            {!add && category === "news" ? (
              <SettingsNews category={category} id={id} />
            ) : null}
            {add && category === "movies" ? <AddMovies /> : null}
            {add && category === "tvseries" ? <AddSeries /> : null}
            {add && category === "games" ? <AddGames /> : null}
            {add && category === "books" ? <AddBooks /> : null}
            {add && category === "news" ? <AddNews /> : null}
          </div>
        </>
      )}
    </>
  );
}
