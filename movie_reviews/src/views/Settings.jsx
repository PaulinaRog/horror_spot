import React, { useEffect, useState } from "react";
import SettingsDetails from "../components/SettingsDetails";

import media1 from "../assets/bibliotekaMediow.png";
import media2 from "../assets/media2.png";
import media3 from "../assets/media3.png";
import media4 from "../assets/media4.png";

import yt1 from "../assets/yt1.png";
import yt2 from "../assets/yt2.png";
import supabase from "../services/SupabaseClient";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const [category, setCategory] = useState(null);
  const [show, setShow] = useState({ display: "none" });
  const [hide, setHide] = useState(null);
  const [isLogged, setIsLogged] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isUserLogged = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.log(error);
      }
      if (!user) {
        navigate("/login");
      }
      if (user) {
        setIsLogged(true);
      }
    };

    isUserLogged();
  }, []);

  const handleClick = (e) => {
    setCategory(e.target.value);
    setShow({ display: "none" });
    setHide(null);
  };

  const handleInstruction = () => {
    setShow({ display: "block" });
    setHide({ display: "none" });
  };

  const handleLogOut = () => {
    const logOut = async () => {
      let { error } = await supabase.auth.signOut();

      if (error) {
        console.log(error);
      }
      navigate("/login");
      setIsLogged(false);
      window.location.reload(false);
    };
    logOut();
  };

  return (
    <>
      {isLogged && (
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
            <button
              className="settings-button"
              value="games"
              onClick={handleClick}
            >
              gry
            </button>
            <button
              className="settings-button"
              value="books"
              onClick={handleClick}
            >
              książki
            </button>
            <button
              className="settings-button"
              value="news"
              onClick={handleClick}
            >
              aktualności
            </button>
            <button className="settings-button" onClick={handleInstruction}>
              instrukcja
            </button>
            <button className="settings-button" onClick={handleLogOut}>
              wyloguj
            </button>
          </div>
          <div className="settings-details" style={hide && hide}>
            <SettingsDetails category={category} />
          </div>
          <div className="settings-instruction" style={show}>
            <label>dodawanie zdjęć:</label>
            <p style={{ marginTop: 20, marginBottom: 10 }}>
              Biblioteka zdjęć znajduje się tu:
            </p>
            <a href="http://serwer2227981.home.pl/autoinstalator/wordpress1/wp-admin/">
              WordPress - klik
            </a>
            <p style={{ marginTop: 20 }}>login: admin@floofer.pl</p>
            <p style={{ marginBottom: 20 }}>hasło: V8ATVkgL</p>
            <p style={{ marginTop: 20, marginBottom: 10 }}>
              krok 1 - media - dodaj
            </p>
            <img src={media1} style={{ width: "60%" }} />
            <p style={{ marginTop: 20, marginBottom: 10 }}>
              krok 2 - wybierz pliki
            </p>
            <img src={media2} style={{ width: "90%" }} />
            <p style={{ marginTop: 20, marginBottom: 10 }}>
              krok 3 - klik na zdjęcie
            </p>
            <img src={media3} style={{ width: "90%" }} />
            <p style={{ marginTop: 20, marginBottom: 10 }}>
              krok 4 - kopiuj url
            </p>
            <img src={media4} style={{ width: "90%", marginBottom: 40 }} />
            <p style={{ marginTop: 40, marginBottom: 10 }}>
              instrukcja dodawania trailerów (youtube)
            </p>
            <p style={{ marginTop: 20, marginBottom: 10 }}>klik - share</p>
            <img src={yt1} style={{ width: "50%" }} />
            <p style={{ marginTop: 20, marginBottom: 10 }}>
              klik - embed - skopiuj
            </p>
            <img src={yt2} style={{ width: "50%", marginBottom: 40 }} />
          </div>
        </>
      )}
    </>
  );
}
