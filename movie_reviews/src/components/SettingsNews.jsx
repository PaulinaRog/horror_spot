import React, { useEffect, useState, useRef } from "react";
import supabase from "../services/SupabaseClient";
import TextEditor from "../utils/TextEditor";
import ReactQuill from "react-quill";

export default function SettingsNews({ category, id }) {
  const [data, setData] = useState(null);
  const [title, setTitle] = useState(null);
  const [added, setAdded] = useState(null);
  const [description, setDescription] = useState(null);
  const [src, setSrc] = useState(null);
  const [category2, setCategory2] = useState(null);
  const [copyright, setCopyright] = useState(null);
  const [author, setAuthor] = useState(null);
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
          setAdded(data.added);
          setData(data);
          setTitle(data.title);
          setEditor(data.text);
          setSrc(data.src);
          setCategory2(data.category);
          setCopyright(data.copyright);
        }
      };
      getData();
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      author === "null" ||
      !title ||
      !editor ||
      !src ||
      category2 === "null" ||
      !copyright ||
      !added
    ) {
      setText("nie zostawiaj pustych pól!");
    } else {
      const updateNews = async () => {
        const { data, error } = await supabase
          .from("news")
          .update({
            title: title,
            added: added,
            text: editor,
            src: src,
            category: category2,
            copyright: copyright,
            author: author,
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
      updateNews();
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
      const { error } = await supabase.from("news").delete().eq("id", id);
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
            <label>tytuł</label>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label>godzina i data</label>
            <p style={{ marginTop: 20, marginBottom: 10 }}>
              format godziny HH:MM, format daty DD.MM.YYYY, oddzielone tylko
              spacją - np. 16:40 05.02.2023
            </p>
            <input
              value={added}
              onChange={(e) => {
                setAdded(e.target.value);
              }}
            />
            <label>tekst njusa</label>
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
              <option value="null">Wybierz...</option>
              <option value="filmy">filmy</option>
              <option value="seriale">seriale</option>
              <option value="gry">gry</option>
              <option value="książki">książki</option>
              <option value="pozostałe">pozostałe</option>
            </select>
            <label>autor njusa</label>
            <select
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
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
