import React, { useState, useEffect } from "react";
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
          <div className="settings-edit">
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
