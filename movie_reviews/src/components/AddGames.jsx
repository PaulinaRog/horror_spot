import React, { useEffect, useState, useRef } from "react";
import supabase from "../services/SupabaseClient";
import TextEditor from "../utils/TextEditor";
import ReactQuill from "react-quill";

export default function AddGames() {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [category2, setCategory2] = useState(null);
  const [src, setSrc] = useState(null);
  const [copyright, setCopyright] = useState(null);
  const [year, setYear] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [reviewAuthor, setReviewAuthor] = useState(null);
  const [text, setText] = useState(null);
  const [platform, setPlatform] = useState(null);
  const [producer, setProducer] = useState(null);
  const [publisher, setPublisher] = useState(null);
  const [polishVersion, setPolishVersion] = useState(null);
  const [editor, setEditor] = useState("");

  const handleChange = (html) => {
    setEditor(html);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      category2 === "null" ||
      reviewAuthor === "null" ||
      !title ||
      !editor ||
      !src ||
      !copyright ||
      !platform ||
      !publisher ||
      !year ||
      !producer ||
      !trailer ||
      polishVersion === "null"
    ) {
      setText("nie zostawiaj pustych pól!");
    } else {
      const addGames = async () => {
        const { error } = await supabase.from("games").insert({
          title: title,
          description: editor,
          src: src,
          category: category2,
          copyright: copyright,
          platform: platform,
          publisher: publisher,
          year: year,
          producer: producer,
          trailer: trailer,
          reviewAuthor: reviewAuthor,
          polishVersion: polishVersion,
        });

        if (!error) {
          setText("Przesłano recenzję. Żeby zobaczyć zmiany, odśwież stronę.");
        }
      };
      addGames();
    }
  };

  return (
    <>
      <form className="settings-edit-details">
        <label>tytuł</label>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>recenzja</label>
        <ReactQuill
          theme="snow"
          modules={TextEditor.modules}
          formats={TextEditor.formats}
          bounds={".app"}
          value={editor}
          onChange={handleChange}
          style={{
            outline: "1px solid rgb(144, 7, 7)",
            width: "100%",
            boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.373)",
            marginBottom: "3em",
            border: "none",
            caretColor: "rgb(144, 7, 7)",
          }}
        />
        <label>
          URL zdjęcia (patrz instrukcja po lewej - włącz na nowej karcie, żeby
          nie utracić danych)
        </label>
        <input
          value={src}
          onChange={(e) => {
            setSrc(e.target.value);
          }}
        />
        <label>prawa autorskie</label>
        <input
          value={copyright}
          onChange={(e) => {
            setCopyright(e.target.value);
          }}
        />
        <label>kategoria</label>
        <select
          value={category2}
          onChange={(e) => {
            setCategory2(e.target.value);
          }}
        >
          <option value={`${null}`}>Wybierz...</option>
          <option value="survival">survival</option>
          <option value="przygodowe">przygodowe</option>
          <option value="akcja">akcja</option>
        </select>
        <label>producent</label>
        <input
          value={producer}
          onChange={(e) => {
            setProducer(e.target.value);
          }}
        />
        <label>wydawca</label>
        <input
          value={publisher}
          onChange={(e) => {
            setPublisher(e.target.value);
          }}
        />
        <label>platforma</label>
        <input
          value={platform}
          onChange={(e) => {
            setPlatform(e.target.value);
          }}
        />
        <label>polska wersja</label>
        <select
          value={polishVersion}
          onChange={(e) => {
            setPolishVersion(e.target.value);
          }}
        >
          <option value="null">Wybierz...</option>
          <option value="tak">tak</option>
          <option value="nie">nie</option>
        </select>
        <label>rok premiery</label>
        <input
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
        <label>
          trailer - embed (patrz instrukcja po lewej - włącz na nowej karcie,
          żeby nie utracić danych):
        </label>
        <input
          value={trailer}
          onChange={(e) => {
            setTrailer(e.target.value);
          }}
        />
        <label>autor recenzji</label>
        <select
          value={reviewAuthor}
          onChange={(e) => {
            setReviewAuthor(e.target.value);
          }}
        >
          <option value={`${null}`}>Wybierz...</option>
          <option value="Vicek">Vicek</option>
          <option value="Puszek">Puszek</option>
          <option value="Tomek">Tomek</option>
        </select>
        {text ? <h3 style={{ marginTop: 40 }}>{text}</h3> : null}
        <button
          className="settings-button"
          style={{ width: 150, marginTop: 40, marginBottom: 60 }}
          onClick={handleSubmit}
        >
          zapisz
        </button>
      </form>
    </>
  );
}
