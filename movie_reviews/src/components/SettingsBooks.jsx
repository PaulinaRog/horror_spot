import React, { useEffect, useState, useRef } from "react";
import supabase from "../services/SupabaseClient";
import ReactQuill from "react-quill";
import TextEditor from "../utils/TextEditor";

export default function SettingsBooks({ category, id }) {
  const [data, setData] = useState(null);
  const [author, setAuthor] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [src, setSrc] = useState(null);
  const [publisher, setPublisher] = useState(null);
  const [year, setYear] = useState(null);
  const [series, setSeries] = useState(null);
  const [reviewAuthor, setReviewAuthor] = useState(null);
  const [text, setText] = useState(null);
  const [hide, setHide] = useState(null);
  const [confirmation, setConfirmation] = useState({ display: "none" });
  const [editor, setEditor] = useState("");

  const handleChange = (html) => {
    setEditor(html);
  };

  useEffect(() => {
    if (id) {
      const getData = async () => {
        const { data, error } = await supabase
          .from(category)
          .select("*")
          .eq("id", id)
          .single();
        if (!error) {
          setAuthor(data.author);
          setSeries(data.series);
          setData(data);
          setTitle(data.title);
          setEditor(data.description);
          setSrc(data.src);
          setYear(data.year);
          setReviewAuthor(data.reviewAuthor);
          setPublisher(data.publisher);
        }
      };
      getData();
    }
  }, [id]);

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
      const updateBooks = async () => {
        const { data, error } = await supabase
          .from("books")
          .update({
            title: title,
            description: editor,
            src: src,
            publisher: publisher,
            year: year,
            author: author,
            series: series,
            reviewAuthor: reviewAuthor,
          })
          .eq("id", id)
          .select("*");
        if (error) {
          console.log(error);
        }
        if (data) {
          setText("Przesłano recenzję. Żeby zobaczyć zmiany, odśwież stronę.");
          console.log(data);
        }
      };
      updateBooks();
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setHide({ display: "none" });
    setConfirmation({ display: "block" });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setHide({ display: "grid" });
    setConfirmation({ display: "none" });
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    const deletePost = async () => {
      const { error } = await supabase.from("books").delete().eq("id", id);
      if (!error) {
        setHide({ display: "grid" });
        setConfirmation({ display: "none" });
        setText("usuwanie powiodło się.");
      }
    };
    deletePost();
  };

  return (
    <>
      {data && (
        <>
          <form style={hide && hide} className="settings-edit-details">
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
              URL zdjęcia (patrz instrukcja po lewej - włącz na nowej karcie,
              żeby nie utracić danych)
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
            <button
              className="settings-button"
              style={{ width: 150 }}
              onClick={handleDelete}
            >
              usuń
            </button>
          </form>
          <div style={confirmation}>
            <h2>Czy na pewno chcesz usunąć post?</h2>
            <div>
              <button
                className="settings-button"
                style={{ width: 150, margin: 20 }}
                onClick={handleConfirm}
              >
                tak
              </button>
              <button
                className="settings-button"
                style={{ width: 150, margin: 20 }}
                onClick={handleCancel}
              >
                nie
              </button>
            </div>
            {text ? <h3 style={{ marginTop: 40 }}>{text}</h3> : null}
          </div>
        </>
      )}
    </>
  );
}
