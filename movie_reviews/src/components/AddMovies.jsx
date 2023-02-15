import React, { useEffect, useState, useRef } from "react";
import supabase from "../services/SupabaseClient";
import TextEditor from "../utils/TextEditor";
import ReactQuill from "react-quill";

export default function AddMovies() {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [category2, setCategory2] = useState(null);
  const [src, setSrc] = useState(null);
  const [copyright, setCopyright] = useState(null);
  const [director, setDirector] = useState(null);
  const [scenario, setScenario] = useState(null);
  const [year, setYear] = useState(null);
  const [country, setCountry] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [reviewAuthor, setReviewAuthor] = useState(null);
  const [text, setText] = useState(null);
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
      !director ||
      !scenario ||
      !year ||
      !country ||
      !trailer
    ) {
      setText("nie zostawiaj pustych pól!");
    } else {
      const addMovie = async () => {
        const { error } = await supabase.from("movies").insert({
          title: title,
          description: editor,
          src: src,
          category: category2,
          copyright: copyright,
          director: director,
          scenario: scenario,
          productionYear: year,
          productionCountry: country,
          trailer: trailer,
          reviewAuthor: reviewAuthor,
        });
        if (!error) {
          setText("Przesłano recenzję. Żeby zobaczyć zmiany, odśwież stronę.");
        }
      };
      addMovie();
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
          <option value="slasher">slasher</option>
          <option value="psychologiczne">psychologiczne</option>
          <option value="paranormalne">paranormalne</option>
          <option value="potwory">potwory</option>
          <option value="gore">gore</option>
          <option value="foundFootage">found footage</option>
        </select>
        <label>reżyser</label>
        <input
          value={director}
          onChange={(e) => {
            setDirector(e.target.value);
          }}
        />
        <label>scenariusz</label>
        <input
          value={scenario}
          onChange={(e) => {
            setScenario(e.target.value);
          }}
        />
        <label>rok premiery</label>
        <input
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
        <label>kraj</label>
        <input
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
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
          <option value="Przemo">Przemo</option>
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
