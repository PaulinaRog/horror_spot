import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import supabase from "../services/SupabaseClient";

export default function Settings() {
  const [category, setCategory] = useState(null);

  const handleClick = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <div className="settings">
        <button
          className="settings-button"
          value="movies"
          onClick={handleClick}
        >
          filmy
        </button>
        <button
          className="settings-button"
          value="tvseries"
          onClick={handleClick}
        >
          seriale
        </button>
        <button className="settings-button" value="games" onClick={handleClick}>
          gry
        </button>
        <button className="settings-button" value="books" onClick={handleClick}>
          książki
        </button>
        <button className="settings-button" value="news" onClick={handleClick}>
          aktualności
        </button>
      </div>
      <div className="settings-details">
        <SettingsDetails category={category} />
      </div>
    </>
  );
}

function SettingsDetails({ category }) {
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);

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

  return (
    <>
      {data && (
        <>
          <div className="settings-title-list">
            <button className="settings-button">dodaj wpis</button>
            {data.map((d) => {
              return (
                <button
                  className="settings-button"
                  style={{ padding: "0.5em" }}
                  key={d.id}
                  id={d.id}
                  onClick={(e) => {
                    setId(e.target.id);
                  }}
                >
                  {d.title}
                </button>
              );
            })}
          </div>
          <div className="settings-edit">
            <SettingsEdit category={category} id={id} />
          </div>
        </>
      )}
    </>
  );
}

function SettingsEdit({ category, id }) {
  const [data, setData] = useState(null);
  const formRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    if (id) {
      const getData = async () => {
        const { data, error } = await supabase
          .from(category)
          .select("*")
          .eq("id", id)
          .single();
        if (!error) {
          setData(data);
          titleRef.current.value = data.title;
          formRef.current[1].value = data.details;
          formRef.current[2].value = data.src;
          formRef.current[3].value = data.copyright;

          formRef.current[5].value = data.director;
          formRef.current[6].value = data.scenario;
          formRef.current[7].value = data.productionYear;
          formRef.current[8].value = data.productionCountry;
          formRef.current[9].value = data.trailer;
          formRef.current[10].value = data.reviewAuthor;
        }
      };
      getData();
    }
  }, [id]);

  return (
    <>
      {data && (
        <>
          {category === "movies" ? (
            <form
              ref={formRef}
              style={{ display: "grid" }}
              className="settings-edit-details"
            >
              <label>tytuł</label>
              <input ref={titleRef} />
              <label>recenzja</label>
              <textarea value={data.description} />
              <label>zdjęcie</label>
              <input value={data.src} />
              <label>prawa autorskie</label>
              <input value={data.copyright} />
              <label>kategoria</label>
              <select value={data.category}>
                <option value={null}>Wybierz...</option>
                <option value="slasher">slasher</option>
                <option value="psychologiczne">psychologiczne</option>
                <option value="paranormalne">paranormalne</option>
                <option value="potwory">potwory</option>
                <option value="gore">gore</option>
                <option value="foundFootage">found footage</option>
              </select>
              <label>reżyser</label>
              <input value={data.director} />
              <label>scenariusz</label>
              <input value={data.scenario} />
              <label>rok premiery</label>
              <input value={data.productionYear} />
              <label>kraj</label>
              <input value={data.productionCountry} />
              <label>trailer</label>
              <input value={data.trailer} />
              <label>autor recenzji</label>
              <input value={data.reviewAuthor} />
              <button
                className="settings-button"
                style={{ width: 150, marginTop: 40, marginBottom: 60 }}
              >
                zapisz
              </button>
            </form>
          ) : null}
        </>
      )}
    </>
  );
}
