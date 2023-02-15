import React, { useEffect, useState, useRef } from "react";
import supabase from "../services/SupabaseClient";
import TextEditor from "../utils/TextEditor";
import ReactQuill from "react-quill";

export default function AddBooks() {
  const [author, setAuthor] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [src, setSrc] = useState(null);
  const [publisher, setPublisher] = useState(null);
  const [year, setYear] = useState(null);
  const [series, setSeries] = useState(null);
  const [reviewAuthor, setReviewAuthor] = useState(null);
  const [text, setText] = useState(null);
  const [editor, setEditor] = useState("");

  const handleChange = (html) => {
    setEditor(html);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      reviewAuthor === "null" ||
      !title ||
      !editor ||
      !src ||
      !author ||
      !series ||
      !publisher ||
      !year
    ) {
      setText("nie zostawiaj pustych pól!");
    } else {
      const addBooks = async () => {
        const { error } = await supabase.from("books").insert({
          title: title,
          description: editor,
          src: src,
          publisher: publisher,
          year: year,
          author: author,
          series: series,
          reviewAuthor: reviewAuthor,
        });
        if (!error) {
          setText("Przesłano recenzję. Żeby zobaczyć zmiany, odśwież stronę.");
        }
      };
      addBooks();
    }
  };

  return (
    <>
      <form className="settings-edit-details">
        <label>autor</label>
        <input
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
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
        <label>wydawnictwo</label>
        <input
          value={publisher}
          onChange={(e) => {
            setPublisher(e.target.value);
          }}
        />
        <label>rok wydania</label>
        <input
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
        <label>seria</label>
        <input
          value={series}
          onChange={(e) => {
            setSeries(e.target.value);
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
