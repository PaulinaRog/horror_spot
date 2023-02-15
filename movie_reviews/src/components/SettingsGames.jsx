import React, { useEffect, useState, useRef } from "react";
import supabase from "../services/SupabaseClient";
import TextEditor from "../utils/TextEditor";
import ReactQuill from "react-quill";

export default function SettingsGames({ category, id }) {
  const [data, setData] = useState(null);
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
          setData(data);
          setTitle(data.title);
          setEditor(data.description);
          setCategory2(data.category);
          setSrc(data.src);
          setCopyright(data.copyright);
          setYear(data.year);
          setTrailer(data.trailer);
          setReviewAuthor(data.reviewAuthor);
          setPlatform(data.platform);
          setProducer(data.producer);
          setPublisher(data.publisher);
          setPolishVersion(data.polishVersion);
        }
      };
      getData();
    }
  }, [id]);

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
      const updateGames = async () => {
        const { data, error } = await supabase
          .from("games")
          .update({
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
      updateGames();
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
      const { error } = await supabase.from("games").delete().eq("id", id);
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
              trailer - embed (patrz instrukcja po lewej - włącz na nowej
              karcie, żeby nie utracić danych):
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
